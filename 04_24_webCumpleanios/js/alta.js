// PREGUNTAR POR LOCALSTORAGE EN EL IF ANTES DE DECLARAR VARIABLES
var jsonCumples = JSON.parse(localStorage.getItem("jsonCumples")) // objeto que contiene el array y el largo del array
var listaCumpleaneras = jsonCumples.listaCumpleaneras; // array de objetos cumpleañera

// localStorage.clear() // utilitario

if (jsonCumples == null || jsonCumples == undefined) {
	console.log("no hay datos guardados");
	listaCumpleaneras = []; // si no hay nada, creo el array de cumpleaños
}

else {
	console.log("hay datos guardados");
	listaCumpleaneras.forEach(function(e) {
		console.log(e.nombre); // si hay algo, muestro los nombres por consola
	})
}


$("img").on("click", function(e) { //elegir imagen
	e.preventDefault();
	let imgName = $(this).data("nombre");//saca el nombre de la imagen seleccionada
	$("#imgName").val(imgName);//pone el nombre en el campo de imagen seleccionada
})


$("button").on("click", function(e) { //enviar datos
	e.preventDefault();

	let cumpleanera = { //asigno los datos a un objeto (uno por cumpleañera)
		'nombre': $("#name").val(),
		'fecha':  $("#date").val(),
		'imagen': $("#imgName").val()//lo saca del campo "imagen seleccionada"
	};

	listaCumpleaneras.push(cumpleanera); // mando el objeto al array de cumpleaños

	jsonCumples = { // armo objeto JSON con el array de cumpleaños y el largo del array como atributos
		'listaCumpleaneras': listaCumpleaneras,
		'total': listaCumpleaneras.length
	};

	//guardar en local storage
	let jsonCumpleString = JSON.stringify(jsonCumples); // guardo el objeto stringificado en una variable
	localStorage.setItem("jsonCumples", jsonCumpleString); //guardo el objeto jsonCumples stringifieado en localStorage

	console.log(`Se guardó:${cumpleanera.nombre} - ${cumpleanera.fecha}, son ${jsonCumples.total} cumpleaños guardados`);

});


