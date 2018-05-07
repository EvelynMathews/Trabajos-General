
var comidas = [
	{ "nombre" : "Tarta de jamón y queso", "plato" : "principal" },
	{ "nombre" : "Ensalada caprese" , "plato" : "principal" },
	{ "nombre" : "Milanesa" , "plato" : "principal" },
	{ "nombre" : "1/4 de pollo", "plato" : "principal" },
	{ "nombre" : "Ensalada mixta", "plato" : "guarnición" },
	{ "nombre" : "Papas fritas", "plato" : "guarnición" },
	{ "nombre" : "Puré de zapallo", "plato" : "guarnición" },
	{ "nombre" : "Flan con crema", "plato" : "postre" },
	{ "nombre" : "Queso y dulce", "plato" : "postre" },
	{ "nombre" : "Mousse de chocolate", "plato" : "postre" },
];

var dropdownPrincipal = document.getElementById("ddown_principal");
var dropdownGuarnicion = document.getElementById("ddown_guarnicion");
var dropdownPostre = document.getElementById("ddown_postre");
var dropdowns = [dropdownPrincipal, dropdownGuarnicion, dropdownPostre];


function cargarComidas() {
	for (i = 0; i < comidas.length; i++) {
		var option = document.createElement("option");
		option.textContent = comidas[i].nombre;

		if (comidas[i].plato == "principal") {
			dropdownPrincipal.appendChild(option);
		}

		else if (comidas[i].plato == "guarnición") {
			dropdownGuarnicion.appendChild(option);
		}

		else if (comidas[i].plato == "postre") {
			dropdownPostre.appendChild(option);
		}
	}
}

function mostrarTicket() {
	var items = document.getElementById("items");//padre
	items.innerHTML = ""; // limpio el texto que pueda haber
	for (i = 0; i < dropdowns.length; i++) {
			var item = document.createElement("li");
			item.textContent = dropdowns[i].value;
			items.appendChild(item);
	}
}

cargarComidas();