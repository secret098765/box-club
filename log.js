class Log{
    constructor(x,y,h,angle){
        var options ={
            restitution: 0.5,
            friction:1,
            density:1
        }
    
        this.body= Bodies.rectangle(x,y,20,h, options);
        Matter.Body.setAngle(this.body,angle)
        this.w=20
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