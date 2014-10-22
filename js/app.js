var barraAltura,
    barraLargura,
    jogadorPosicaoX,
    velocidadeJogador,
    bolaDiametro,
    bolaPosX,
    bolaPosY,
    velocidadeBola;

function inicializar(){
  bolaDiamentro = 10;
  bolaPosX = canvas.width / 2;
  bolaPosY = 0;
  velocidadeBola = 10;

  barraAltura = 15;
  barraLargura = 90;


  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  jogadorPosicaoX = (canvas.width - barraLargura)/2;
  velocidadeJogador = 20;

  context.fillRect(
          jogadorPosicaoX,
          canvas.height - barraAltura,
          barraLargura,
          barraAltura
  );

  document.addEventListener('keydown', keyDown);

  setInterval(gameLoop, 30);
}

function keyDown(e){
  if(e.keyCode == 37 && jogadorPosicaoX > 0){
    jogadorPosicaoX -= velocidadeJogador;
  }else if(e.keyCode == 39 && jogadorPosicaoX < (canvas.width - barraLargura)){
    jogadorPosicaoX += velocidadeJogador;
  }
  context.fillRect(
          jogadorPosicaoX,
          canvas.height - barraAltura,
          barraLargura,
          barraAltura
  );

}

function gameLoop(){
  context.clearRect(0,0, canvas.width, canvas.height);
  context.fillRect(jogadorPosicaoX, canvas.height - barraAltura, barraLargura, barraAltura);
}
