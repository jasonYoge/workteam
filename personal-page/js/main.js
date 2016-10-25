require.config({
	paths: {
		jquery: './jquery'
	}
});

require(['jquery'], function ($) {
	$('.intro div').on('click', function (event) {
		$(this).parent().next().addClass('active')
			.on('click', function (event) {
				$(this).removeClass('active');
			});
	});

	var $window = $(window),
		$list = $('.sidebar'),
		offsetTop = $list.offset().top;

	$window.scroll(function () {
		if ($window.scrollTop() >= offsetTop && $window.width() > 1000) {
			$list.addClass('fixed')
			.next().addClass('fixed');
		} else {
			$list.removeClass('fixed')
			.next().removeClass('fixed');
		}
	})
});