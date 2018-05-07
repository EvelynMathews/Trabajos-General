var users = ["John", "Paul", "George", "Ringo"];
var pwords = [1234, 4321, 1324, 4231];

function validar(usuario, password) {
	if (users.indexOf(usuario) == pwords.indexOf(password)) {
		return true;
	}

	else {
		return false;
	}
}

function loguear(usuario, password) {
	var cantidad = 0; // logins fallidos
	var valido = validar(usuario, password); // chequea con función de acá arriba

	// input válido, entra
	if (valido) {
		console.log("Bienvenido");
	}

	// input inválido, vuelve a llamar siempre que sean menos de 3 logins fallidos
	if (!valido && cantidad < 3) { // while?
		cantidad++; // suma un login fallido
		console.log("Usuario inválido");
		valido = validar(usuario, password); // vuelve a pedir input
	}

	// input inválido, bloquea el acceso
	if (cantidad == 3 && !valido) {
		console.log("Usuario bloqueado");
	}	
}

loguear("John", 1234);
loguear("Paul", 1234);
loguear("Yoko", 1234);