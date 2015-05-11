/**
 * @author mrdoob / http://mrdoob.com
 * @modified by obviousjim / http://specular.cc
 */


// document.addEventListener('load', audioVisualsLoaded, false);
// function audioVisualsLoaded() {
// 	console.log('shit is working');

var camera, cameraTarget, cameraDummy;
var scene, scene2;
var renderer;


var rotation = 0, rotationTarget = 0;

var ray, projector, mouse;
var videos, objects;

var MOUSEOVERED = null, CLICKED = null;

var init = function () {

	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );

	cameraTarget = new THREE.Vector3( 0, 0, - 1500 );

	cameraDummy = new THREE.Object3D();
	cameraDummy.add( camera );

	scene = new THREE.Scene();
	scene.add( cameraDummy );

	ray = new THREE.Ray();
	projector = new THREE.Projector();
	mouse = new THREE.Vector2();

	scene2 = new THREE.Scene();

	angle = ( Math.PI * 2 ) / VideoFiles.length;
	videos = [];
	objects = [];

	var geometry = new THREE.IcosahedronGeometry( 400, 0 );

	for ( var i = 0; i < VideoFiles.length; i++ ) {

		var video = new RGBDVideo( VideoFiles[i] );

		// can customise carousel effect in code below

		video.position.x = Math.sin( i * angle ) * 800;
		video.position.z = Math.cos( i * angle ) * 800;
		video.rotation.y = i * angle;

		scene.add( video );
		videos.push( video );

		var sphere = new THREE.Mesh( geometry );
		sphere.position.x = Math.sin( i * angle ) * 500;
		sphere.position.y = - 100;
		sphere.position.z = Math.cos( i * angle ) * 500;
		sphere.updateMatrix();
		sphere.updateMatrixWorld();

		objects.push( sphere );

		sphere.material.opacity = 0.5;

	}

	var ratio = window.devicePixelRatio || 1;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth * ratio, window.innerHeight * ratio );
	renderer.domElement.style.width = window.innerWidth + 'px';
	renderer.domElement.style.height = window.innerHeight + 'px';
	document.body.appendChild( renderer.domElement );

	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = 0;

	//event where we could trigger sound by attaching player.start ??
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'click', onDocumentClick, false );

	cameraDummy.position.set( Math.sin( 0 ) * 1500, 2000, 0 );

	new TWEEN.Tween( cameraDummy.position )
		.to( { z: Math.cos( 0 ) * 1500 }, 3000 )
		.easing( TWEEN.Easing.Exponential.Out )
		.start();

	new TWEEN.Tween( cameraDummy.position )
		.to( { y: - 30 }, 5000 )
		.easing( TWEEN.Easing.Exponential.Out )
		.start();

	window.addEventListener( 'resize', onWindowResize, false );

};

var onDocumentMouseDownX = 0;

var onDocumentMouseDown = function ( event ) {

	onDocumentMouseDownX = event.clientX;

	var onDocumentMouseMove = function ( event ) {

		document.body.style.cursor = 'move';

		var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;

		rotationTarget -= movementX * 0.005;

	};

	var onDocumentMouseUp = function ( event ) {

		document.body.style.cursor = 'pointer';

		document.removeEventListener( 'mousemove', onDocumentMouseMove );
		document.removeEventListener( 'mouseup', onDocumentMouseUp );

	};

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'mouseup', onDocumentMouseUp, false );

};

var onDocumentMouseMove = function ( event ) {

	event.preventDefault();

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

};



//TONE.JS CODE

    var feedbackDelay = new Tone.PingPongDelay({
	"delayTime" : "8n",
	"feedback" : 0.01,
	"wet" : 0.5
}).toMaster();

    // var feedbackDelay = new Tone.PingPongDelay("8n");
// 		//60% feedback
// 		feedbackDelay.setFeedback(1);

    var panner = new Tone.AutoPanner();
	var osc1 = new Tone.Oscillator(44, "sine").toMaster();
   	osc1.volume.value = -16;
  	osc1.start();
  	console.log("osc1 playing" + osc1);
  	osc1.connect(panner);
		//osc1.setVolume(-46);
	panner.connect(feedbackDelay);
  	// osc1.connect(gain);
  	// gain.toMaster();

  	var osc2 = new Tone.Oscillator(42, "triangle").toMaster();
    osc2.volume.value = -36;
    osc2.start();
    osc2.connect(panner);
        
        var freqLFO = new Tone.LFO(0.1, 50, 1000);
        freqLFO.type = "sawtooth";
        freqLFO.connect(osc2.frequency);

    var osc3 = new Tone.Oscillator(70, "triangle").toMaster();
    osc3.volume.value = -46;
    osc3.start();
    osc3.connect(panner);
            var freqLFO = new Tone.LFO(0.1, 50, 1000);
        freqLFO.type = "sine";
        freqLFO.connect(osc3.frequency);

    var osc4 = new Tone.Oscillator(45, "triangle").toMaster();
    osc4.volume.value = -46;
    osc4.start();
    osc4.connect(panner);
            var freqLFO = new Tone.LFO(0.1, 50, 1000);
        freqLFO.type = "square";
        freqLFO.connect(osc4.frequency);

    var osc5 = new Tone.Oscillator(41, "triangle").toMaster();
    osc5.volume.value = -46;
    osc5.start();
    osc5.connect(panner);
        //     var freqLFO = new Tone.LFO(0.1, 50, 1000);
        // freqLFO.type = "sine";
        // freqLFO.connect(osc5.frequency);

//     var feedbackDelay = new Tone.PingPongDelay({
// 	"delayTime" : "8n",
// 	"feedback" : 0.01,
// 	"wet" : 0.5
// 	//how to map/attach these values to user interaction of clicks on video source?
// }).toMaster();



	var player0 = new Tone.Player("./samples/kooka.mp3")
	.connect(feedbackDelay);
	player0.loop = true;

	var player1 = new Tone.Player("./samples/melody1.mp3")
		.connect(feedbackDelay);
			player1.loop = true;

	var player2 = new Tone.Player("./samples/mixxed.mp3")
		.connect(feedbackDelay);
			player2.loop = true;

	var players = [player0, player1, player2];




var playAudio = function(songID){ //function to attach specific 'mp3 object' to specific 'video object'
	console.log('playAudio called');
	console.log("songID" + songID);

	for (var i = 0; i < players.length; i++){
		players[i].start();
		players[i].toMaster();
		console.log("player"+i+" = "+players[i]);

		  if (i === songID){
		  	console.log("songID match!");
		    //unmute the player at songID
		    players[i].volume.rampTo(0, 0.01); // a volume ramp to avoid any clicks
		  } else {
		    //make the rest very quiet
		    players[i].volume.rampTo(-30, 0.01);
		  }
	}

    // player object to load the sample 
    var playerObject = {
    	0:"./samples/melody1.mp3",
    	1:"./samples/kooka.mp3",
    	2:"./samples/mixxed.mp3",
    };    
};


var onDocumentClick = function ( event ) {

	if ( Math.abs( event.clientX - onDocumentMouseDownX ) > 2 ) return;

	if ( MOUSEOVERED === null ) return;
	if ( videos[ MOUSEOVERED ].isPlaying() === true ) return;

	if ( CLICKED !== null ) {

		var video = videos[ CLICKED ];
		video.pause();

	}

	TWEEN.removeAll();

	var start = rotation; // CLICKED || 0;
	var end = MOUSEOVERED;

	// fix 360

	if ( end - start >= 5 ) end -= 10;

	rotationTarget = end;
	
	CLICKED = MOUSEOVERED;
	console.log("CLICKED = " + CLICKED);
	console.log("MOUSEOVERED = " + MOUSEOVERED);

	var video = videos[ CLICKED ];
	video.play();
	playAudio(CLICKED);
};







var onWindowResize = function () {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

};

var animate = function () {
	//console.log('animate');

	requestAnimationFrame( animate );

	TWEEN.update();

	stats.begin();

	var x = mouse.x * 100.0;
	var y = mouse.y * 100.0;

	camera.position.x += ( x - camera.position.x ) * 0.1;
	camera.position.y += ( y - camera.position.y ) * 0.1;


	camera.lookAt( cameraTarget );

	rotation += ( rotationTarget - rotation ) * 0.03; // 0.1 this number determines rotation speed of video objects

	cameraDummy.position.x = Math.sin( rotation * angle ) * 2000; //1500
	cameraDummy.position.z = Math.cos( rotation * angle ) * 2000; //1500
	cameraDummy.rotation.y = rotation * angle;

	//

	var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
	projector.unprojectVector( vector, camera );

	ray.origin.copy( cameraDummy.position );
	ray.direction.copy( vector.subSelf( cameraDummy.position ).normalize() );

	var intersections = ray.intersectObjects( objects );

	if ( intersections.length > 0 ) {

		var object = objects.indexOf( intersections[ 0 ].object );

			//console.log('object:' + object);
			


		if ( MOUSEOVERED !== object ) {

			document.body.style.cursor = 'pointer';

			if ( MOUSEOVERED !== null ) videos[ MOUSEOVERED ].rollout();

			MOUSEOVERED = object;

			videos[ MOUSEOVERED ].rollover();

		}

	} else {

		document.body.style.cursor = '';

		if ( MOUSEOVERED !== null ) videos[ MOUSEOVERED ].rollout();

		MOUSEOVERED = null;

	}

	renderer.render( scene, camera );

	stats.end();

};

	init();
	animate();

// if ( System.support.webgl === true ) {

// 	init();
// 	animate();

// } else {

// 	var message = document.createElement( 'div' );
// 	message.id = 'message';
// 	message.innerHTML = 'Either your graphics card or your browser does not support WebGL. Try <a href="http://www.google.com/chrome/">Google Chrome</a><br />or <a href="http://www.khronos.org/webgl/wiki_1_15/index.php/Getting_a_WebGL_Implementation">view a list</a> of WebGL compatible browsers.';
// 	document.body.appendChild( message );

// }

// };