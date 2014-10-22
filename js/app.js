var barraAltura, barraLargura, jogadorPosicaoX, velocidadeJogador;
function inicializar(){
  velocidadeJogador = 20;
  barraAltura = 15;
  barraLargura = 90;

  
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  jogadorPosicaoX = (canvas.width - barraLargura)/2;

  context.fillRect(
          jogadorPosicaoX, 
          canvas.height - barraAltura, 
          barraLargura, 
          barraAltura
  );

  document.addEventListener('keydown', keyDown);
}

function keyDown(e){
  if(e.keyCode == 37){
    jogadorPosicaoX -= velocidadeJogador;
    console.log(jogadorPosicaoX);
  }else if(e.keyCode == 39){
    jogadorPosicaoX += velocidadeJogador;
  }
  context.fillRect(
          jogadorPosicaoX, 
          canvas.height - barraAltura, 
          barraLargura, 
          barraAltura
  );
  
}
