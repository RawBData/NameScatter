
function Vehicle(x,y) {
	this.pos = createVector(random(width),random(height));
	this.vel = p5.Vector.random2D();//createVector();
	this.acc = createVector();
	this.target = createVector(x,y);
	this.size = 8;
	this.maxSpeed = 10;
	this.maxForce = 1;


	this.update = function() {
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.acc.mult(0);
	}

	this.behaviors = function(){
		//seek behavior
		// var seek = this.seek(this.target);
		// this.applyForce(seek);

		//arrive behavior
		var arrive = this.arrive(this.target);
		//creating a magnitude of 100%
		arrive.mult(2);
		this.applyForce(arrive);

		//flee behavior
		var mouse = createVector(mouseX, mouseY);
		var flee = this.flee(mouse);
		//creating a magnitude of 500%
		flee.mult(6);
		this.applyForce(flee);
	}

	this.applyForce = function(x){
		this.acc.add(x);
	}

	this.arrive = function(target){
		var direction = p5.Vector.sub(target, this.pos);
		var magnitude = direction.mag();
		var speed = this.maxSpeed;
		if (magnitude<100){
			speed = map(magnitude,0,100,0,this.maxSpeed);
		}
		direction.setMag(speed);
		var steer = p5.Vector.sub(direction, this.vel);
		steer.limit(this.maxForce);
		return steer;
	}

	this.seek = function(target){
		var direction = p5.Vector.sub(target, this.pos);
		direction.setMag(this.maxSpeed);
		var steer = p5.Vector.sub(direction, this.vel);
		steer.limit(this.maxForce);
		return steer;
	}

	this.flee = function(target){
		var direction = p5.Vector.sub(target, this.pos);
		var space = direction.mag();

		if (space < 50){
			direction.setMag(this.maxSpeed);
			var steer = p5.Vector.sub(direction, this.vel);
			steer.limit(this.maxForce);
			steer.mult(-1);
			return steer;
		}else{
			return createVector(0,0);
		}

		
	}

	this.show = function() {
		var distance = p5.Vector.sub(this.target,this.pos);
		magnitude = distance.mag();
		//console.log(distance);
		if (magnitude>100){
			stroke(round(random(0,255)), round(random(0,255)), round(random(0,255)));
			strokeWeight(6);
		}else{
			stroke(255, 212, 0);
			strokeWeight(6);
		}
		
		point(this.pos.x, this.pos.y)
	}


}













