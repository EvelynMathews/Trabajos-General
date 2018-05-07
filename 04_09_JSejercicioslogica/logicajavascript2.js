// Ejercicios de lógica parte 2

// Ejercicio 1 – Un sistema de fidelización de usuarios implementa la siguiente regla para la
// adquisición de productos del catálogo. Se pide determinar la lógica de canje.
// -  El producto X que se desea canjear tiene un valor determinado en cantidad de puntos.
// -  Si el cliente que lo quiere canjear tiene la cantidad de puntos requerida realiza
// directamente el canje.
// -  Si el cliente tiene el 50% de los puntos requeridos, podrá completar el canje con dinero,
// en ese caso cada peso equivaldrá a 3 puntos.
// -  Si el cliente tiene el 50% de los puntos requeridos, pero a su vez tiene categoría
// premium, la relación pesos puntos será 1 a 5.


var valorProducto;
var puntosDisponibles;
var dineroDisponible;
var categoriaCliente;

if (puntosDisponibles >= valorProducto) {
	puntosDisponibles -= valorProducto;
	console.log("Se realiza el canje por " + valorProducto + " puntos");
}

elseif (puntosDisponibles == valorProducto / 2) {
	puntosDisponibles -= valorProducto;

	if (categoriaCliente !== "premium") {
		dineroDisponible -= valorProducto / 3;
	}

	else {
		dineroDisponible -= valorProducto / 5;
	}
}


// Ejercicio 2 - Ana desea inscribir a su hijo Tomás a la colonia de vacaciones, para tomar la
// decisión tiene en cuenta distintas variables.
// A) Si la colonia queda a más de 10 km, tendrá que contratar un transporte, por lo que para
// elegir esta opción el costo mensual deberá ser menor a $1500.
// B) Si la colonia queda a menos de 10 km, su presupuesto total se incrementa en un 20%,
// con lo cual evaluará incluir almuerzo en la colonia si este no excede el 15% del valor de
// la cuota.
// C) Finalmente, si la colonia está más lejos de 10km, y su costo es mayor a $1500, pero es
// doble turno y le brinda almuerzo, está dispuesta a pagar hasta $2800.

var presupuestoTotal;
var costoColonia;
var distanciaColoniaEnKm;
var costoAlmuerzo;
var dobleTurno;

if (distanciaColoniaEnKm > 10) {
	if (costoColonia < 1500) {
		console.log("sí")
	}

	else {
		if (costoColonia <= 2800 && dobleturno && costoAlmuerzo == 0) {
			console.log("sí");
		}
		else {
			console.log("no");
		}
	}
}

elseif (distanciaColoniaEnKm < 10) {
	presupuestoTotal += (presupuestoTotal / 5);
	if (costoAlmuerzo <= (costoColonia / 100) * 15) {
		console.log("sí");
	}

	else {
		console.log("sí pero sin almuerzo");
	}
}


// Ejercicio 3 – Dados distintas tarjetas de crédito, mostrar por consola la cantidad de cuotas sin
// interés según el siguiente criterio.
// -  Mastercard – hasta 6 cuotas s/interés
// -  Visa – hasta 9 cuotas s/interés
// -  Amex – hasta 3 cuotas sin interés
// -  Todas las demás - 1 cuota sin interés

var tarjeta;

switch(tarjeta) {
	case "Mastercard":
		console.log("Mastercard - hasta 6 cuotas s/interés");
		break;

	case "Visa":
		console.log("Visa - hasta 9 cuotas s/interés");
		break;

	case "Amex":
		console.log("Amex - hasta 3 cuotas s/interés");
		break;

	default:
		console.log("1 cuota sin interés");
		break;
}