//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;

var speedUpSpeed = 2.0;
var slowDownSpeed = 0.5;
var defaultSpeed = 1.0;

var dur;

var blockMidHighLow;

var circle;

function preload(){
	sound = loadSound('assets/stomper_reggae_bit.mp3');
}

function setup(){
	 createCanvas(windowWidth, windowHeight);
	 background(0);
     
	 controls = new ControlsAndInput();
     
     duration = new durationSound();
	 //instantiate the fft object
	 fourier = new p5.FFT();

	 //create a new visualisation container and add visualisations
	 vis = new Visualisations();
	 vis.add(new Spectrum());
	 vis.add(new WavePattern());
	 vis.add(new Needles());
     blockMidHighLow = new BlockMidHighLow;
     vis.add(blockMidHighLow);
     circle = new circle;
     vis.add(circle);
     vis.add(new RidgePlots());
    
     
}

function draw(){
	background(0);
	//draw the selected visualisation
	vis.selectedVisual.draw();
	//draw the controls on top.
	controls.draw();
    duration.draw();
    
    
}

function mouseClicked(){
	controls.mousePressed();
}

function keyPressed(){
	controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
    if(controls.slowDown.hasOwnProperty('onResize')){
        controls.slowDown.onResize();
    }
    if(controls.playbackButton.hasOwnProperty('onResize')){
        controls.playbackButton.onResize();
    }
    if(controls.speedUp.hasOwnProperty('onResize')){
        controls.speedUp.onResize();
    }
    if(duration.hasOwnProperty('onResize')){
        duration.onResize();
    }
}
