class Box{
    constructor(x,y,w,h){
        var options ={
            restitution: 0.5,
            friction:1,
            density:1
        }
    
        this.body= Bodies.rectangle(x,y,w,h, options);
        this.w=w
        this.h=h
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
        fill("white")
        rect(0,0,this.w,this.h)
        pop()
    }
}