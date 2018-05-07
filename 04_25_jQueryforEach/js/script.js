var flores = ["aleli", "jazmín", "magnolia", "peonía"];
var floresSelect = $("#floresSelect");
var btnSelect = $("#btnSelect");

flores.forEach(function(element) {
	var option = $("<option>");
	option.text(element);
	floresSelect.append(option);
})

btnSelect.on("click", function(e) {
	e.preventDefault;
	var current = $("#floresSelect.option:selected").text(); // no anda
	alert("Seleccionaste: " + current);
})