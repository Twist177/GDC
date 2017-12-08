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
		var prevx = this.x;
		var prevy = this.y;
		
		if (this.left == true) {
			this.x -= 1;
		}
		if (this.right == true) {
			this.x += 1;
		}
		for (var i = 0; i < rectArray.length; i++) {
			if (rectArray[i] != this && checkCollision(this, rectArray[i])) {
				this.x = prevx;
			}
		}
		
		if (this.up == true) {
			this.y -= 1;
		}
		if (this.down == true) {
			this.y += 1;
		}
		for (var i = 0; i < rectArray.length; i++) {
			if (rectArray[i] != this && checkCollision(this, rectArray[i])) {
				this.y = prevy;
			}
		}
	}
	render() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

var player = new Rectangle(10, 10, 20, 20);
var rect1 = new Rectangle(40, 40, 20, 10);
var rectArray = [];
rectArray.push(player);
rectArray.push(rect1);
rectArray.push(new Rectangle(50,60,10,10));

window.onload = function() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	document.addEventListener("keydown", keydown);
	document.addEventListener("keyup", keyup);
	
	setInterval(main, 1/60 * 1000);
}

function main() {
	//clear screen
	ctx.fillStyle = "#FFF";
	ctx.fillRect(0,0,100,100);
	
	//update and render
	for (var i = 0; i < rectArray.length; i++) {
		rectArray[i].update();
		rectArray[i].render();
	}
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

function checkCollision(rect1, rect2) {
	return  (rect1.x < rect2.x + rect2.width &&
			rect1.x + rect1.width > rect2.x &&
			rect1.y < rect2.y + rect2.height &&
			rect1.height + rect1.y > rect2.y);
}