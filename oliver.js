class Oliver{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            friction:0.4
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("Screenshot (305).png")
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    control_oliver(){
        if(keyIsDown(87)){
            var pos= this.body.position; 
            Matter.Body.setPosition(this.body,{x:pos.x,y:pos.y-10}); 
          }
          if(keyIsDown(65)){
            var pos= this.body.position; 
            Matter.Body.setPosition(this.body,{x:pos.x -10,y:pos.y}); 
          }
          if(keyIsDown(83)){
            var pos= this.body.position; 
            Matter.Body.setPosition(this.body,{x:pos.x,y:pos.y+10}); 
          }
          if(keyIsDown(68)){
            var pos= this.body.position; 
            Matter.Body.setPosition(this.body,{x:pos.x +10,y:pos.y}); 
          }
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