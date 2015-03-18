//created a class called myChorus
//the class contains three instances of the sample
//each sample needs to be triggered 
//so user can turn it on or off

var myChorus = function(voice1, voice2, voice3){
	this.v1 = voice1;
	this.v2 = voice2;
	this.v3 = voice3;
	this.playSample = true;
};


//public method, start the sample
myChorus.prototype.start = function(){
	console.log(this.type + "start the sample");

	//if sample loads
	//if ()

	// this.v1 += this.playSample;
	// this.v2 += this.playSample;
	// this.v3 += this.playSample;
};

myChorus.prototype.stop = function(){
	console.log(this.type + "stop the sample");



	// this.v1 += this.playSample;
	// this.v2 += this.playSample;
	// this.v3 += this.playSample;
};


//write function to change interval ratio
//using -- intervalToFrequencyRatio(x)

//public method
// Ball.prototype.bounceTest = function(){
// 	if (this.x < 0){
// 		this.directionX = -this.directionX;
// 	}	else if (this.y < 0){
// 		this.directionY = -this.directionY;
// 	}
// }
