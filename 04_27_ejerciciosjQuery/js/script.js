$("button").on("click", function(e) {
	e.preventDefault();
	var errors = $("#errors");
	if (errors.css("display") == "block") {// si ya hay errores en el div
		errors.children("li").remove(); // borrarlos al submittear de nuevo
		$("input").removeClass("errorBorder") // sacar los bordes rojos
	}
	
	validateRequired();
	validateAge();
})

//FUNCIONES DE VALIDACIÓN

function validateRequired() {
	// campos obligatorios
	let requiredFields = Array.from($(".required > input, .required > select"));
		$.each(requiredFields, function(index, element) {
			if (element.type == "text" || element.type == "date") {
				if (element.value == "") {
					showErrorMessage(element, "required");
				}	
			}

			else if (element.type == "checkbox") {
				if (!element.checked) {
					showErrorMessage(element, "required");
				}
			}

			else if (element.tagName == "SELECT") {
				let value = $(this).children().value;
				if (value == undefined) {
					showErrorMessage(element, "required");
				}
			}
	});
}

function validateAge() {
	var currentYear = 2018;
	var birthYear = parseInt($("input[type='date']").val().slice(0,4));	// agarra el valor del input y extrae los primeros 4 caracteres (el año)
	if ((currentYear - birthYear) < 21) {
		showErrorMessage(element = 0, "age");
		// var menorEdad = document.getElementById("menorEdad"); // mensaje de error
		// menorEdad.style.visibility = "visible";
		// menorEdad.textContent = "Debes ser mayor de edad";
	}
}

function showErrorMessage(element, error) {
	// campo obligatorio
	if ($("#errors").css("display") == "none") {
		$("#errors").css("display", "block");
	}

	let li = $("<li></li>");
	let id = element.id;
	
	if (error == "required") {
		let label = $("label[for='"+id+"']")[0].textContent;
		li.text("Campo obligatorio: "+label)
	}

	else if (error == "age") {
		li.text("Debes ser mayor de 21 años");
	}

	$("#errors").append(li);
	$("input#"+id).addClass("errorBorder");
	return false;
}



// POPUP TÉRMINOS Y CONDICIONES
var modal = $("#modal");

//abrir modal
$(document).on("click", "#modal-link", function(e) {
	e.preventDefault;
	modal.css("display", "flex");
	return false;
});

//cerrar modal desde botones
$(".close").on("click", function(e) {
	e.preventDefault;
	//aceptar y cerrar
	if ($(this).hasClass("aceptar")) {
		$("#terms").prop("checked", true);
	}
	modal.css("display", "none");
});

//cerrar modal desde afuera
$(document).on("click", "#modal", function(e){
		modal.css("display", "none");
});



// validar nombre y apellido? (sin números, etc)
	// error "formato inválido"

// validar imagen (formato?)
	// error "sólo extensiones jpg, etc"
