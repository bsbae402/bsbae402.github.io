;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	var dropDownMenu = function() {
		
	 	$(".drop-down-menu").hover(function(){
         $(this).addClass('active');
    	},
    	function(){
        	$(this).removeClass('active');
    	});

	};

	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	var owlCarouselMain = function() {
		var owl = $('.owl-carousel-main');

		owl.owlCarousel({
			items:1,
			mouseDrag: true,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: true,
			dots: true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: true,
			autoplayHoverPause: true,
			autoplaySpeed: 80,
			navText: [	
				"<i class='icon-chevron-left owl-direction'></i>",
				"<i class='icon-chevron-right owl-direction'></i>"
			]
		});

		$(window).resize(function(){
			 owl.trigger('refresh.owl.carousel');
		});
	};

	var offcanvasMenu = function() {
		$('#wrap').prepend('<div id="fh5co-offcanvas" />');
		$('#fh5co-offcanvas').append( $('#fh5co-main-nav').clone() );
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);

			if ( $('body').hasClass('offcanvas-visible') )  {
				$('body').removeClass('fh5co-overflow offcanvas-visible');
				$this.removeClass('active');
			} else {
				$('body').addClass('fh5co-overflow offcanvas-visible');
				$this.addClass('active');
			}

			event.preventDefault();

		});

		$('#fh5co-offcanvas').css('height', $(window).height());

		$(window).resize(function() {
			$('#fh5co-offcanvas').css('height', $(window).height());
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});

	};

	
	var countDownDate = new Date("May 18, 2018 0:0:0").getTime();
	
	// Document on load.
	$(function(){
		var x = setInterval(function() {

			// Get todays date and time
			var now = new Date().getTime();
		  
			// Find the distance between now an the count down date
			var distance = countDownDate - now;
		  
			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		  
			// Display the result in the element with id="demo"
			document.getElementById("countdown1").innerHTML = days + "d " + hours + "h "
			+ minutes + "m " + seconds + "s ";
		  
			// If the count down is finished, write some text 
			if (distance < 0) {
			  clearInterval(x);
			  document.getElementById("countdown1").innerHTML = "Now I am jobless!";
			}
		}, 1000);

		dropDownMenu();
		owlCarouselMain();
		offcanvasMenu();
		burgerMenu();
		loaderPage();
		goToTop();

	});


}());