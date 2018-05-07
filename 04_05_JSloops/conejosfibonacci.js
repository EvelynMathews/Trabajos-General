// mostrar primeros 10 números de la secuencia fibonacci
var a = 0;
var b = 1;
var c = 0;

console.log(a, b);

for (i = 3; i <= 10; i++) {
	c = (a + b);
	console.log(c);
	a = b;
	b = c;
}

// versión zoe
var cont = 0;
var x = 1;
var y = 0;

for (var i = 0; i < 10; i++) {
	console.log(cont);
	y = cont;
	cont = cont + x;
	x = y;
}

// versión con while
var numero = 0;
var firstNum = -1;
var lastNum = 1;

while (numero < 11) {
	numero = firstNum + lastNum;
	firstNum = lastNum;
	lastNum = numero;
	console.log(numero);
}