// give color to tags in the tagcloud
$(function() {
	$('.tagcloud').children().each(function(i, elem) {
		var e = $(elem);
		var text = e.text();

		switch(text) {
			case '產品':
				e.addClass('product');
				break;
			case '技術':
				e.addClass('technical');
				break;
			case '設計':
				e.addClass('design');
				break;
		}

	});
});