/*-------------------------------------------------------------------------
 * RENDIFY - Custom jQuery Scripts
 * ------------------------------------------------------------------------

	1.	Plugins Init
	2.	Site Specific Functions
	3.	Shortcodes
	4.      Other Need Scripts (Plugins config, themes and etc)
	
-------------------------------------------------------------------------*/
"use strict";

jQuery(document).ready(function($){
	
	
/*------------------------------------------------------------------------*/
/*	1.	Plugins Init
/*------------------------------------------------------------------------*/

	audio.play();
	var kaiguan=true;
	$('.audio').click(function(){
		if(kaiguan){
			$('.jp-play').css({display:'block'});
			$('.jp-pause').css({display:'none'});
			kaiguan=false;
			audio.pause();
		}else{
			$('.jp-play').css({display:'none'});
			$('.jp-pause').css({display:'block'});
			kaiguan=true;
			audio.play();
		}

	})
	/************** ToolTip *********************/

	function toolTipInit() {
	
		$('.menu li a').tooltip({
			placement: 'left'
		});
	}
	
	toolTipInit();



	/************** MixItUp Plugin *********************/
	$('#Grid').mixitup({
        effects: ['fade','grayscale'],
        easing: 'snap',
        transitionSpeed: 800
    });



	/************** Nice Scroll Plugin *********************/
	$("html").niceScroll({
		cursorcolor : '#a71e2b',
		cursorborder : 0,
		zindex : 99999,
	});

	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


/*------------------------------------------------------------------------*/
/*	2.	Site Specific Functions
/*------------------------------------------------------------------------*/


	/************** Responsive Navigation *********************/

	$('.menu-toggle-btn').click(function(){
        $('.responsive_menu').stop(true,true).slideToggle();
    });

    $(".responsive_menu a").click(function(){
        	$('.responsive_menu').hide();
        });


    
	/************** Open Filters on gallery page *********************/
	$(".toggle-filter").click(function(){
		$(".filter-controls").slideToggle();
		return false;
	});



	/************** Open Different Pages *********************/
	$(".main_menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).slideDown(600);
		$("#menu-container .homepage").hide();
		return false;
	});

	$(".main_menu a.homebutton").click(function(){
		$("#menu-container .homepage").show();
		return false;
	});

	$(".main_menu .show-1").click(function(){
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg5.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});

	$(".main_menu .show-2").click(function(){
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg8.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});

	$(".main_menu .show-3").click(function(){
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg2.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});

	$(".main_menu .show-4").click(function(){
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg7.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});

	$(".main_menu .show-5").click(function(){
		loadScript();
		$(".bg-image").fadeOut('slow', function(){
			$(this).css({
				'background-image' : 'url(images/bg4.jpg)',
			}).fadeIn('slow');
		});
		return false;
	});


	/************** Services Offer Effect *********************/
	$('.services .header .service-header').hover(function () {
	    var t = $(this);
	    t.find('h4').hide();
	    $(this).parent().find('.header-bg').stop(true, true).animate({
	        width: '100%'
	    }, 'fast', function () {
	        t.find('h4').addClass('active').fadeIn('fast')
	    })
	}, function () {
	    var t = $(this);
	    t.find('h4').hide();
	    t.parent().find('.header-bg').stop(true, true).animate({
	        width: 60
	    }, 'fast', function () {
	        t.find('h4').removeClass('active').fadeIn('fast')
	    });
	});

});