$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 300,
		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="logo/chevron-left-solid.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="logo/chevron-right-solid.png"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				dots: true,
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				dots: true,
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			  }
			}
		  ]
	});

	(function($) {
	$(function() {
		  
		  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
			$(this)
			  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		  });
		  
		});
		})(jQuery);
	$('.catalog-item__link').each(function(i)) {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.catalog-item__content').toggleClass('.catalog-item__content_active');
			$('.catalog-item__list').toggleClass('.catalog-item__content_active');
		})
	}
  });