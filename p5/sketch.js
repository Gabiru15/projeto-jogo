var playerPrincipal
var chao
var paredeEsquerda
var playerParado
var playerMovendo
var tronco
var grupodetronco
var imagemTronco
var valorVida = 260
var valorStamina = 220
var valorFuria = 170
var imagemFundo
var chaoImagem





//função para pre-carregar as imagens dos sprites
function preload(){
playerParado = loadImage ('assets/knightparado.png')
playerMovendo = loadImage ('assets/knightmovendo.png')
imagemTronco = loadImage('assets/pinheirofundo.png')
imagemFundo = loadImage('assets/background.png')
chaoImagem = loadImage('assets/chao.png')
}




function setup(){
  //uma tela gigante
  createCanvas(1920,1010);
  playerPrincipal = createSprite(100,height-50,50,80)

  playerPrincipal.addImage("parado", playerParado);
  playerPrincipal.addImage("movendo",playerMovendo);
  playerPrincipal.changeImage ("parado");

  chao = createSprite(width/2,height,width,50);
  chao.addImage(chaoImagem);

  paredeEsquerda = createSprite (0,height/2,8,height)

  playerPrincipal.debug = true
  playerPrincipal.setCollider ('rectangle',0,0,60,70)

  grupodetronco = new Group();
  criartronco(grupodetronco, 5)

  
}


//desenha as coisas na tela e as lógicas em loop
function draw(){
 background("black");
 image(imagemFundo, 0,0,width, height+60)
 controlarPersonagem();
 drawSprites();

 playerPrincipal.velocityY +=0.3;
 playerPrincipal.collide(chao)
 playerPrincipal.collide(paredeEsquerda)

 console.log(playerPrincipal.x)


 vida();
 stamina();
 furia();
}
  


function controlarPersonagem(){
  if (keyIsDown(68)) {
    playerPrincipal.x += 10;
    playerPrincipal.changeImage("movendo");
    playerPrincipal.mirrorX(+1);
  }
  if (keyIsDown(65)) {
    playerPrincipal.x -= 10
    playerPrincipal.changeImage("movendo")
    playerPrincipal.mirrorX(-1);
  }
  if (keyIsDown(32)&& playerPrincipal.y > 870) {
    playerPrincipal.y -= 15  

  }

 // if(valorStamina => 0){
    if (keyIsDown(68) && keyIsDown (16) ) {
      playerPrincipal.x += 10.1
      valorStamina -= 2.6
    }
    if (keyIsDown(65) && keyIsDown (16) ) {
      playerPrincipal.x -= 10.1
      valorStamina -= 2.6
    }
 // }
}


function keyReleased() {
  if(keyCode === 65){
    playerPrincipal.changeImage("parado");
    
  }

if(keyCode === 68){
    playerPrincipal.changeImage("parado");
  }

  if(keyCode === 32){
    playerPrincipal.changeImage("parado");
  }
}



  function criartronco(spriteGroup, numberOfSprites ) {
    posicoes = [560, 860, 1160, 1460, 1760]
    for (var i = 0; i < numberOfSprites; i++) {
      var x;
      //x = random(365,2000);
      x = posicoes[i];
      var sprite = createSprite(x, height-182.5, 50,100);
      sprite.addImage (imagemTronco)
      playerPrincipal.depth = sprite.depth;
      playerPrincipal.depth +=1;
      spriteGroup.add(sprite);
      sprite.scale = 2.5
      
    }
  }

  function vida(){
    fill("white");
    rect(20, 20, 260 , 20);
    fill("green");
    rect(20, 20, valorVida , 20);
  }

  function furia(){
    fill("white");
    rect(20, 80, 170 , 20);
    fill("red");
    rect(20, 80, valorFuria , 20);
  }

  function stamina(){
    fill("white");
    rect(20, 50, 220 , 20);
    fill("blue");
    rect(20, 50, valorStamina , 20);
  }


