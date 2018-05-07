//INICIALIZACIÓN DE COSAS
var input = $("#input"); // traigo el input
var btnSubmit = $("#btnSubmit"); // traigo el botón enviar
var list = $("#list"); // traigo el ul


//INICIALIZA TAREAS (trayéndolas de localStorage o armando un array vacío)
function initTasks() {
	window.tasks = JSON.parse(localStorage.getItem("tasks")); // traigo de localStorage
	if (tasks.length == 0) { // si no había nada en localStorage
		console.log("no hay tareas guardadas");
		tasks = []; // armo el array de tareas (window para que sea global - accesible desde otras funciones)
	}

	else { // si hay algo en localStorage
		console.log("hay datos guardados");
		console.log(tasks);
		tasks.forEach(createTask) // mandar a createTask
	}
}

initTasks();

//ARMA UN LI PARA CADA TAREA
function createTask(task) {
	if (task.length > 0) {// me aseguro de que la tarea no sea un string vacío
		let id = tasks.indexOf(task);
		// TEXTO Y CONTENEDOR (sólo del texto)
		let taskText = $("<span>"); // creo el elemento donde va la tarea (span)
		taskText.attr("class", "textContainer"); // le pongo una clase
		taskText.text(task); // le pongo el texto de la tarea
		taskText.attr("id", id); // le asigno el id
		//BOTONES Y CONTENEDOR
		let btnContainer = $("<div>"); //creo contenedor para botones
		btnContainer.attr("class", "btn-container"); //le asigno clase para css
		//BOTÓN EDITAR
		let btnEdit = $("<i>"); //creo el elemento i
		btnEdit.addClass("fas fa-pencil-alt"); //le pongo la clase de font awesome
		btnEdit.data("action", "edit"); //le asocio una acción
		btnEdit.data("id", id); //le asigno el mismo data-id que a la tarea
		//BOTÓN ELIMINAR // ídem anterior
		let btnDelete = $("<i>");
		btnDelete.addClass("fas fa-trash");
	  btnDelete.data("action", "delete");
		//meto los botones en el contenedor
		btnContainer.append(btnEdit);
		btnContainer.append(btnDelete);
	  // LI (texto + botones)
	  let li = $("<li>"); 
		li.data("id", id); //le asigno el mismo data id
		li.append(taskText); // appendeo las partes al li
		li.append(btnContainer); 
		list.append(li); // appendeo el li al ul
		
		input.val(""); //limpio input
	}
}

//PERMITE EDITAR TAREAS
function editTask(id) {
	let taskTextContainer = $("#" + id); // trae el contenedor de texto de la tarea (que encuentra por id)

	//INPUT
	let editInput = $("<input>"); // crea elemento input
	editInput.attr("class", "editInput"); // le asigna clase para css
	editInput.attr("value", taskTextContainer.text()); // mantiene el texto de la tarea
	taskTextContainer.html(editInput); // cambia el contenedor de texto por el input
	editInput.focus();
	
	//BOTÓN APPLY
	let btnApplyEdit = $("<i>");
	btnApplyEdit.data("action", "applyEdit");
	btnApplyEdit.data("id", id);
	btnApplyEdit.addClass("fas fa-check");
	//LISTENER
	btnApplyEdit.on("click", function() {
	//APLICA CAMBIOS A LA TAREA
		var newTask = $(".editInput").val(); // trae el valor del input
		taskTextContainer.text(newTask); // aplica el texto nuevo
		//POR AHÍ ESTO PUEDE IR EN OTRO LADO MÁS GENERAL
		tasks[id] = newTask; // actualiza el array
		localStorage.setItem("tasks", JSON.stringify(tasks));// actualizo localStorage
	})

	//LISTENER para submittear con enter
	editInput.on("keypress", function(e) {
		if (e.keyCode == 13) {
			var newTask = $(".editInput").val();
			taskTextContainer.html(newTask);
		}
	});

	taskTextContainer.append(btnApplyEdit); // appendea el botón de enviar edit
}

//LISTENERS PARA CREAR TAREA NUEVA
btnSubmit.on("click", function(event){
	event.preventDefault()
	let task = input.val(); // traigo el texto de la tarea del input
	tasks.push(task); // mando la tarea al array de tareas
	localStorage.setItem("tasks", JSON.stringify(tasks));// actualizo localStorage
	createTask(task);
});

//permite enviar el input apretando enter
$("#input").on("keypress", function(e) {
	if (e.keyCode == 13) {
		let task = $("#input").val(); // traigo el texto de la tarea del input
		tasks.push(task); // mando la tarea al array de tareas
		localStorage.setItem("tasks", JSON.stringify(tasks));// actualizo localStorage
		createTask(task);
	}
});

//LISTENER PARA CLEAR ALL
$("#btnClear").on("click", clearTasks);

function getTaskFromInput() {
 //UNIFICAR LOS LISTENERS ANTERIORES ACÁ
}

function clearTasks() {
	$("li").remove();
	tasks = [];//vacío el array 
	localStorage.setItem("tasks", JSON.stringify(tasks));	//actualizo localStorage
}

//REDO PLZ
 //listener para botones dentro de la lista
$(document).on("click", "ul i", function(e) {
//permite escuchar elementos creados dinámicamente sin meter el listener en la función creadora del elemento
//el segundo parámetro especifica el rango del selector sin usar clases
	let action = $(this).data("action"); // trae la data-action del botón clickeado
	let btnId = $(this).data("id"); // trae el data-id del botón (para poder asociarlo a la tarea)

	if (action == "delete") {
		$(this).parent().parent().remove();
		tasks.splice(btnId, 1); // saco la tarea del array (el índice es el id)
		localStorage.setItem("tasks", JSON.stringify(tasks));// actualizo localStorage
		//PENDIENTE: sacar la tarea del array
	}

	if (action == "edit") {
		editTask(btnId);	
	}
});

input.focus();

