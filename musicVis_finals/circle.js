var particles = [];

var particleColour = "#FFFFFF";
var circleColour = "#00FFFF";
function circle(){
    
    this.name = "Circle";
    
    var gui;
    
    this.depleted = false;
    
    this.setup = function(){
        gui = createGui("Audio Visualiser");
        gui.setPosition(width-200,0);
        
        
        sliderRange(0,255,1);
        
        gui.addGlobals("particleColour");
        gui.addGlobals("circleColour");
        
        gui.hide();
    }
    
    this.setup();
    
     this.unSelectVisual = function(){
        gui.hide();
    }
    
    this.selectVisual = function(){
        gui.show();
    }
    
    this.draw =function(){
        
        var amp = fourier.analyze();
        var LM = fourier.getEnergy("lowMid");

        
        LMParticle(LM);       
        circleEnergy(amp);
        

    
    }
    //particle system around the visualiser
    function LMParticle(energy){
        push();
        translate(width/2,height/2);
        var p =new particle();
            particles.push(p);

            for(var i= particles.length - 1; i >= 0 ;i--){
                if(!particles[i].edge()){
                    particles[i].update(energy>150);
                    particles[i].show();
                }else{
                    particles.splice(i,1);
                }

               }
        pop();
    }

    //drawing middle circle visualiser
    function circleEnergy(energy){
        push();
        translate(width/2,height/2);

        fill(circleColour);
        beginShape();
        for (var i=0; i<energy.length;i++){
            var angle = map(i,0, energy.length,0,360);
            var bass = energy[i];
            var r =map(bass,0,256,40,200);
            var x = r*cos(angle);
            var y = r*sin(angle);
            stroke(circleColour);
            line(0,0,x,y)

        }
        endShape();
        pop();5

    }
    
    this.isMouseInGUI = function(){
        var inGUI = false;
        var gui_x = gui.prototype._panel.style.left;
        var gui_y = gui.prototype._panel.style.top;
        var gui_height =  gui.prototype._panel.clientHeight;
        var gui_width = gui.prototype._panel.clientWidth;
        
        gui_x = parseInt(gui_x,10);
        gui_y = parseInt(gui_y,10);
        gui_height = parseInt(gui_height,10);
        gui_width = parseInt(gui_width,10);
        
        if(mouseX>gui_x && mouseX<gui_x+gui_width){
            if(mouseY>gui_y && mouseY<gui_y+gui_height){
                inGUI=true
            }
            
        }
        
        return inGUI;
        
    }
}


