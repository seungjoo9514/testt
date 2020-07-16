
$(function(){
	navComponent.init();
	tabComponent.init();
})

/* 네비게이션 공통변수 선언 */
var navComponent = { }

/* 공통페이지 탭메뉴 공통변수 선언 */
var tabComponent = { }

/* 글로벌 메뉴 초기화 */
navComponent.init = function(){
	$('.nav_dp2').css('height','0');
	$('.loc_dp2').css('height','0');
	//$('.loc_dp2').slideUp(0);
}

$('.nav > li > a').on('click', function(e){
	var navlink = $('.nav > li > a');
	var navlinkparent = $('.nav > li > a').parent();
	var _target =  $(e.target);
	var _index = navlink.index(_target);	
	if(navlinkparent.eq(_index).hasClass("on")) { 
		return false;
	} else { 
		navlinkparent.removeClass("on");
		navlinkparent.eq(_index).addClass("on");
		navlinkparent.eq(_index).find('.nav_dp2').css('display', 'block');
		
		var liHT = navlinkparent.eq(_index).find(".nav_dp2 > li").outerHeight();
		var lilength =  navlinkparent.eq(_index).find(".nav_dp2 li").length;
		var lilgHT = liHT * lilength;
		
		navlinkparent.find('.nav_dp2').animate({height : '0'},{duration:50},{complete : function(){
	
		}});
		navlinkparent.eq(_index).find('.nav_dp2').animate({height : (lilgHT + "px")},{duration:50},{complete : function(){
			//navlinkparent.find('.nav_dp2').css('display', 'none');
		}});				
	}	
});

$('header').mouseleave(function(){
	$('.nav > li ul.nav_dp2').slideUp(300);	
	$('.nav > li').removeClass("on");
	$('.nav > li').find('.nav_dp2').animate({height : '0'});
});

var locmoving = false;

$('li.current > a').on("click", function(){
	if(locmoving) return;
	if($('.loc_dp2').hasClass("on") && false == locmoving){
		locmoving = true;
		$('.loc_dp2').removeClass("on");
		$('.loc_dp2').animate({height: '0'},{complete : function(){
			locmoving = false;
			$('.loc_dp2').css('display', 'none');
		}}); 
	} else { 
		locmoving = true;
		var locHT = $('.loc_dp2 li').height();
		var loclength = $('.loc_dp2 li').length;
		var loclgHT = locHT * loclength;
		$('.loc_dp2').addClass("on");
		$('.loc_dp2').css('display', 'block');
		$('.loc_dp2').animate({height: (loclgHT + "px")}, {complete : function(){
			locmoving = false;
		}}); 
	}
})
/*
$('li.current > a').on("click", function(){
	$('.loc_dp2').slideDown(300);
	if($('.loc_dp2').hasClass("on")){
		$('.loc_dp2').removeClass("on");
		$('.loc_dp2').removeClass("on");
		$('.loc_dp2').slideUp(300);
	} else {
		$('.loc_dp2').addClass("on");
		$('.loc_dp2').slideDown(300);
	};
})		
*/

/* 탭메뉴 초기화 */
tabComponent.init = function(){
	// $('.view').css('display','none');
	// $('.view').eq(0).css('display','block');
	$('.tabset > li > a').on("click", tabComponent.tabmove);
}

tabComponent.tabmove = function(e){
	var tabli = $('.tabset > li > a');
	var tabliparent = $('.tabset > li > a').parent();
	var _view = $('.view');
	var _target = $(e.target);
	var _index = tabli.index(_target);
	
	if(tabliparent.eq(_index).hasClass("on")) { 
	
	} else { 
		tabliparent.removeClass("on");
		tabliparent.eq(_index).addClass("on");
		
		_view.css('display','none');
		_view.eq(_index).css('display', 'block');
	}
}

var lypop = function(){
			$('.funcbox').hover(
				
				function(){
					var _this = $(this);
				if($(this).hasClass("on")){
				
				} else { 
					$('.funcbox').removeClass("on");
					
					if($(_this).find(".popbox > img").attr('src')) { 
						$(this).addClass("on");
					} else { 
						return false;
					}					
				}
			}, function(){
				$('.funcbox').removeClass("on");
			});
			
			$('.funcbox').on("click", function(e){
				var _this = $(this);
				var offsetTop = $(_this).offset().top;
				var winscTop = $(window).scrollTop();
				var winHT = $(window).height();
				console.log(winHT)
				if($('.func_lypop').size() == 0) { 				
					if($(_this).find(".popbox > img").attr('src')) { 
						$('body').append("<div class='func_lypop'><div class='lypopcont_outer'><div class='lypopcont'></div><a href='#none' class='close'>닫기</a></div><div class='overlay'></div></div>").on("click", '.close', function(){
							$('.func_lypop').fadeOut(200, function(){
								$(this).remove();
								$('body').css('overflow','visible');
							});	
						});
							setTimeout(function(){
								$('.func_lypop').addClass("on");
							}, 300)					
						$('.funcbox').removeClass("on");	
						$('body').css('overflow','hidden');
						$('.func_lypop').css({"top" : winscTop, "height" :  winHT});
					
					
					} else { 
						return false;
					}	
				}
				
	
				var popboxcont = _this.find(".popbox").html();										
				$('.func_lypop .lypopcont').html(popboxcont);		
				
				var popboximgHT = $('.func_lypop .lypopcont > img').outerHeight();
				console.log(popboximgHT);	
												
				if(popboximgHT > winHT) { 
					popboximgHT = winHT - 100;
				}
				
				$('.func_lypop .lypopcont_outer').css({"height": popboximgHT, "margin-top" : -(popboximgHT/2)});
				
				
				//var popboxHT = $(window).outerHeight()  - 100;
				//console.log(popboxHT);		
				
				//$('.func_lypop').css('height',popboxHT)		
			});	
}