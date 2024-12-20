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

		$(".at-title").click(function () {
			$(this)
				.toggleClass("active")
				.next(".at-tab")
				.slideToggle()
				.parent()
				.siblings()
				.find(".at-tab")
				.slideUp()
				.prev()
				.removeClass("active");
		});

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

		var swiperYear = new Swiper(".yearSwiper", {
			slidesPerView: 1.4,
			spaceBetween: 20,
			loop: true,
			navigation: {
				nextEl: ".year-swiper-button-next",
				prevEl: ".year-swiper-button-prev",
			},
			breakpoints: {
				640: {
					slidesPerView: 2.4,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 1.4,
					spaceBetween: 40,
				},
				1280: {
					slidesPerView: 1.4,
					spaceBetween: 75,
				},
				2100: {
					slidesPerView: 2.4,
					spaceBetween: 75,
				},
				3200: {
					slidesPerView: 3.4,
					spaceBetween: 75,
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