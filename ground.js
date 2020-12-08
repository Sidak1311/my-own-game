class Gliver{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            friction:0.4
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }

    display(){
        var position = this.body.position
        rectMode(CENTER)
        fill("blue")
        rect(position.x,position.y,this.width,this.height)
    }
}