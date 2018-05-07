// Ejercicios de aplicación de lógica.
// Ejercicio 1: Modelar con pseudocódigo o js, la lógica de un sistema de semáforos en una esquina
// que consta de 2 semáforos para vehículos y dos semáforos peatonales.

// EN PROGRESO 
var semaforo1 = "verde";
var semaforo2 = "rojo";

function cambiarColor(sem) {
	if sem = "verde" {
		sem = "rojo";
		console.log(sem);
	}

	else {
		sem = "verde";
		console.log(sem);
	}
}

// Ejercicio 2: Incorporar al ejercicio anterior un semáforo para ciegos, esto implica la posibilidad
// de tener modificar el estado de los semáforos en un momento dado.

// EN PROGRESO

// Ejercicio 3: Modelar con lógica y estructuras conocidas un juego de preguntas y respuestas, que
// conste de:
// -  3 rondas de 5 preguntas cada una.
// -  Para pasar de ronda deben responderse correctamente 3 preguntas por ronda

var preguntas = ["¿cuál es la capital de Suecia?", "¿cuál es la capital de Colombia?", "¿cuál es la capital de Australia?", "¿cuál es la capital de Chile?", "¿cuál es la capital de Egipto?"];
var respuestas = ["Estocolmo", "Bogotá", "Canberra", "Santiago", "El Cairo"];
var respuestaJugador;
var rondaActual = 1;
var proximaRonda = true;

while (proximaRonda == true && rondaActual <= 3) {
	var correctas = 0;
	for (i = 0; i < preguntas.length; i++) {
		if (respuestaJugador == respuestas[i]) {
			correctas++;
		}
	}

	if (correctas < 3) {
		proximaRonda == false;
		console.log("Game Over");
	}

	else {
		rondaActual++;
	}

	if (rondaActual > 3) {
		console.log("Ganaste el juego!");
	}
}


// Ejercicio 4: A partir del ejercicio anterior, incorporar las siguientes condiciones:
// -  El valor de las respuestas correctas en la primera ronda será de 5 puntos, en la
// segunda 10 y en la tercera 15.
// -  Al finalizar el juego se mostrará un cartel al jugador de excelente si consiguió entre
// 125 y 150 puntos, muy bien entre 100 y 124 puntos y bien para menos de 124
// puntos.

var preguntas = ["¿cuál es la capital de Suecia?", "¿cuál es la capital de Colombia?", "¿cuál es la capital de Australia?", "¿cuál es la capital de Chile?", "¿cuál es la capital de Egipto?"];
var respuestas = ["Estocolmo", "Bogotá", "Canberra", "Santiago", "El Cairo"];
var respuestaJugador;
var rondaActual = 1;
var proximaRonda = true;
var puntos = 0;

while (proximaRonda == true && rondaActual <= 3) {
	var correctas = 0;
	for (i = 0; i < preguntas.length; i++) {
		if (respuestaJugador == respuestas[i]) {
			correctas++;

			switch (rondaActual) {
				case 1 {
					puntos += 5;
				}

				case 2 {
					puntos += 10;
				}

				case 3 {
					puntos += 15;
				}
			}

		}
	}

	if (correctas < 3) {
		proximaRonda == false;
		console.log("Game Over. Puntos: " + puntos);
	}

	else {
		rondaActual++;
	}

	if (rondaActual > 3) {
		console.log("Ganaste el juego! Puntos totales: " + puntos);
		if (puntos <= 100) {
			console.log("Bien!");
		}

		else if (puntos > 100 && puntos <= 125) {
			console.log("Muy bien!");
		}

		else if (puntos > 125 && puntos <= 150) {
			console.log("Excelente!");
		}
	}
}