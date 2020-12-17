//Rather than making restrictions for oliver i did not allow him to move up or down
//Added the hoop rectangle for better collision
const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var oliver, loog, basketball
var rope,hoop, score, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5
var angle, chance, xForce, yForce, back
var gameState

function setup() {
  createCanvas(1600,800);
  engine = Engine.create()
  world = engine.world
  gameState = "story"
  oliver = new Oliver(773,600,50,50)
  arrow = new arrows(oliver.body.position.x,oliver.body.position.y - 60,60,20)
  ground = new Gliver(800,700,2600,20)
  topGround = new Gliver(800,50,2600,20)
  leftGround = new Gliver(50,400,20,2600)
  rightGround = new Gliver(1550,400,20,2600)
  basketball = new ball(800,400,20)
  rope = new launcher(basketball.body, {x:oliver.body.position.x,y:oliver.body.position.y + 40})
  hoop = new hop(888,115,50,20)
  obstacle1 = new obstacles(random(93,1490),random(194, 500),50,50)
  obstacle2 = new obstacles(random(93,1490),random(194, 500),50,50)
  obstacle3 = new obstacles(random(93,1490),random(194, 500),50,50)
  obstacle4 = new obstacles(random(93,1490),random(194, 500),50,50)
  obstacle5 = new obstacles(random(93,1490),random(194, 500),50,50)
  angle = 0
  score = 0
  chance = 0
  back = loadImage("background.jpg")
}

function draw() {
  background(255,255,255);
  if(gameState === "story"){
    background("blue")
    text("Oliver was a disabled boy. The other kids bullied him and told him that he couldn't ever win a basketball game.", 200, 200)
    text("Oliver is ready to prove them wrong with your help. press p to start", 200, 300)
  }
  if(gameState === "start"){
    image(back,0,-displayHeight,displayWidth*1.001,displayHeight*3)
    text("x:"+mouseX + "y"+mouseY, mouseX,mouseY)
    rope.launcher.pointB.x = oliver.body.position.x - 60
    rope.launcher.pointB.y = oliver.body.position.y + 40
    Engine.update(engine)
    topGround.display()
    leftGround.display()
    rightGround.display()
    hoop.display()
    basketball.display()
    ground.display()
    oliver.display()
    rope.display()
    arrow.display()
    arrow.control()
    oliver.control_oliver()
    if(score > 1){
    obstacle1.display()
    }
    if(score > 3){
    obstacle2.display()
    }
    if(score > 5){
      obstacle3.display()
    }
    if(score > 6){
      obstacle4.display()
    }
    if(score > 8){
      obstacle5.display()
    }
    if(frameCount % 60 === 0){
      obstacle1.body.position.x = random(100,1500)
      obstacle2.body.position.y = random(100,700)
      obstacle3.body.position.x = random(100,1500)
      obstacle4.body.position.y = random(100,700)
      obstacle5.body.position.x = random(100,1500)

    }
    loog = Matter.SAT.collides(oliver.body,ground.body)
    loog2 = Matter.SAT.collides(oliver.body,rightGround.body)
    loog3 = Matter.SAT.collides(oliver.body,leftGround.body)
    loog4 = Matter.SAT.collides(oliver.body,topGround.body)
    collidedBall = Matter.SAT.collides(basketball.body, topGround.body)
    collidedBoll2 = Matter.SAT.collides(basketball.body, hoop.body)

    text('Score: '+score,124,154)
    Key_collisions()
    setForce()
    if(score === 10){
      gameState = "end"
    }
  }
  if(gameState === "end"){
    background("blue")
    fill("black")
    text("CONGRATULATIONS! Oliver proved the bullies wrong and you won!",200,200)
  }
}
















function Key_collisions(){

  if(loog.collided){
    position = oliver.body.position
    Matter.Body.setPosition(oliver.body, {x:position.x,y:660})
  }
  if(loog2.collided){
    position = oliver.body.position
    Matter.Body.setPosition(oliver.body, {x:1490,y:position.y})
  }
  if(loog3.collided){
    position = oliver.body.position
    Matter.Body.setPosition(oliver.body, {x:110,y:position.y})
  }
  if(loog4.collided){
    position = oliver.body.position
    Matter.Body.setPosition(oliver.body, {x:position.x,y:100})
  }
  if(collidedBall.collided  ||  collidedBoll2.collided){
    rope.attach(basketball.body)
    chance += 1
  }
  if(collidedBoll2.collided){
    score += 1
    chance += 1
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(basketball.body,basketball.body.position, {x:xForce,y:yForce})
    rope.fly()
    chance += 1
  }
    if(chance < 10){
      if(keyCode === 82){
        rope.pointB.x= oliver.body.position.x
        rope.pointB.y = oliver.body.position.y + 40
        rope.attach(basketball.body)
      }
    }
    if(gameState === "story"){
      if(keyCode === 80){
        gameState = "start"
      }
    }
}

function setForce(){
  if(arrow.body.position.x === oliver.body.position.x){
    xForce = 0
  }else if(arrow.body.position.x < oliver.body.position.x){
    xForce = (arrow.body.position.x - oliver.body.position.x)/500
  }else if(arrow.body.position.x > oliver.body.position.x){
    xForce = (arrow.body.position.x - oliver.body.position.x)/500
  }


  if(arrow.body.position.y === oliver.body.position.y){
    yForce = 0
  }else if(arrow.body.position.y < oliver.body.position.y){
    yForce = (arrow.body.position.y - oliver.body.position.y)/500
  }else if(arrow.body.position.y > oliver.body.position.y){
    yForce = (arrow.body.position.y - oliver.body.position.y)/500
  }
}
