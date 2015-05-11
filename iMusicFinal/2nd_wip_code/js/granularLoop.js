// testing out granular loop of mp3

<!DOCTYPE html>
<html>
<head>
    <title>granular loop</title>
    <script type="text/javascript" src="http://cdn.tonejs.org/r4/Tone.min.js"></script> 
</head>
<body>
    <script type="text/javascript">

     

 var player = new Tone.Player("./samples/GlassSweep.mp3", function(){
            loaded++;
            testLoaded();
        });

        
        Tone.Buffer.onload = function(){
        player.start();
        console.log("everything is loaded");
        };


        player.toMaster();
        //try granular looping here >>
        player.loop = true;
        player.loopStart = 0.01;
        player.loopEnd = loopStart + 0.01;

        // Tone.Transport.loopStart = 0.01;
        // Tone.Transport.loopEnd = loopStart + 0.01;

        // player.loop.start = 1;
        // player.loop.end = player.loop.start + 0.01;

        // player.retrigger = true;




        //play with grain size in seconds 
        //trim silince on mp3's
        //uniform volume








</script>
    </body>
</html>