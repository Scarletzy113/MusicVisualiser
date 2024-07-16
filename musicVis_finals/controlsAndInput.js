//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput(){
	
    
    
	this.menuDisplayed = false;
	
	//playback button displayed in the middle of the screen
	this.playbackButton = new PlaybackButton();
    
    //speed up button displayed
    this.speedUp = new SpeedUpButton();
    
    //slow down button displayed
    this.slowDown = new SlowDownButton();
    
    //current timing of the music
    this.durationSound = new durationSound();

	//make the window fullscreen or revert to windowed
	this.mousePressed = function(){
		
		//check if the playback button has been clicked
        var isButtonClicked = this.playbackButton.hitCheck();
        //check if speed up button has been clicked
        var isSpeedUp = this.speedUp.hitCheck();
        //check if slow down button has been clicked
        var isSlowDown = this.slowDown.hitCheck();
        
        var isMouseInBlockGUI = blockMidHighLow.isMouseInGUI();
        
        var isMouseInCircleGUI = circle.isMouseInGUI();
        
        //if not make the visualisation fullscreen
        if(isButtonClicked==false&& isSpeedUp==false && isSlowDown==false && isMouseInBlockGUI==false && isMouseInCircleGUI==false){
            let fs = fullscreen();
            fullscreen(!fs);
            
        }
	};

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode){
		console.log(keycode);
		if(keycode == 32){
			this.menuDisplayed = !this.menuDisplayed;
		}

		if(keycode > 48 && keycode < 58){
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name); 
		}
	};

	//draws the playback button and potentially the menu
	this.draw = function(){
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		//playback button 
		this.playbackButton.draw();
        //speedup button
        this.speedUp.draw();
        //slowdown button
        this.slowDown.draw();
        //show sound file duration
        
		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed){

			text("Select a visualisation:", 100, 30);
			this.menu();
		}	
		pop();

	};

	this.menu = function(){
		//draw out menu items for each visualisation
		for(var i=0; i<vis.visuals.length;i++){
            text((i+1) +":"+vis.visuals[i].name,100,30+(i+1)*35);
            
        }
	};
}


