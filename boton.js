function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255);
	fill(0, 255, 0);
	rect(100, 100, 200, 200);
	if (mouseIsPressed == true) {
		if (mouseX > 100 && mouseY > 100 && mouseX < 300 && mouseY < 300) {
			background(0);
			rect(100, 100, 200, 200);
		} else {
			background(255);
			fill(0, 255, 0);
			rect(100, 100, 200, 200);
		}
	}
}
