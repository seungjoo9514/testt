// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.main', {
    url: '/main',
    views: {
      'menuContent': {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl',
		controller: 'TabCtrl',
		controller: 'PopupCtrl'
      }
    }
  })
  .state('app.intro1', {
    url: '/intro1',
    views: {
      'menuContent': {
        templateUrl: 'templates/intro1.html'
      }
    }
  })
  .state('app.intro2', {
    url: '/intro2',
    views: {
      'menuContent': {
        templateUrl: 'templates/intro2.html'
      }
    }
  }) 
  .state('app.intro3', {
    url: '/intro3',
    views: {
      'menuContent': {
        templateUrl: 'templates/intro3.html'
      }
    }
  }) 
  .state('app.intro4', {
    url: '/intro4',
    views: {
      'menuContent': {
        templateUrl: 'templates/intro4.html'
      }
    }
  })       
  .state('app.biz1', {
    url: '/biz1',
    views: {
      'menuContent': {
        templateUrl: 'templates/biz1.html'
      }
    }
  }) 
  .state('app.biz2', {
    url: '/biz2',
    views: {
      'menuContent': {
        templateUrl: 'templates/biz2.html'
      }
    }
  })   
  .state('app.biz3', {
    url: '/biz3',
    views: {
      'menuContent': {
        templateUrl: 'templates/biz3.html'
      }
    }
  })
  .state('app.prd1', {
    url: '/prd1',
    views: {
      'menuContent': {
        templateUrl: 'templates/prd1.html'
      }
    }
  })    
  .state('app.prd2', {
    url: '/prd2',
    views: {
      'menuContent': {
        templateUrl: 'templates/prd2.html'
      }
    }
  })
  .state('app.pro1', {
    url: '/pro1',
    views: {
      'menuContent': {
        templateUrl: 'templates/pro1.html'
      }
    }
  })  
  .state('app.human1', {
    url: '/human1',
    views: {
      'menuContent': {
        templateUrl: 'templates/human1.html'
      }
    }
  })  
  .state('app.human2', {
    url: '/human2',
    views: {
      'menuContent': {
        templateUrl: 'templates/human2.html'
      }
    }
  })                               

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
