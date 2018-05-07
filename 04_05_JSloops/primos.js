// Determinar si un número es primo

var num = 23;
var contador = 2;
var resto;
var esPrimo = true;

while ((contador > 1 && contador < num) && esPrimo == true) {
	resto = num % contador;
	if (resto == 0) {
		esPrimo == false;
	}

	contador++;
}

if (esPrimo == false) {
	console.log("no es primo")
}

else {
	console.log("es primo")
}