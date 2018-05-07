$("button").on("click", function(e) {
	e.preventDefault();
	let compra = {
		'producto': $(".producto").val(),
		'cantidad': $(".cantidad").val(),
		'precio': $(".precio").val() 
	}

	console.log(compra)
});
