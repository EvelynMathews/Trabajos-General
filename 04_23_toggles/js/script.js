$(".box").on("click", function(e) {
	e.preventDefault();

	if ($(this).hasClass("box-top")) {
		$(this).toggleClass("orange");
	}

	else if ($(this).hasClass("box-center")) {
		$(".box-center").not(this).toggleClass("cyan");
	}

	else if ($(this).is("#bottom-center")) {
		$(this).siblings().toggleClass("deep-orange");
	}
});

//otras maneras de recuperar el id:
// e.target.id() --> target equivale a "this" en un evento