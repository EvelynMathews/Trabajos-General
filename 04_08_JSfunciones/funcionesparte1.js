// Ejercicio 1: Escribir una función que dado un número X (base) y un número N (potencia),
// devuelva el resultado de realizar X N

function potencia(x, n) {
	if (n == 1) {
		return x;
	}
		return x * potencia(x, n - 1); 
}



// Ejercicio 2: Escribir una función que, dado un número pasado como parámetro, determine si es
// primo.

// (ver 04_05_JSloops/primos.js)

// Ejercicio 3: Escribir una función que dada una palabra pasada por parámetro determine si es
// aguda, grave o esdrújula.

function acento(palabra) {
	for (i = 0; i < palabra.length; i++) {
		if (palabra[i] == "á" || palabra[i] == "é" || palabra[i] == "í" || palabra[i] == "ó" || palabra[i] == "ú") {
			console.log("la palabra tiene tilde en la " + i + "° letra");
		}
	}
}

// Ejercicio 4: Escribir una función que dado un arreglo con los siguientes datos:
// Corredor = { “Nombre”,”Apellido”,edad,”genero” } retorne la categoría a la cual estará anotado
// por ejemplo:
// F 18 – 25, M 18 – 25

corredor1 = ["Pepe", "Pérez", 28, "M"];

function categorizar(corredor) {
	var categoria;
	var genero = corredor[3];
	var edad = corredor[2];

	if (edad < 15) {
		categoria = "hasta 14 años";
	}

	else if (edad >= 15 && edad < 20) {
		categoria = "15 - 19";
	}

	else if (edad >= 20 && edad < 30) {
		categoria = "20 - 29";
	}

	else if (edad >= 30 && edad < 40) {
		categoria = "30 - 39";
	}

	else if (edad >= 40 && edad < 50) {
		categoria = "40 - 49";
	}

	else {
		categoria = "desde 50 años";
	}

	console.log(genero + " " + categoria);
}