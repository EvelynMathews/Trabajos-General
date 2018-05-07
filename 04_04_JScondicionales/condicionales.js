// Dados tres números, x y z, si x es mayor que y calcular la resta entre x y z, y determinar
// si eso es mayor que y, de lo contrario sumar x y z (x+z) y multiplicarlo por y.

var x, y, z, resta;

if (x > y) {
	resta = x - z;

	if (resta > y) {
		console.log("la resta de x - z es mayor que y");
	}

	else {
		total = (x + z) * y;
	}
}