var nombres = ["Pepe", "Pirulo", "Lalo", "Euclides"];
var x = "Lalo";

// con for loop

for (var i = 0; i < nombres.length; i++) {
	if (nombres[i] == x) {
		console.log(x + " está");
	}
}

console.log(x + "no está"); // sale siempre, necesita una bandera para aparecer sólo cuando lalo no está


// con while loop
// es más eficiente porque deja de recorrer el array cuando encuentra x

var esta = false;
var i = 0;

while (esta == false && i < nombres.length) {
	if (nombres[i] == x) {
		esta = true;
	}

	i++;
}

if (esta) {
	console.log(x + " está");
}

else {
	console.log(x + " no está");
}


// con indexOf

var esta = nombres.indexOf(x);
if (esta !== -1) {
	console.log("está!");
}

else {
	console.log("no está");
}