	
var vehicles = [];
var font;
var textfield;
var theText;
var fontsize = 200;

function preload(){
	font = loadFont('AvenirNextLTPro-Regular.otf');
}

function windowResized(){
	//console.log("resized")
	resizeCanvas(
		window.innerWidth,
		window.innerHeight	
	);
}

function setup(){
	createCanvas(
		window.innerWidth,
		window.innerHeight	
	);

	theText = "Name?"
	//setting up text input
	textfield = createInput('Type Something');
  	textfield.position(10, 20);
	textfield.changed(newText);

  	button = createButton('Change');
  	button.position(textfield.x + textfield.width, 20);
  	button.mousePressed(newText);

	background(51);
	setTextPoints();

}

function setTextPoints(){
		var textPoints = font.textToPoints(theText, width/19, height/3+fontsize*.5, fontsize);

		for (var i = textPoints.length - 1; i >= 0; i--) {
		thisPoint = textPoints[i];
		var vehicle = new Vehicle(thisPoint.x,thisPoint.y);
		vehicles.push(vehicle);
	}
	console.log(vehicles);
}

function draw(){
	background(51);
	for (var i = vehicles.length - 1; i >= 0; i--) {
		var thisVehicle = vehicles[i];

		thisVehicle.show();
		thisVehicle.update();
		thisVehicle.behaviors();		
	}
}

function newText(){
	vehicles = [];
	theText = textfield.value();
	setTextPoints();
}

function newTyping(){

}

// function setSliders(){
// 	var x = 0;
// 	var newColor;
// 	for (var i = 0; i < (width/sliderWidth); i++) {
// 		newColor = color(round(random(0,255)),round(random(0,255)),round(random(0,255)));
// 		var slider = new Slider(x,speed,newColor);
// 		sliders.push(slider);
// 		x += sliderWidth;
// 	}
// 	console.log(sliders);
// }

// function Slider(x,speeed,newColor){
// 	this.speed = speeed;
// 	this.color = newColor;
// 	this.shouldShow = false;
// 	this.finishedDrawing = false;
// 	this.x = x;
// 	this.y = 0;
// 	this.w = sliderWidth;
// 	this.h = height;
// 	this.animate_w = 0;

// 	this.animate = function(){
// 		if (this.animate_w <= this.w){
// 			this.animate_w += this.speed;
// 		}else{
// 			this.finishedDrawing = true;
// 			// this.y += round(random(-1,1));
// 			// this.x += round(random(-2,2));
// 			// this.h += round(random(-1,1));
// 		}
// 	}

// 	this.show = function(){
// 		if (this.shouldShow == true){
// 			fill(this.color);
// 			rect(this.x, this.y, this.animate_w, this.h);
// 			this.animate();
// 		}		
// 	}
// }





