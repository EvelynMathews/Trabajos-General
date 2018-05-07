var persona1 = {
	nombre: "Pepa",
	nacionalidad: "irlandesa",
	helado: "kiwi"
};

var persona2 = {
	nombre: "Pepe",
	nacionalidad: "irlandesa",
	helado: "chocolate"
};

var personasJSON = {
	'persona1': persona1,
	'persona2': persona2
}

var lista = $("#personas");

$.each(personasJSON, function(index, element) {
	let li = $("<li></li>");
	li.text(element.nombre + ", " + element.helado);
	lista.append(li);
})

personasJSON.persona1.colores = ["verde", "celeste"];
personasJSON.persona2.colores = ["rojo", "amarillo", "azul"];

$.each(personasJSON, function(index, element) {
	console.log(element.helado, element.colores[0]);
})

