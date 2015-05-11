// Tommy Payne :: Interactive Music Midterm
// Two vinyl DJ decks
// Scratch in the browser		

		Tone.Transport.start();
		var chorus = new Tone.Chorus(4, 2.5, 0.5);

		// write a function to make a Chorus
		var makeChorus = function(event){
		if (event != null){
			console.log("sample can be layered");
			var myVoice
		}

	}

		var loaded = 0;
		function testLoaded(){
			if (loaded ===4){
				console.log("sample loaded");
				//player.start();
			}
		}

		var player = new Tone.Player("./samples/tom_pitch.mp3", function(){
			loaded++;
			testLoaded();

		});

			var player2 = new Tone.Player("./samples/congodrum.mp3", function(){
			loaded++;
			testLoaded();
		});

		//invoked when the queued sample is done loading
		Tone.Buffer.onload = function(){
		player.start();
		player2.start();
   	 	console.log("everything is loaded");
		};

		player.toMaster();
		player2.toMaster();
		player.loop = true;
		player2.loop = true;
		player.retrigger = true;
		player2.retrigger = true;

		

		nx.onload = function(){

			nx.colorize("#00CCFF"); // sets accent (default)
	  		nx.colorize("border", "#222222");
	  		nx.colorize("fill", "#222222");
		
	  		vinyl2.colors.accent = "#FF00CC";
	  		vinyl2.draw();

		vinyl2.on("*", function(data){
			//callback inside the function 
			//next line of code is where the mp3 PBR is mapped to the speed of the Vinyl object
			//we are changing the players PBR based on the user interaction speed of the Vinyl GUI
			player.playbackRate = data.speed;
			console.log(data);
			if (data.on === 1){
				if (playBackSpeed[data.key]){
					player.playbackRate(playBackSpeed[data.key]);
				}
			} else {
				//player.triggerRelease();
			}
		});
	

	vinyl3.on("*", function(data){
			//callback inside the function 
			//next line of code is where the mp3 PBR is mapped to the speed of the Vinyl object
			//we are changing the players PBR based on the user interaction speed of the Vinyl GUI
			player2.playbackRate = data.speed;
			console.log(data);
			if (data.on === 1){
				if (playBackSpeed[data.key]){
					player2.playbackRate(playBackSpeed[data.key]);
				}
			} else {
				//player.triggerRelease();
			}
		});
	};

		//	var playBackSpeed = {
		// "S" : "C2",
		// "D" : "E4",
		// "F" : "A6"
		// "S" : false,
		// "D" : false,
		// "F" : false
	// 	"S" : player.playbackRate = 4,
	// 	"D" : player.playbackRate = 1,
	// 	"F" : player.playbackRate = 0.5
	// };

	// var map = function (n, start1, stop1, start2, stop2) {
	// return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
	// };

	