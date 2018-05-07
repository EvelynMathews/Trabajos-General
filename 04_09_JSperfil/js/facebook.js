// PERFIL / DESCRIPCIÓN
// variable para identificar div
var perfil_div = document.getElementById("profile");
// datos
var datos_array = ["Diana Prince", "Themyscira", "Wonder Woman", "diana.jpg"];

// carga datos en el perfil
function cargarDatosPersonales(datos) {
	var foto = document.createElement("img");
	foto.src = "img/" + datos_array[3];
	foto.style.width = "250px";
	var nombre = document.createElement("h1");
	nombre.textContent = datos_array[0];

	var nacionalidad = document.createElement("h2");
	nacionalidad.textContent = datos_array[1];

	var resumen = document.createElement("p");
	resumen.textContent = datos_array[2];

	perfil_div.appendChild(foto);
	perfil_div.appendChild(nombre);
	perfil_div.appendChild(nacionalidad);
	perfil_div.appendChild(resumen);
}

// AMIGOS
// variable para identificar div
var amigos_div = document.getElementById("amigos");
// datos
var amigo_1 = ["Batman", "bruce.jpg"];
var amigo_2 = ["Flash", "barry.png"];
var amigos = [amigo_1, amigo_2];

//carga imágenes de amigos en el grid
function cargarListaImagenes(lista, padre) {
	//recorre array de amigos
	for (var i = 0; i < lista.length; i++) {
		//crea un <img> para cada uno
		var img = document.createElement("img");
		//arma la url de la imagen con datos del array
		img.src = "img/" + lista[i][1];
		//estilos de la imagen
		img.style.width = "80px";
		img.style.height = "80px";//también se resuelve agregando clase "thumb" abajo
		//agrega todos los imgs al div contenedor (amigos_div == #amigos)
		padre.appendChild(img);
	}

}

//MURO
//variable para identificar div
var muro = document.getElementById("feed");

function cargarMuro(padre) {
	//crea lista
	var ul = document.createElement("ul");
	for (var i = 0; i < 3; i++) {//crea tres posts:
		var li = document.createElement("li");//cada post es un <li>
		var img = document.createElement("img");//con una imagen adentro
		img.src = "img/barry.png";
		img.classList.add("thumb");//(agrega una clase)
		li.appendChild(img);//(agrega la imagen al li)
		var texto = document.createElement("p");//y un texto
		texto.textContent = "Estoy feliz de vacaciones";
		li.appendChild(texto);//(agrega el texto al li)
		ul.appendChild(li);//agrega post al feed
	}

	muro.appendChild(ul);//agrega todo el feed al muro
}

cargarDatosPersonales(datos_array);
cargarListaImagenes(amigos,amigos_div);
cargarMuro(muro);