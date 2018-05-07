// sistema de login (notas 4/4)

// devuelve true en caso de login exitoso y false en caso contrario

function validar(usuario, password) {
	if (usuario == "pepe" && password == "1234") {
		return true;
	}

	else {
		return false;
	}
}

function login(usuario, password) {
	var cantidad = 0; // logins fallidos
	var valido = validar(usuario, password);

	// input inválido, vuelve a llamar siempre que sean menos de 3 logins fallidos
	while (valido == false && cantidad < 3) {
		cantidad++; // suma un login fallido
		console.log("Usuario inválido");
		valido = validar(usuario, password); // vuelve a pedir input
	}

	// input inválido, bloquea el acceso
	if (cantidad == 3 && !valido) {
		console.log("Usuario bloqueado");
	}

	// input válido, entra
	if (valido) {
		console.log("Bienvenido");
	}
}

login("pepa", 4321);




