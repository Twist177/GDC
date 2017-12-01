class Rectangle {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.color = "#000";
		
		this.left = false;
		this.right = false;
		this.up = false;
		this.down = false;
	}
	update() {
		if (this.left == true) {
			this.x -= 1;
		}
		if (this.right == true) {
			this.x += 1;
		}
		if (this.up == true) {
			this.y -= 1;
		}
		if (this.down == true) {
			this.y += 1;
		}
	}
	render() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

var player = new Rectangle(10, 10, 20, 20);

window.onload = function() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	document.addEventListener("keydown", keydown);
	document.addEventListener("keyup", keyup);
	
	setInterval(main, 1/60 * 1000);
}

function main() {
	//update
	player.update();
	
	//clear screen
	ctx.fillStyle = "#FFF";
	ctx.fillRect(0,0,100,100);
	//render
	player.render();
}

function keydown(e) {
	switch(e.keyCode) {
		case 37:
			player.left = true;
			break;
		case 38:
			player.up = true;
			break;
		case 39:
			player.right = true;
			break;
		case 40:
			player.down = true;
			break;
	}
}

function keyup(e) {
	switch(e.keyCode) {
		case 37:
			player.left = false;
			break;
		case 38:
			player.up = false;
			break;
		case 39:
			player.right = false;
			break;
		case 40:
			player.down = false;
			break;
	}
}