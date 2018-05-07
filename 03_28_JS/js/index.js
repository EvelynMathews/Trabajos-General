/* tomar dos variables, si ambas son mayores de 10, entonces las sumo, si no, las multiplico */

x = 11;
y = 10;
z = 0;

if (x >= 10 && y >= 10) {
	z = x + y;
	/* ejecuto la suma sólo si ambas variables se cumplen */	
}

else {
	z = x*y;
	/* ejecuto la multiplicación siempre que al menos una es menor que 10 */
}

console.log("el resultado es: " + z); /* concatena el string con el valor de z */


/* sumar dos variables si al menos una de ellas es mayor que 10, de lo contrario multiplicarlos */

if (x > 10 || y > 10) {
	z = x + y;
}

else {
	z = x * y;
}

console.log("resultado: " + z);

/* Mostrar mensaje de bienvenida incluyendo nombre y apellido sólo si coinciden con los valores "Belen" y "Alegre" */

nombre = "Belen";
apellido = "Alegre";

if (nombre == "Belen" && apellido == "Alegre") {
	bienvenida = 'Bienvenida ' + nombre + " " + apellido;
	console.log(bienvenida);
}

