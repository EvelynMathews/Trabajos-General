function validar(event) {
	event.preventDefault();
	//valida text inputs
	var nombre = $("#nombre").val();
	var apellido = $("#apellido").val();
	var email = $("#email").val();

	console.log(nombre, apellido, email);

	//esto activa el mensaje de error para todos los campos cuando al menos uno esté vacío
	//falta forEach para identificar campos vacíos y activar el error correspondiente
	if (nombre.length == 0 || apellido.length == 0 || email.length == 0) { // o nombre == "";
		let errorMsg = $("#error");
		errorMsg.html("Hay campos sin completar");
		// $("#nombre").css("border", "1px solid red"); // agrego el css acá
		// $("#nombre").addClass("error"); // especificada en css
		return false; // para el .submit() // la función muere acá
	}

	//valida checkboxes
	//método jQuery
	var generoInputs = $(".genero");
	$.each(generoInputs, function(indice, elemento) { // $.each(array, callback()); (igual a forEach)
		 if(elemento.checked) {
		 	console.log("elegiste esta opción: " + elemento.id);
		 }
	});

	return true; // para el .submit()

	//método js
	// var generoInputs = Array.from($(".genero"));
	// generoInputs.forEach(function(elemento) {
	// 	if (elemento.checked) {
	// 		console.log("elegiste esta opción");
	// 	}
	// });
}


//LISTENER VERSIÓN 1
$("#alquilar").on("click", function(e) {
	if (validar(e)) {
		$("#alquiler").submit(); // se manda el formulario sólo si pasó la validación
		alert("Yay");
	}
});

$("#limpiar").on("click", function(e) { // agrega función adicional al botón reset
	$("#error").html("");
})

//LISTENER VERSIÓN 2
// $("#alquiler").on("submit", function(e) {
// 	validar(e);
// })

// validación (sólo requiere que todos los campos estén llenos, muestra error genérico si hay al menos uno vacío)
// nombre.length != 0 && apellido.length != 0 && email.length != 0
// nombre.length == 0 || apellido.length == 0 || email.length == 0
// estos son equivalentes