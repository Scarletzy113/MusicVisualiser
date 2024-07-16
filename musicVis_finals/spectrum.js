function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		//fill(0,255,0)
		var c1 = color(0,255,0);
        var c2 = color(255,0,0);
        
        for (var i = 0; i< spectrum.length; i++){
//			var x = map(i, 0, spectrum.length, 0, width);
//		    var h = -height + map(spectrum[i], 0, 255, height, 0);
//		    rect(x, height, width / spectrum.length, h );
            
            var y = map(i,0,spectrum.length,0,height);
            var h = map(spectrum[i],0,255,0,width);
            var c = lerpColor(c1,c2,spectrum[i]/255);
            fill(c);
            rect(0,y,h,height/spectrum.length);
  		}
	
		pop();
	};
    
    this.unSelectVisual = function(){
        
    }
    
    this.selectVisual = function(){
        
    }
}
