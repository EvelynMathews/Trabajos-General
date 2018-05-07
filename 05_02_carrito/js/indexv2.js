//todos los items en venta ya existen como objetos
// POR AHÍ PUEDEN IR EN LOCALSTORAGE TAMBIÉN
var stock = {
	//lista de objetos {item : {id, description, etc}, stock : 4 }
}

//CONSTRUCTOR DE ITEMS
function Item(id, description, price, image) {
	this.id = id;
	this.description = description;
	this.price = price;
	this.image = image;
}

//saca los datos de cada producto del html
function getItems(producto) {
	$(".product").each(function(index) {
		let id = $(this).data("id"); // busca id del producto
		let description = $(this).children(".descripcion").text();
		let price = $(this).children(".precio").text().slice(1); // le saco el $
		let image = $(this).children("img").attr("src");

		let item = new Item(id, description, price, image);	//creo el objeto item con esa información
		stock[id] = {'itemInfo': item, 'stock': Math.floor(Math.random() * 10)};// GENERA UN STOCK RANDOM CUANDO CREA EL ITEM (cambia cada vez que se carga la página)
	});

	// console.log(stock)
}
getItems();

var shoppingCart = {
	init: function() {
		//trae items de localStorage
		shoppingCart.items = JSON.parse(localStorage.getItem("items"));
		console.log(shoppingCart.items)
		shoppingCart.items.forEach(function(item) {
			shoppingCart.display(item);
		})
	},

  add: function(button) {
  	//agrega items al carrito
		let id = button.parent().data("id"); //busca el data-id del padre del botón clickeado
		let quantity = button.siblings(".cantidad").val(); // busca la cantidad del item en el input
		let itemStock = stock[id].stock; // revisa el stock (en el objeto del item correspondiente)
		
		if (itemStock > 0 ) {// si hay stock
			//CONSIDERAR SI YA HAY UN ITEM IGUAL EN EL CARRITO
			let existentId = shoppingCart.items.find(function(item) { // mira si ya hay uno igual en el carrito
				return item.id == id;
			})

			if (existentId !== undefined) { // si lo hay,
				console.log("ya hay un item igual en el carrito")
				//CORRER MODIFY QUANTITY
				// shoppingCart.modifyQuantity(existentId, )
			}

			else { //si no lo hay, lo creo
				let item = {'itemInfo': stock[id].itemInfo, 'quantity': quantity}; //crea un objeto item con las características del item y la cantidad a comprar
				shoppingCart.items.push(item); //manda el objeto al array del carrito
				shoppingCart.update(); //actualiza localStorage
				shoppingCart.display(item); // llama a display para mostrarlo
			}
		}

		else {
			alert("no hay stock");
		}
	},

	display: function(item) {
		//cuando se agrega un item al carrito, lo muestra en el modal
		let itemInfo = item.itemInfo;
		let li = $("<li>"); // creo un li
		li.attr("data-id", item.id); // y le asigno el data id del item 
		let thumbnail = $("<img>"); // agrego imagen
		thumbnail.attr("src", itemInfo.image);
		li.append(thumbnail);
		let description = $("<p>"); // agrego descripción
		description.addClass("carritoDescripcion");
		description.text(itemInfo.description);
		li.append(description);
		let id = $("<p>"); // agrego id
		id.addClass("id")
		id.text(itemInfo.id);
		// li.append(id);
		let price = $("<p>");// agrego precio
		price.text("$" + itemInfo.price);
		li.append(price);
		let quantity = $("<input>"); // agrego cantidad
		quantity.attr("type", "number");
		quantity.attr("maxlength", "4")
		quantity.val(item.quantity);
		quantity.addClass("cantidad");
		li.append(quantity);

		//BOTÓN ELIMINAR DEL CARRO
		let btnDelete = $("<button>");
		btnDelete.addClass("btnDelete");
		btnDelete.text("X");
		li.append(btnDelete);

		// //muestro el li armado en la lista del carrito
		$("#items_lista").append(li);
		shoppingCart.calcSubtotal();
	},

	remove: function(node, id) {
		let itemToRemove = shoppingCart.items.find(function(item) {  // busco el item con el id correspondiente
			return item.itemInfo.id == id;
		});
		shoppingCart.items.splice(shoppingCart.items.indexOf(itemToRemove) , 1); // saca el item del array del carrito
		node.remove(); // saca el item del modal
		shoppingCart.calcSubtotal();
		shoppingCart.update();
	},

	modifyQuantity: function(itemId, quantity) {
		let item = shoppingCart.items.find(function(item) {  // busco el item con el id correspondiente
			return item.itemInfo.id == itemId;
		});	
		item.quantity = quantity;// modifico la cantidad en el objeto
		console.log(item);
		shoppingCart.calcSubtotal();
		shoppingCart.update();
	},

	empty: function() {
		shoppingCart.items = [];
		$(".li").remove(); // NO ANDA
		shoppingCart.calcSubtotal();
		shoppingCart.update();
	},

	calcSubtotal: function() {
		//HACER QUE SUBTOTAL SEA UNA PROPIEDAD DEL OBJETO CARRITO
		let subtotal = 0;
		shoppingCart.items.forEach(function(element) { //recorro items del carrito
			subtotal += element.itemInfo.price * element.quantity; //sumo al subtotal el precio de cada item (considerando cantidad)
		})
		
		$(".subtotal").text(subtotal); //mostrar en .subtotal
	},

	update: function() {//actualiza localStorage
		localStorage.setItem("items", JSON.stringify(shoppingCart.items));
		console.log("localStorage actualizado");		
	},
}

shoppingCart.init();

//LISTENERS

//VER CARRITO
$("#verCarrito").on("click", function(event) {
	event.preventDefault();
	$("#carrito").toggle();
})

//AGREGAR AL CARRITO
$(".add").on("click", function(event) {
	shoppingCart.add($(this)); // agrega al carrito y muestra en el modal
})

//SACAR DEL CARRITO
$(document).on("click", ".btnDelete", function(event) {
	event.preventDefault();
	let id = $(this).siblings(".id").text();
	let node = $(this).parent();
	shoppingCart.remove(node, id); // lo saca del modal
})

//CAMBIAR CANTIDAD
$(document).on("input", ".cantidad", function(event) {
	event.preventDefault();
	let id = $(this).siblings(".id").text();
	let quantity = $(this).val();
	shoppingCart.modifyQuantity(id, quantity);
})

//VACIAR CARRITO
$(".emptyCart").on("click", function() {
	shoppingCart.empty();
});