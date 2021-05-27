var mario,mario2,marioback,marioback2,mask,maskSp,sanitizer,sanitizerSp,dettol,dettolSp,soap,soapSp,virus,virusSp,flag,flagSp,hospital,hospitalSp,home,homeSp;
var Smario,marioSp,marioJ,tunnel,tunnelSp;
var maskGroup,virusGroup,dettolGroup,sanitizerGroup,soapGroup;
var backGround;
var InvisibleG,leftE;
var score = 0;

function preload(){
    backGround = loadImage("IMAGES/MARIO BACKGROUND.jpg");
    marioback2 = loadAnimation("IMAGES/M11.png");
    marioback = loadAnimation("IMAGES/M11.png","IMAGES/M22.png","IMAGES/M33.png","IMAGES/M44.png")
    mario2 = loadAnimation("IMAGES/M1.png");
    mario = loadAnimation("IMAGES/M1.png","IMAGES/M2.png","IMAGES/M3.png","IMAGES/M4.png")
    marioJ = loadAnimation("IMAGES/M5.png");
    virus = loadImage("IMAGES/CORONA.png");
    mask = loadImage("IMAGES/MASK.png");
    sanitizer = loadImage("IMAGES/SANITIZER..png");
    dettol = loadImage("IMAGES/DETTOL.png");
    soap = loadImage("IMAGES/SOAP.png");
    hospital = loadImage("IMAGES/HOSPITAL.jpg");
    flag = loadImage("IMAGES/FLAG.gif");
    home = loadImage("IMAGES/FINISHING HOUSE.png");
    tunnel = loadImage("IMAGES/TUNNEL.png");
}

function setup(){
    createCanvas(displayWidth*8,displayHeight);
    marioSp = createSprite(100,800/2);
    marioSp.scale = 2;
    marioSp.addAnimation("marioo",mario2);
    marioSp.addAnimation("mario",mario);
    marioSp.addAnimation("mariooo",marioback);
    marioSp.addAnimation("mariojump",marioJ);
    marioSp.addAnimation("marioooo",marioback2);
    InvisibleG = createSprite(displayWidth*4,displayHeight-100,displayWidth*8,5);

    InvisibleG.visible = false;

    leftE = createSprite(5,displayHeight/2,10,displayHeight);
    leftE.visible = false; 

    virusGroup = new Group();
    dettolGroup = new Group();
    maskGroup = new Group();
    soapGroup = new Group();
    sanitizerGroup = new Group();
    }

function draw(){
    background(backGround);

    virusF();
    maskF();
    dettolF();
    soapF();
    sanitizerF();


    marioSp.velocityY = marioSp.velocityY+0.5;

    camera.x = displayWidth*4;
    camera.y = displayHeight/2;

    if(keyDown ("space")){
        marioSp.changeAnimation("mariojump",marioJ);
        marioSp.velocityY = -5;       
    }
    if(keyDown ("RIGHT_ARROW")){
        marioSp.changeAnimation("mario",mario);
       marioSp.x = marioSp.x+10; 
       camera.x = camera.x+10;
    }
    if(keyDown ("LEFT_ARROW")){
        marioSp.changeAnimation("mariooo",marioback);
        marioSp.x = marioSp.x-10;
        camera.x = camera.x-10 
    }
    if(keyWentUp ("RIGHT_ARROW")){
        marioSp.changeAnimation("marioo",mario2);
        marioSp.velocityX = 0;
    }
    if(keyWentUp ("LEFT_ARROW")){
        marioSp.changeAnimation("marioooo",marioback2);
        marioSp.velocityX = 0;
    }
    if(keyWentUp("space")){
        marioSp.changeAnimation("marioo",mario2);
    }   
    if(virusGroup.isTouching(marioSp)){
        virusGroup.destroyEach();
    }
    if(marioSp.isTouching(maskGroup)){
        maskGroup.destroyEach();
    }
    if(marioSp.isTouching(sanitizerGroup)){
        sanitizerGroup.destroyEach();
    }
    if(marioSp.isTouching(soapGroup)){
        soapGroup.destroyEach();
    }
    if(marioSp.isTouching(dettolGroup)){
        dettolGroup.destroyEach();
    }
    
    marioSp.collide(InvisibleG);
    marioSp.collide(leftE)

    drawSprites();
}

function virusF(){
    if(frameCount%35 === 0){
        virusSp = createSprite(displayWidth*8-20,Math.round(random(400-100,600+50)),10,10);
        virusSp.scale = 0.1+0.2
        virusSp.addImage(virus);
        virusSp.velocityX = -20;
        //time = distance/speed(10000/20)
        virusSp.lifetime = 500;
        virusGroup.add(virusSp);
    }
}

function maskF(){
    if(frameCount%50 === 0){
        maskSp = createSprite(Math.round(random(displayWidth*8,displayWidth/2)),Math.round(random(100,650)),10,10)
        maskSp.scale = 0.2;
        maskSp.addImage(mask);
        maskGroup.add(maskSp);
    }
}

function sanitizerF(){
    if(frameCount%50 === 0){
        sanitizerSp = createSprite(Math.round(random(displayWidth*8,displayWidth/2)),Math.round(random(100,650)),10,10)
        sanitizerSp.scale = 0.2;
        sanitizerSp.addImage(sanitizer);
        sanitizerGroup.add(sanitizerSp);
    }
}

function dettolF(){
    if(frameCount%50 === 0){
        dettolSp = createSprite(Math.round(random(displayWidth*8,displayWidth/2)),Math.round(random(100,650)),10,10)
        dettolSp.scale = 1/2;
        dettolSp.addImage(dettol);
        dettolGroup.add(dettolSp);
    }
}

function soapF(){
    if(frameCount%50 === 0){
        soapSp = createSprite(Math.round(random(displayWidth*8,displayWidth/2)),Math.round(random(100,650)),10,10)
        soapSp.scale = 1/2;
        soapSp.addImage(soap);
        soapGroup.add(soapSp);
    }
}