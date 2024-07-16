//displays and handles clicks on the playback button.
function SlowDownButton(){
	
	
	this.width = 20;
	this.height = 20;

	//flag to determine whether to play or pause after button click and
	//to determine which icon to draw
	this.onResize = function(){
        this.x = width/4 ;
	    this.y = height/8 *7;
       
    }
    this.onResize();

	this.draw = function(){        
		triangle(this.x+5, this.y, this.x+5 - this.width , this.y + this.height/2, this.x+5, this.y+this.height);
        triangle(this.x+15, this.y, this.x +15 - this.width , this.y + this.height/2, this.x +15, this.y+this.height);
         

	};

	//checks for clicks on the button, reduce speed or returns speed to normal if alr rewound.
	//@returns true if clicked false otherwise.
	this.hitCheck = function(){
		if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height){
            if(sound.playbackRate==slowDownSpeed){
                sound.rate(defaultSpeed);
                console.log(sound.playbackRate);
            }
            else if(sound.playbackRate==defaultSpeed){
                sound.rate(slowDownSpeed); 
  			    console.log(sound.playbackRate);
            }
            else if(sound.playbackRate==speedUpSpeed){
                sound.rate(defaultSpeed);
                console.log(sound.playbackRate);
            }
  			return true;
		}
			return false;
	};

}