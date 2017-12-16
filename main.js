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
		
		for (var i = 0; i < coinArray.length; i++) {
			if (coinArray[i] != this && checkCollision(this, coinArray[i])) {
				coinArray.splice(i, 1);
			}
		}
	}
	render() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

var coinImage = new Image();
coinImage.src = "coin.png";

class Coin extends Rectangle {
	constructor(x, y, w, h) {
		super(x, y, w, h);
		this.image = coinImage;
	}
	render() {
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
}

//adding things
var player = new Rectangle(10, 10, 20, 20);
var rect1 = new Rectangle(40, 40, 20, 10);
var rectArray = [];
var coinArray = [];
rectArray.push(player);
rectArray.push(rect1);
coinArray.push(new Coin(50,60,100,100));

window.onload = function() {
	canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	
	document.addEventListener("keydown", keydown);
	document.addEventListener("keyup", keyup);
	
	setInterval(main, 1/60 * 1000);
}

function main() {
	//clear screen
	ctx.fillStyle = "#FFF";
	ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
	
	//update and render
	for (var i = 0; i < rectArray.length; i++) {
		rectArray[i].update();
		rectArray[i].render();
	}
	for (var i = 0; i < coinArray.length; i++) {
		coinArray[i].update();
		coinArray[i].render();
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













