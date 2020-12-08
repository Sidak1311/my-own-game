class ball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.4,
            friction:0.4,
            density:0.4,
            frictionAir:0
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        ellipseMode(RADIUS)
        fill("orange")
        ellipse(pos.x,pos.y,this.radius, this.radius)
    }
}