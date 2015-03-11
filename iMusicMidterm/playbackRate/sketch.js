function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(640, 480);
	instructions = '';
	instructions += "press up / down / left / right / space to trigger sounds\n";
	instructions += "press a to switch to the next preset\n";
	instructions += "or press keys 1-" + nf(presets.length + 1) + " for presets\n";
	instructions += "1: drums 2: space 3: guitar 4: soundtracks 5: babble\n";
	instructions += "press w to record a sample (replaces most recent key\'s sound)\n";
	instructions += "press s to toggle effects (presets 1, 2, 3 only)\n";
	text(instructions, 20, 20);

}

function draw() {
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255, 10);
  // }
  // ellipse(mouseX, mouseY, 18, 80);

//   fill(180, 200, 40);
//   strokeWeight(10);
//   stroke(18, 100, 240);
//   for (var i=0; i<width; i+=15) {
//     line(i, 0, i, height/3);
// }

}