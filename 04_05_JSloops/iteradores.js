// Cargar de forma automática incremental, un array de números a partir de un largo dado por el usuario.

var n = 10; //largo dado por el usuario
var numeros = [];

for (i = 0; i < n; i++) {
	numeros[i] = i;
	console.log(numeros[i]);
}

console.log(numeros);

// Repetir el ejercicio anterior, ubicando 0 (ceros), en las posiciones pares y un valor que coincida con el índice en las posiciones impares

var n = 10;
var numeros = [];

for (i = 0; i < n; i++) {
	if (i % 2 == 0) {
		numeros[i] = 0;
	}

	else {
		numeros[i] = i;
	}
}

console.log(numeros);

// Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], mostrar por pantalla el valor máximo.

x = [10,24,36,7,98,11,14,20];
var maximo = x[0];

for (i = 0; i < x.length; i++) {
	if (x[i] > maximo) {
		maximo = x[i];
	}
}

console.log(maximo);

// Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su posición.

x = [10,24,36,7,98,11,14,20];
var maximo = x[0];

for (i = 0; i < x.length; i++) {
	if (x[i] > maximo) {
		maximo = x[i];
	}
}

console.log(maximo, x.indexOf(maximo));

// Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10], mostrar por pantalla el valor máximo y la cantidad de veces que se repite.

x = [10,24,36,7,98,11,14,20,98,14,10];
var maximo = x[0];
var cantidad = 0;

for (i = 0; i < x.length; i++) {
	if (x[i] > maximo) {
		maximo = x[i];
	}
}

console.log(maximo);

for (i = 0; i < x.length; i++) {
	if (x[i] === maximo) {
		cantidad++;
	}
}

console.log(cantidad);

// versión más eficiente con contador
var contador = 0;

for (i = 0; i < x.length; i++) {
	if (x[i] > maximo) {
		maximo = x[i];
		contador = 1;

		if (x[i] == maximo) {
			contador++;
		}	
	}
}

console.log("máximo " + maximo + ", se repite " + contador + " veces");

/*Ejercicio 6 – Dados los siguientes arreglos:
X = [“a”,”l”,”f”,”a”];
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”]
Crear un bloque de código que permita determinar si:
•  Ambos arreglos son iguales
•  Cuál de los dos es más largo
•  Cuantas letras tienen en común*/

var x = ["a","l","f","a"];
var y = ["a","l","f","a","j","o","r"];
var masCorto;
var letrasEnComun = 0;

if (x.length !== y.length) {
	console.log("no son iguales");
}

if (x.length > y.length) {
	masCorto = y;
	console.log("x es más largo");
}

else {
	masCorto = y;
	console.log("y es más largo");
}

for (i = 0; i < masCorto.length; i++) {
	if (x[i] == y[i]) {
		letrasEnComun++;
	}
}

console.log("letras en común: " + letrasEnComun);

// versión clase (detecta letras repetidas)

var x = ["a","l","f","a"];
var y = ["e","l","f","a","j","o","l"];

function compararArrays(x,y){
	var i,letras;
	if(x.length == y.length){
		// Si son iguales
		for(i=0;x.length;i++){
			if(x[i] != y[i]){				
				letras = letrasEnComun(x,y);	
				return "No son iguales, tiene: "+letras+" en comun";
			}
		}

		return "Son iguales";

	}
	else{

		if(x.length > y.length){

			letras = letrasEnComun(x,y);
			return "X es mayor que Y, tiene: "+letras+" en comun";
		
		}else{
			letras = letrasEnComun(x,y);
			return "Y es mayor que X, tiene: "+letras+" en comun";
		}

	}

}

function letrasEnComun(x,y){
	var i,j;
	var k = 0;
	var boleano = false;
	var z = [];

	for(i=0;i<x.length;i++){
		for(j=0;j<y.length;j++){
			if(x[i] == y[j]){
				boleano = true;
			}
		}

		if(boleano){
			if(z.indexOf(x[i]) == -1){
				z[k] = x[i];
				k++;
			}	
			boleano = false;			
		}
	}

	return z.length;
}


console.log(compararArrays(x,y));


/* Ejercicio 7 – Dado el siguiente array datos1 = [“Fido”,”Gomez”,26,15000.78,true] y datos2 =
[“Gervasio”,”Fernandez”,32,28.550,false]
Determinar:
•  ¿Cuál de los dos personajes es más viejo?
•  ¿Cuál de los dos personajes está casado?
•  Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, cuanto será el
monto a cobrar? */

var datos1 = ["Fido","Gomez",26,15000.78,true];
var datos2 = ["Gervasio","Fernandez",32,28550,false];

if (datos1[2] > datos2[2]) {
	console.log(datos1[0] + " es más viejo");
}

else {
	console.log(datos2[0] + " es más viejo");
 }

if (datos1[4] == true) {
	console.log(datos1[0] + " está casado");
}

if (datos2[4] == true) {
	console.log(datos2[0] + " está casado");
}

var aumento = (12.5 / 100) * datos2[3];
var montoTotal = datos1[3] + aumento;

console.log("Fido cobrará " + montoTotal);
