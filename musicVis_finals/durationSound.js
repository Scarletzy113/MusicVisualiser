function durationSound(){
    
    this.onResize = function(){
	this.x = width/2+100 ;
	this.y = height/8 *7.23;
    };
    
    this.onResize();
    
    
    this.draw = function(){
        //mapping duration
        let dur = map(sound.currentTime(),0, sound.duration(),0,100);
        
        //drawing out the time of the music.
        fill("white");
        stroke("black")
        strokeWeight(2);
		textSize(30);
        time = dur.toFixed(2);
        text(time,this.x,this.y);
    }
}