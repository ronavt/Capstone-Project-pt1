
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var defender1Img,defender1
var defender2Img,defender2
var defender3Img,defender3
var defender4Img,defender4
var defender5Img,defender5
var defender6Img,defender6
var blakeImg,blake
var field1Img,field1
var goalImg
var ballImg, ball
var edges
var gameState = "intro"
var invisGround
var instructions,instructionsImg
var start, startImg

function preload()
{
	defenderImg = loadImage('images/defender.png');
	blakeImg = loadImage('images/Blake.png');
	field1Img = loadImage('images/field.png');
	goalImg = loadImage('images/goal.png');
	ballImg = loadImage('images/ball.png');
	instructionsImg = loadImage('images/instructions.png')
	startImg = loadImage('images/button.png')
	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	field1 = createSprite(400,350,800,700)
	field1.addImage('field',field1Img)
	field1.addImage('goal',goalImg)
	field1.changeImage('field')
	field1.scale = 5;

	defender1 = createSprite(400,350)
	defender1.addImage('defender',defenderImg)
	defender1.visible = false
	defender2 = createSprite(500,350)
	defender2.addImage('defender',defenderImg)
	defender2.visible = false
	defender3 = createSprite(600,350)
	defender3.addImage('defender',defenderImg)
	defender3.visible = false
	defender4 = createSprite(300,350)
	defender4.addImage('defender',defenderImg)
	defender4.visible = false
	defender5 = createSprite(200,350)
	defender5.addImage('defender',defenderImg)
	defender5.visible = false
	defender6 = createSprite(700,350)
	defender6.addImage('defender',defenderImg)
	defender6.visible = false
	
	



	blake = createSprite(400,100)
	blake.addImage('blake',blakeImg)

	ball = createSprite(400, 200)
	ball.addImage('ball',ballImg)
	ball.scale = 0.5
	
	edges = createEdgeSprites()
	blake.debug = true
	ball.debug = true
	ball.setCollider("circle",0,0,45)
	ball.velocityX = 5
	ball.velocityY = 5
	invisGround = createSprite(400,700,500,10)
	instructions = createSprite(400,350.)
	instructions.addImage('instructions',instructionsImg)
	instructions.visible = false
	start = createSprite(400,430)
	field1.visible = true
	start.addImage('start',startImg)
	
	
	//goalImg = createSprite()

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  //if(gameState == 1){
	if(ball.isTouching(blake)){
		ball.bounceOff(blake)	
	}
	if(ball.isTouching(invisGround)){
		background(goalImg)
	}
	if(gameState === "intro"){
		instructions.visible = true
		if(mousePressedOver(start)){
			instructions.destroy()
			start.destroy()
			gameState = "level1"
		}
		
	}
	if(gameState === "level1"){
		defender1.visible = true
		playerMovement()
		//   if(defender1.isTouching(ball)){
		//   	gameState = "end"
		//   }

		if(ball.isTouching(invisGround)){
			field1.changeImage('goal')
			field1.scale = 0.8
			
			background("white")
			defender1.visible = false
			defender2.visible = false
			defender3.visible = false
			defender4.visible = false
			defender5.visible = false
			defender6.visible = false
			if(ball.isTouching(field1)){
				gameState = "level2"
			}
		}
	}
	if(gameState === "level2"){
		playerMovement()
		defender1.visible = true
		defender2.visible = true
	}
	if(gameState === "level3"){
		playerMovement()
		defender1.visible = true
		defender2.visible = true
		defender3.visible = true
	}
	if(gameState === "level4"){
		playerMovement()
		defender1.visible = true
		defender2.visible = true
		defender3.visible = true
		defender4.visible = true
	}
	if(gameState === "level5"){
		playerMovement()
		defender1.visible = true
		defender2.visible = true
		defender3.visible = true
		defender4.visible = true
		defender5.visible = true
	}
	if(gameState === "level6"){
		playerMovement()
		defender1.visible = true
		defender2.visible = true
		defender3.visible = true
		defender4.visible = true
		defender5.visible = true
		defender6.visible = true
	}
	
	if(gameState === "end"){
		field1.destroy()
		defender1.destroy()
		blake.destroy()
		ball.destroy()
		textSize(30)
		fill("red")
		text("Game Over!",360,300)
	}
	ball.bounceOff(edges)
	defender1.x = ball.x
	//defender1.y = ball.y

  }

  function playerMovement(){
	if(keyDown("UP_ARROW")){
		blake.y = blake.y-5
	}
	if(keyDown("DOWN_ARROW")){
		blake.y = blake.y+5
	}
	if(keyDown("LEFT_ARROW")){
		blake.x = blake.x-5
	}
	if(keyDown("RIGHT_ARROW")){
		blake.x = blake.x+5
	}
	
  }






