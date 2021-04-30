angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    $(".lnblist > li > a").on("click", function(event){
    var _target = $(event.target);
    var _index = $('.lnblist > li > a').index(_target);
    var lnb_link = $('.lnblist > li');
    if(lnb_link.eq(_index).hasClass("on")) { 
		lnb_link.eq(_index).removeClass("on");
		lnb_link.eq(_index).find($('.lnb_dp2')).slideUp();     
    } else { 
      lnb_link.removeClass("on");  
      lnb_link.eq(_index).addClass("on");
      lnb_link.find($('.lnb_dp2')).slideUp();
      lnb_link.eq(_index).find($('.lnb_dp2')).slideDown();     
    }	
  });
  
	if( $('body').hasClass("menu-open") ) { 
		$('body').addClass("aaaaa");
	} else { 
			
	}  

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TabCtrl', function($scope, $ionicModal, $timeout) {
  /* 매터리얼 탭 */
  $('.tab .tab_list a').on("click", function(e){
    var _target = $(e.target);
    var _index = $('.tab .tab_list a').index(_target);

    if($('.mattab .tab').eq(_index).hasClass("on")) { 
      return false;
    } 
    else { 

      $('.tab .tab_list').removeClass("on");
      $('.tab .tab_list').eq(_index).addClass("on");
      $('.tabcont').removeClass("on");
      $('.tabcont').eq(_index).addClass("on");
    }
    
    var parent, ink, d, x, y;
    
    parent = $(this).parent();
    
    console.log(parent);
    //create .ink element if it doesn't exist
    if(parent.find(".ink").length == 0)
      parent.prepend("<span class='ink'></span>");
      
    ink = parent.find(".ink");      
    //incase of quick double clicks stop the previous animation
    ink.removeClass("animate");
  
    //set size of .ink
    if(!ink.height() && !ink.width())
    {
      //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
      d = Math.max(parent.outerWidth(), parent.outerHeight());
      ink.css({height: d, width: d});
    };
    //get click coordinates
    //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
    x = e.pageX - parent.offset().left - ink.width()/2;
    y = e.pageY - parent.offset().top - ink.height()/2;
    //set the position and add class .animate
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
    
    /** 에니메이션 이 끝날경우 체크 **/
    /**
    parent.find('.ink').on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd'  , function(e) {  
      location.href="/pub/html_guide/guide/sub1_etc.html";  
      }  
    ); 
    **/     
  }); 		
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('MainCtrl', function($scope) {

})

.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
  function initialize() {
	var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
	
	var mapOptions = {
	  center: myLatlng,
	  zoom: 16,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map"),
		mapOptions);
	
	//Marker + infowindow + angularjs compiled ng-click
	var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
	var compiled = $compile(contentString)($scope);

	var infowindow = new google.maps.InfoWindow({
	  content: compiled[0]
	});

	var marker = new google.maps.Marker({
	  position: myLatlng,
	  map: map,
	  title: 'Uluru (Ayers Rock)'
	});

	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.open(map,marker);
	});

	$scope.map = map;
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  
  $scope.centerOnMe = function() {
	if(!$scope.map) {
	  return;
	}

	$scope.loading = $ionicLoading.show({
	  content: 'Getting current location...',
	  showBackdrop: false
	});

	navigator.geolocation.getCurrentPosition(function(pos) {
	  $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
	  $scope.loading.hide();
	}, function(error) {
	  alert('Unable to get location: ' + error.message);
	});
  };
  
  $scope.clickTest = function() {
	alert('Example of infowindow with ng-click')
  };
  
})

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

// Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Enter Wi-Fi Password',
    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };

 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

 // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: '제품 준비중입니다.',
     template: '<center>빠른시일내에 좋은제품으로 <br />찾아뵙겠습니다.</center>'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };
});