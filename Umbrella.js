class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,65,options);
        this.radius = 65;
        World.add(world, this.umbrella)
        //load Image for BestMan
        this.BatmanImage = loadImage("bat/Bestman-01.png");
    }

    display(){
        var pos = this.umbrella.position;

            imageMode(CORNER);
        if(frameCount<200)
        {
            image(this.image,pos.x-100, pos.y+100,350,350);
        }
                //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount>=200)
        {
            image(this.BatmanImage, pos.x-30, pos.y+90, 250, 350);
        }
        
    }
}
