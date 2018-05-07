const rutaImg = "img/"
var jsonCumples = JSON.parse(localStorage.getItem("jsonCumples")); // traigo el objeto (que contiene el array y el largo) de localStorage, parseo y meto en variable 
console.log(jsonCumples);
var listaCumpleaneras = jsonCumples.listaCumpleaneras; //extraigo el array
console.log(listaCumpleaneras);
var listaLength = jsonCumples.total; // traigo el total para actualizarlo después


console.log("Recién cargaste la página y los cumpleaños guardados son:");

if (listaCumpleaneras == null) {
	console.log("No hay cumpleaños guardados")
}

else {
	listaCumpleaneras.forEach(function(e) {
		console.log(e.nombre);
	})
}

// localStorage.clear(); // utilitario

// objeto de prueba
// var cumples = [
// 		{
// 		'nombre': "Pepita",
// 		'fecha':  "05-04",
// 		'imagen': "Harley Quinn"
// 		},

// 		{
// 		'nombre': "Fulanita",
// 		'fecha':  "05-05",
// 		'imagen': "Harley Quinn"
// 		}
// ]


//muestra cumpleaños sacados del array cumples (localStorage)
function proximosCumples() {
	$.each(listaCumpleaneras, function(index, elemento) { //recorro el array de cumpleaños de localStorage
		let fecha = elemento.fecha.substring(5);
		let li = $(`<li><span>${fecha}</span> - <span>${elemento.nombre}</span></li>`);
		//armo un li para cada cumpleaños
		//"05/05 - Pepita"
		let deleteBtn = $(`<button class="borrarCumple" data-id="${index}">x</button>`);
		li.append(deleteBtn); //appendeo el botón al li
		$("#cumples").append(li); //appendeo el li a la ul

		deleteBtn.on("click", function(e) { //creo el listener para el botón que acabo de crear
			e.preventDefault();
			let indice = $(this).data("id");
			$(this).closest("li").remove(); //borra el item (li) de la lista (en la página)
			listaCumpleaneras.splice(indice, 1); //borra el item del array de cumpleaños y lo mete en el objeto json de local storage
			//ACTUALIZAR JSONCUMPLES.TOTAL
			listaLength = listaCumpleaneras.length; // WIP
			localStorage.setItem("jsonCumples", JSON.stringify(jsonCumples)); //stringifea el objeto json y lo manda a local storage
			console.log("Borraste un elemento y ahora los guardados son: "),
			listaCumpleaneras.forEach(function(e) {
				console.log(e.nombre);
			})
			console.log(jsonCumples.total);
		});
});

	//para evitar meter listeners todo el tiempo se puede meter todo en un document.ready
	//o ponerle un listener a todo el documento especificando elementos


}



// cumpleaños de hoy
function cumpleDelDia() {
	// let cumpleHoyImg = cumples[0].imagen; //prueba: sólo muestra el primer cumpleaños cargado
	// let cumpleHoyName = cumples[0].nombre;

	//PREGUNTAR PRIMERO SI HAY CUMPLEAÑOS GUARDADOS

	let indice = Math.floor(Math.random() * listaCumpleaneras.length); 
	// no es necesario el -1 porque random nunca toca el límite superior 

	//prueba 2: muestra un cumpleaños random
	//problema: si sale un indice == length, no va a haber tal elemento
	// while (indice == listaCumpleaneras.length && listaCumpleaneras.length > 0) { // arreglo: si pasa eso
	// 	indice = Math.floor(Math.random() * listaCumpleaneras.length); // calcula otro índice
	// } 
	// AL FINAL NO ES NECESARIO 

	let cumpleHoyImg = listaCumpleaneras[indice].imagen;
	let cumpleHoyName = listaCumpleaneras[indice].nombre;
	let h1 = `<h1>${cumpleHoyName}</h1>`;
	let img = `<img src='${rutaImg}Lego ${cumpleHoyImg}.png'>`;

	$("#cumpleDiaImg").append(h1);
	$("#cumpleDiaImg").append(img);

}

proximosCumples();
cumpleDelDia();
