// JavaScript Document
(function($){
	$(document).ready(function() {

        /* navigation */
		// $(".navbar-toggler").click(function () {
		// 	$(this).toggleClass("open");
		// 	$("html").toggleClass("overflow-hidden");
		// });

		// $(".navbar-nav .nav-link").click(function(){
		// 	$(".navbar-toggler").removeClass("open");
		// 	$("html").removeClass("overflow-hidden");
		// 	$(".navbar-collapse").collapse("hide");
		// });
		/* navigation */

        $('#navbar-toggler').on('click', function () {
            $('#navbar-content').removeClass('translate-x-full');
            $("html").addClass("overflow-hidden");
        });
    
        // Close button for hiding the navbar
        $('#navbar-close').on('click', function () {
            $('#navbar-content').addClass('translate-x-full');
            $("html").removeClass("overflow-hidden");
        });

		if ($(".header").length > 0) {
			var stickyTop = $(".header").offset().top + 200;

			$(window).scroll(function () {
				var windowTop = $(window).scrollTop();
				if (
					stickyTop < windowTop &&
					$(".content").height() +
					$(".content").offset().top -
					$(".header").height() >
					windowTop) {
					$(".header").addClass("atfix");
				} else {
					$('.header').removeClass("atfix");
				}
			});
		}

		var swiperBanner = new Swiper(".bannerSwiper", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: ".banner-swiper-button-next",
				prevEl: ".banner-swiper-button-prev",
			},
		});

		var swiperSnack = new Swiper(".snackSwiper", {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			navigation: {
				nextEl: ".snack-swiper-button-next",
				prevEl: ".snack-swiper-button-prev",
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				1024: {
				  slidesPerView: 2,
				  spaceBetween: 80,
				},
				1280: {
				  slidesPerView: 3,
				  spaceBetween: 40,
				},
				1432: {
				  slidesPerView: 3,
				  spaceBetween: 80,
				},
			},
		});

		AOS.init();

		/* lazyload */
		var myLazyLoad = new LazyLoad();
		myLazyLoad.update();
		/* lazyload */

		/* OFI Browser */
		objectFitImages();
		/* OFI Browser */
	});
})(jQuery);