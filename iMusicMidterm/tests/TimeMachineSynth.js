var TimeMachineSynth = function (pitch, speed, instrument){

	this.pitch = pitch;
	this.speed = speed;
	this.instrument = instrument;

	//this.currentOunces = size || 0;

}

/*
these are our methods
*/

TimeMachineSynth.prototype.start = function() {
	console.log(this.type + "start the sound");
}

TimeMachineSynth.prototype.stop = function(){
	console.log(this.type + "stop the sound");

}

TimeMachineSynth.prototype.rampUp = function(){
	console.log(this.type + "increase the number of times it is triggered");

}

TimeMachineSynth.prototype.rampDown = function(){
	console.log(this.type + "decrease the number of times it is triggered");

}
