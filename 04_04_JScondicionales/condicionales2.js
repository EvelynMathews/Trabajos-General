// Ejercicio 1 – Un sistema de fidelización de usuarios implementa la siguiente regla para la
// adquisición de productos del catálogo. Se pide determinar la lógica de canje.
// - El producto X que se desea canjear tiene un valor determinado en cantidad de puntos.
// - Si el cliente que lo quiere canjear tiene la cantidad de puntos requerida realiza
// directamente el canje.
// - Si el cliente tiene el 50% de los puntos requeridos, podrá completar el canje con dinero,
// en ese caso cada peso equivaldrá a 3 puntos.
// - Si el cliente tiene el 50% de los puntos requeridos, pero a su vez tiene categoría
// premium, la relación pesos puntos será 1 a 5.

var valorProducto, puntosDisponibles, montoEnPesos, clientePremium, resto;

if (puntosDisponibles >= valorProducto) {
	puntosDisponibles -= valorProducto;
	console.log("se realiza el canje con puntos");
}

elseif (puntosDisponibles >= valorProducto / 2) {
	if (clientePremium) {
		resto = valorProducto - puntosDisponibles;// calcula cuánto hay que pagar con dinero
		montoEnPesos = resto / 5;// paga la otra parte con dinero (1 a 5)
		console.log("se realiza el canje con puntos y dinero (cliente premium)");
	}

	else {
		resto = valorProducto - puntosDisponibles;// calcula cuánto hay que pagar con dinero
		montoEnPesos = resto / 3;// paga la otra parte con dinero (1 a 3)
		console.log("se realiza el canje con puntos y dinero (cliente no premium)");
	}	
}

else {
	console.log("no se puede realizar el canje");
}