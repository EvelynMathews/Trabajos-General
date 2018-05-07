//TO DO: el carrito debería ser un objeto, no un array
//atributos:
//array de objetos item
//stock? // o puede ser dentro de cada item
//subtotal

//TO DO: AGREGAR STOCK
//BUG: cuando se cambia cantidad de item agregado en la sesión actual, no se actualiza el subtotal
//BUG: cuando se agrega un item nuevo y se cambia la cantidad, no sale el console.log "ya hay un item"

//TO DO: función para actualizar localStorage

//TO DO: VACIAR CARRITO (se puede hacer removeitem para todo el array)

// localStorage.clear(); //usar en caso de emergencia

//INICIALIZACIÓN DE CARRITO
//ON DOCUMENT READY?
var carrito = JSON.parse(localStorage.getItem("carrito"));

if (carrito == null || carrito == undefined || carrito.length == 0) { //si no hay nada en lS
	console.log("no hay items guardados en carrito");
	var carrito = []; //inicializo carrito vacío 
	// console.log(carrito); //verifico carrito vacío por consola
}

else {
	console.log("hay items guardados");
	carrito.forEach(function(elem) {
		// console.log(elem);
		displayItem(elem); // muestro los items de localStorage en el carrito
	})
}

//OBJETO ITEM
function Item(id, descripcion, precio, cantidad, imagen) {
		this.id = id;
		this.descripcion = descripcion;
		this.precio = precio;
		this.cantidad = cantidad;
		this.imagen = imagen;
}

//GENERADOR DE ITEMS
//acá iría chequearExistencia
function createItem(producto) {
	//FUNCIÓN SEPARADA
	let id = producto.data("id"); // busca id del producto
	//busca duplicados
	let existentId = carrito.find(function(elem) { // mira si ya hay uno igual en el carrito
		return elem.id == id;
	})
	
	if (existentId !== undefined) { // si lo hay,
		console.log("ya hay un item igual en el carrito");
		existentId.cantidad += 1; // le suma 1 a la cantidad (en el objeto)
		let existentItemQuantity = parseInt($("li[data-id='" +id+ "'] .cantidad").val()); // busca el nodo correspondiente al objeto y convierte el valor a número
		// console.log(existentItemQuantity);
		existentItemQuantity++; // le suma 1 al número
		$("li[data-id='" +id+ "'] .cantidad").val(existentItemQuantity); // actualiza el número en el html
		localStorage.setItem("carrito", JSON.stringify(carrito));
	}

	/* ALTERNATIVA
	function chequearExistencia(producto) {
		let id = producto.id;
		let encontrado = false;
		let i = 0;

		while (!encontrado && i < carrito.length) {
			if (carrito[i].producto.cod == cod) {
				return i; // devuelve el índice para usarlo después
			}

			i++;
		}

		return false;
	}
	*/

	else { // si no lo hay, creo un item nuevo
		//ESTO SE PUEDE SIMPLIFICAR
		//TRAIGO LA INFORMACIÓN DEL PRODUCTO desde los nodos hijos
		let descripcion = producto.children(".descripcion").text();
		let precio = parseInt(producto.children(".precio").text().slice(1)); // le saco el $ y convierto a numero
		let cantidad = producto.children(".cantidad").val();
		if (cantidad == "") { // si no se indicó cantidad 
			cantidad = 1; //defaulteo a 1
		}
		let imagen = producto.children("img").attr("src");
	
		let item = new Item(id, descripcion, precio, cantidad, imagen);	//creo el objeto item con esa información
		carrito.push(item); //mando el item al array
		localStorage.setItem("carrito", JSON.stringify(carrito)); //actualizo localStorage

		displayItem(item); // mando el objeto al creador de div
	}
}

function displayItem(item) { //muestra el objeto item en el carrito (modal)
	let li = $("<li>");
	li.attr("data-id", item.id);
	//SE PUEDE SIMPLIFICAR
	let thumbnail = $("<img>"); //foto
	thumbnail.attr("src", item.imagen);
	li.append(thumbnail);
	let description = $("<p>"); //descripción
	description.addClass("carritoDescripcion")
	description.text(item.descripcion);
	li.append(description);
	let id = $("<p>"); //código
	id.addClass("id")
	id.text(item.id);
	li.append(id);
	let price = $("<p>");//precio
	price.text(item.precio);
	li.append(price);
	let amount = $("<input>"); //cantidad
	amount.attr("type", "number");
	amount.attr("maxlength", "4")
	amount.val(item.cantidad);
	//ESTO CAMBIA LA CANTIDAD SÓLO EN EL DISPLAY, FALTA ACTUALIZARLA EN EL OBJETO
	amount.addClass("cantidad");
	li.append(amount);

	//BOTÓN ELIMINAR DEL CARRO
	let btnDelete = $("<button>");
	btnDelete.addClass("btnDelete");
	btnDelete.text("X");
	li.append(btnDelete);

	//muestro el li armado en la lista del carrito
	$("#items_lista").append(li);
}

function showSubtotal() {
	//NOTA: AL ACTUALIZAR EL CARRITO SE PUEDE HACER ESTO O HACER OTRA FUNCIÓN MÁS CHICA PARA ACTUALIZAR EL SUBTOTAL SIN RECORRER EL CARRITO (sólo en el item que se modifica)
	let subtotal = 0;
	//recorro todos los precios de los items en el carrito y sumo
	carrito.forEach(function(item) {
		let cantidad = parseInt(item.cantidad);
		subtotal += item.precio * cantidad;
	});
	$(".total").text(subtotal);
}

showSubtotal(); //lo llamo por defecto y cuando cambio la lista de items en el carrito
//LISTENERS

//BOTÓN AGREGAR AL CARRITO
$(".add").on("click", function() {
	let producto = $(this).parent(); //traigo nodo donde está el botón que clickeé
	createItem(producto);	//llamo a createItem con este producto
	showSubtotal();
})

//ABRIR MODAL CARRITO
$("#verCarrito").on("click", function(event) {
	event.preventDefault();
	$("#carrito").css("display", "block");
})

//CERRAR MODAL CARRITO
$("#ocultarCarrito").on("click", function(event) {
	event.preventDefault();
	$("#carrito").css("display", "none")
})

//BORRAR ITEM DEL CARRITO
$(document).on("click", ".btnDelete", function(event) {
	//HACER FUNCION APARTE
	let producto = $(this).parent();
	let id = $(this).siblings("p.id").text();
	var itemDelete = carrito.find(function (elem) {
		return elem.id == id;
	})
	carrito.splice(carrito.indexOf(itemDelete), 1);
	producto.remove();
	localStorage.setItem("carrito", JSON.stringify(carrito));
	showSubtotal();
})

//MODIFICAR CANTIDAD DE UN ITEM DEL CARRITO
$(".cantidad").on("input", function(cant) { //cuando hay cambios en el input cantidad
	//SE REPITE LO DE VERIFICAR EXISTENCIA EN EL CARRITO
	let id = $(this).parent().data("id"); // busca id del producto (en el nodo padre)
	let itemObj = carrito.find(function(elem) { // busca el objeto item con este id
		console.log(elem.cantidad);
		return elem.id == id;
	})
	let newAmount = $(this).val(); // traigo la cantidad nueva
	itemObj.cantidad = newAmount; // le suma 1 a la cantidad (en el objeto)
	localStorage.setItem("carrito", JSON.stringify(carrito)); // actualiza localstorage
	showSubtotal(); //actualizo subtotal
})


//TO DO: LLAMAR ESTO CUANDO SE ACTUALICE LA LISTA DE ITEMS EN EL CARRITO
if ($("#items_lista").is(":empty")) {
	$(".emptyCart").css("display", "block");
}

//proceso de compra (loop hasta que cierra la compra)
	//agregar producto
	//modificaciones opcionales
	//calcular total
	//cerrar compra --> DESTRUCCIÓN del carro

//carrito / ACCIONES
//agregar producto
	//producto: objeto
		
//modificar cantidad de producto
//vaciar carro
//calcular subtotal
//calcular total //dos separados o uno solo // función auxiliar
//efectuar compra
	//primero ver el contenido
	//luego confirmar

//producto / ACCIONES
//borrar producto

//validar stock: // función auxiliar
//al agregar producto al carro?
//al cerrar compra


	//CARRO: arreglo de items
		//item: (objeto)
			//cantidad en stock  // viene de base de datos // se iría restando cuando se hacen compras
			//objeto producto
				//código: int,
				//descripción: string,
				//precio: float,
				//cantidad: int, (cantidad que se está comprando)
				//imagen: string

// se pueden pasar todos los datos stringifieados por el botón agregar
// se puede usar data-id