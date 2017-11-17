var x = 10;
var y = 10;

window.onload = function() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	document.addEventListener("keydown", keydown);
	setInterval(main, 1/60 * 1000);
}

function main() {
	//render
	ctx.fillStyle = "#FFF";
	ctx.fillRect(0,0,100,100);
	ctx.fillStyle = "#000";
	ctx.fillRect(x, y, 20, 20);
}

function keydown(e) {
	switch(e.keyCode) {
		case 37:
			x -= 1;
			break;
		case 38:
			y -= 1;
			break;
		case 39:
			x += 1;
			break;
		case 40:
			y += 1;
			break;
	}
}