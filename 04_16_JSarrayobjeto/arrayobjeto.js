var aromatica = {"nombre": "menta", "variedades": ["hierbabuena", "poleo", "piperita"] }
var plantas = ["albahaca", "romero", aromatica, "tomillo"];

plantas.forEach(function(e) {
	if (typeof(e) == "object") {
		console.log(e.nombre);
		console.log(e.variedades[2]);
	}

	else {
		console.log(e);
	}
})