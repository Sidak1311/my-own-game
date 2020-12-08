class arrows{
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
    control(){
        if(keyIsDown(UP_ARROW)){
            var pos= this.body.position; 
            Matter.Body.setPosition(this.body,{x:pos.x,y:pos.y-10}); 
          }
          if(keyIsDown(LEFT_ARROW)){
            var pos= this.body.position; 
            Matter.Body.setPosition(this.body,{x:pos.x -10,y:pos.y}); 
          }
          if(keyIsDown(DOWN_ARROW)){
            var pos= this.body.position; 
            Matter.Body.setPosition(this.body,{x:pos.x,y:pos.y+10}); 
          }
          if(keyIsDown(RIGHT_ARROW)){
            var pos= this.body.position; 
            Matter.Body.setPosition(this.body,{x:pos.x +10,y:pos.y}); 
          }
    }
    display(){
        var position = this.body.position
        rectMode(CENTER)
        fill("blue")
        rect(position.x,position.y,this.width,this.height)
    }
}