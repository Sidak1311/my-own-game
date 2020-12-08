class obstacles{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            friction:0.4
        }
        this.image = loadImage("enemy.png")
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }

    display(){
        var position = this.body.position
        push()
        translate(position.x - 120,position.y-60)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("blue")
        //rect(0,0,this.width,this.height)
        image(this.image, 0, 0,250,250)
        pop()
    }
}