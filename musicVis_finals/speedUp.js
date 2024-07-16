//displays and handles clicks on the playback button.
function SpeedUpButton(){
	
	
	this.width = 20;
	this.height = 20;

	
	this.onResize = function(){
        this.x = width/4*3 ;
	    this.y = height/8 *7;
    }
    
    this.onResize();
    
	this.draw = function(){        
		
        triangle(this.x+10, this.y, this.x+10 + this.width, this.y + this.height/2, this.x+10, this.y+this.height);
        triangle(this.x, this.y, this.x + this.width, this.y + this.height/2, this.x, this.y+this.height);

	};

	//checks for clicks on the button, speedsup or if its already spedup, reduce speed to normal.
	//@returns true if clicked false otherwise.
	this.hitCheck = function(){
		if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height){
            if(sound.playbackRate==speedUpSpeed){
                sound.rate(defaultSpeed);
                console.log(sound.playbackRate);
            }
            else if(sound.playbackRate==defaultSpeed){
                sound.rate(speedUpSpeed); 
  			    console.log(sound.playbackRate);
            }
            else if(sound.playbackRate==slowDownSpeed){
                sound.rate(defaultSpeed);
                console.log(sound.playbackRate);
            }
  			return true;
		}
			return false;
	};

}