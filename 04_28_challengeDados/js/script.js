var totalWins = JSON.parse(localStorage.getItem("totalWins"));
if (totalWins == null) {
	totalWins = 0;
}

$(".wins").text("You've won " + totalWins + " times.");

function diceFace(img, value) {
	this.img = img;
	this.value = value;
}

var one = new diceFace("img/dado1.png", 1);
var two = new diceFace("img/dado2.jpg", 2);
var three = new diceFace("img/dado3.jpg", 3);
var four = new diceFace("img/dado4.png", 4);
var five = new diceFace("img/dado5.png", 5);
var six = new diceFace("img/dado6.png", 6);

var faces = [one, two, three, four, five, six];

$("button").on("click", function(e){
	e.preventDefault();
	$(".status").css("visibility", "visible");
	let dice1 = faces[Math.floor(Math.random() * faces.length)];
	let dice2 = faces[Math.floor(Math.random() * faces.length)];
	let total = dice1.value + dice2.value;

	let img1 = dice1.img;
	let img2 = dice2.img;
	$("#dice1").html("<img src='" +img1+ "'>");
	$("#dice2").html("<img src='" +img2+ "'>");

	if (total == 7) {
		$(".status").text("You win!");
		totalWins++;
		$(".wins").text("You've won " + totalWins + " times.");
		localStorage.setItem("totalWins", JSON.stringify(totalWins));
	}

	else {
		$(".status").text("You lose. You rolled a: " +total);
		$(".wins").text("You've won " + totalWins + " times.");
	}	
})