class Drop
{
    constructor(x, y)
    {
        var options = {
        'friction':0.1,
        }
        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);
    }

    update()
      {
          if(this.body.position.y > height)
          {
              Matter.Body.setPosition(this.body, {x:random(0,500), y:random(0,650)})
          }
      }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y,4, 4);
        pop();
      }
}