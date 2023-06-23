let contador = 0;

function init(){
  let bernardo = document.getElementById('bernardo');
  let enzo = document.getElementById('enzo');
  let gabrielB = document.getElementById('gabrielB');
  let luana = document.getElementById('luana');
  let mathias = document.getElementById('mathias');
  let leticia = document.getElementById('leticia');
  let kevin = document.getElementById('kevin');
  let joao = document.getElementById('joao');

  let daniel = document.getElementById('daniel');
  let gabrielL = document.getElementById('gabrielL');  
  let kaue = document.getElementById('kaue');
  let karol = document.getElementById('karol');
  let joaoS = document.getElementById('joaoS');
  let yasmin = document.getElementById('yasmin');
  let stefany = document.getElementById('stefany');
  let victor = document.getElementById('victor');
  let nicolas = document.getElementById('nicolas');



  
  alert('Dica: Não sou muito bom com o sudoku, provévelmente uso minoxidil e sou nerd de lol')
  
  
  bernardo.addEventListener("targetFound", event => {
      if(contador == 0){
          alert('Você acertou!!! Era o nosso famosa calvo palmerense, Bernardo');
          alert('Proxima pessoa!!');
          alert('Dica: Como goleiro eu sou uma ótima pessoa, bolas foras é minha melhor especialidade');
      contador++;
      }else{
       errou();
      }
  });

  enzo.addEventListener("targetFound", event => {
      if(contador == 1){
        alert('Isso mesmo, nosso querido último romântico(literalmente) o homi da bicicleta elétrica!');
        alert('Próxima Pessoa!!')
        alert('Dica: Ele já tem um lugar no céu reservado!')
      contador = 2;
      }else{
        errou();
      }         
  });

 gabrielB.addEventListener("targetFound", event => {
      if(contador == 2){
          alert('Você acertou!!! Era o nosso famoso Big Mind, seu lugar no céu já está garantido por aturar Winter por tanto tempo!');
          alert('Próxima Pessoa!!')
          alert('Dica: Se lerdisse fosse um prêmio, eu já tinha alguns ')
      contador++;
      }else{
        errou();
      }         
  });

  leticia.addEventListener("targetFound", event => {
      if(contador == 3){
          alert('Você acertou!!! Era a nossa lerdinha, a Letícia ');
          alert('Próxima Pessoa!!')
          alert('Dica: A pessoa que da mais bolas foras no mundo')
      contador++;
      }else{
       errou();
      }         
    });

  kevin.addEventListener("targetFound", event => {
      if(contador == 4){
          alert('Você acertou!!! Era o cara mais lindo de Marte, Kevinho');
          alert('Próxima Pessoa!!')
          alert('Dica: Detesto pobres! ')
          contador++;
      }else{
        errou();
      }         
  });
  
  luana.addEventListener("targetFound", event => {
      if(contador == 5){
          alert('Você acertou!!! Era a nossa odeia pobres, Luaninha');
          alert('Próxima Pessoa!!')
          alert('Dica: Seria um ótimo atleta!')
      contador++;
      }else{
       errou();
      }         
  });

  mathias.addEventListener("targetFound", event => {
      if(contador == 6){
          alert('Você acertou!!! Era o melhor jogador das paralimpíadas, Mathias');
          alert('Próxima Pessoa!!')
          alert('Dica: Ando sempre com minha pequena amiguinha ')
      contador++;
      }else{
        errou();
      }         
  });

  joao.addEventListener("targetFound", event => {
      if(contador == 7){
          alert('Você acertou!!! Era o nosso Herdeiro João Winter!');
          alert('Parabéns, você conseguiu completar nossa pequeno joguinho!!! tome um biscoito 🍪 !!!')
      contador++;
      }else{
        errou();
      }         
  });
}
daniel.addEventListener("targetFound", event => {
  errou();
});
nicolas.addEventListener("targetFound", event => {
  errou();
});
gabrielL.addEventListener("targetFound", event => {
  errou();
});
kaue.addEventListener("targetFound", event => {
  errou();
});
karol.addEventListener("targetFound", event => {
  errou();
});
joaoS.addEventListener("targetFound", event => {
  errou();
});
yasmin.addEventListener("targetFound", event => {
  errou();
});
stefany.addEventListener("targetFound", event => {
  errou();
});
victor.addEventListener("targetFound", event => {
  errou();
});


function errou (){
  if(contador == 0){
    alert('Não é essa pessoa, tente novamente!!!');
    alert('Nova dica: Uso óculos')
  }else if(contador == 1){
    alert('Não é essa pessoa, tente novamente!!!');
    alert('Nova dica: Não posso abrir a boca perto do Jhon Ribs');
  }else if(contador == 2){
    alert('Não é essa pessoa, tente novamente!!!');
    alert('Nova Dica: O nerd mais zueiro possível');
  }else if(contador == 3){
    alert('Não é essa pessoa, tente novamente!!!');
    alert('Nova dica: Hoje tem acadzinha!');
  }else if(contador == 4){
    alert('Não é essa pessoa, tente novamente!!!');
    alert('Nova dica: Nova dica: O maior imã de carros e provavelmente o que irá de Americanas primeiro se continuar andar de bike ');
  }else if(contador == 5){
    alert('Não é essa pessoa, tente novamente!!!');
    alert('Nova dica: Verde e Marrom andam lado a lado ');
  }else if(contador == 6){
    alert('Não é essa pessoa, tente novamente!!!');
    alert('Nova dica: Não tenho filtro algúm ');
  }else if(contador == 7){
    alert('Não é essa pessoa, tente novamente!!!');
    alert('Nova dica: Calado é um poeta ');
  }
} 
 
init();