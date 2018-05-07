// Ejercicios de lógica condicional – Parte 1

// 1- Dada una variable x, determinar si es par o impar.

var x;
if (x % 2 == 0) {
  console.log("es par");
}

else {
  console.log("es impar");
}


// 2- Dada una variable y que puede contener un número de 1 a 7, determinar a que día de la semana corresponde. Incluir la opción si la variable toma un valor no válido (por
// ejemplo 0 u 8).

var y;
switch (y) {
  case '1':
    console.log("domingo");
    break;
  case '2':
    console.log("lunes");
    break;
	case '3':
    console.log("martes");
    break;
  case '4':
    console.log("miércoles");
    break;
  case '5':
    console.log("jueves");
    break;
  case '6':
    console.log("viernes");
    break;
  case '7':
    console.log("sábado");
    break;

  default:
  	console.log("valor no válido");
    break;
  }

// 3- Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días
// correspondiente.

var mes;

switch(mes) {
  case "febrero":
    console.log("28 o 29 días");
    break;

  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    console.log("31 días");
    break;

  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    console.log("30 días");
    break;

  default:
    console.log("input inválido");
    break;
}

// 4- Dados tres números determinar si es positivo o negativo.
var nums = [5, 10, -4];

// más fácil
for (i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    console.log(nums[i] + " es positivo");
  }

  else {
    console.log(nums[i] + " es negativo");
  }
}

// 5- Dada una variable que puede ser una letra, determinar si es una vocal.

var letra;

switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("es una vocal");

  default:
    console.log("no es una vocal");
}

// 6- Dados tres números, x y z, si x es mayor que y calcular la resta entre x y z, y determinar
// si eso es mayor que y, de lo contrario sumar x y z (x+z) y multiplicarlo por y.

var x, y, z;

if (x > y) {
	resta = x - z;
	if (resta > y) {
		console.log("la resta es mayor que y")
	}

	else {
    console.log("la resta es menor que y")
		console.log((x + z) * y);
	}
}

// 7- Que calcule el sueldo que le corresponde al trabajador de una empresa que cobra
// 40.000 euros anuales, se deben realizar los cálculos en función de los siguientes
// criterios:
// a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
// b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
// c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
// d. Si lleva menos de 3 años se le aplica un aumento del 3%

var sueldoAnual = 40000;
var antiguedad;

if (antiguedad < 3) {
	console.log("El aumento es de " + (sueldoAnual / 3) * 100);
}

else if (antiguedad > 3 && antiguedad < 5) {
	console.log("El aumento es de " + (sueldoAnual / 5) * 100);
}

else if (antiguedad > 5 && antiguedad < 10) {
	console.log("El aumento es de " + (sueldoAnual / 7) * 100);
}

else if (antiguedad > 10) {
	console.log("El aumento es de " + (sueldoAnual / 10) * 100);
}