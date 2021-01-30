class Pig{
    constructor(x,y){
        var options ={
            restitution: 0.5,
            friction:1,
            density:1
        }
    
        this.body= Bodies.rectangle(x,y,50,50, options);
        this.w=50
        this.h=50
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        rectMode(CENTER)
        stroke("green")
        strokeWeight(4)
        fill("green")
        rect(0,0,this.w,this.h)
        pop()
    }
}