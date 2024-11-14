// idade: 14 anos 
// Comédia: Desencanto
// Ação: Vingadores
//Animação: Desencanto

// idade: 10 anos
// Comédia: ICarly
//Ação: Jovens Titas
//animação: Hora de Aventura

// idade: 18 anos
// Comédia: American Pie
// Ação: Deadpool
//Animação: Rick and Morty

//idade: livre
// Comédia: Scooby Doo
// Ação :"Homem-Aranha: Através do Aranhaverso"
// Animação: Peppa Pig

let campoIdade;
let campoComedia;
let campoAcao;
let campoAnimacao;

function setup() {
  createCanvas(600, 400);
  createElement('h1', 'Recomendador de Filmes e Sereies');
  createSpan('Iforme sua idade:');
  campoIdade = createInput();
  campoComedia = createCheckbox('Comédia');
  campoAcao = createCheckbox('Ação')
  campoAnimacao = createCheckbox('Animaçaõ')
}

function draw() {
  background('blue');
  textAlign(CENTER, CENTER)
  textSize(40);
  fill('black');
  
  let idade = campoIdade.value();
  let comedia = campoComedia.checked()
  let acao = campoAcao.checked()
  let animacao = campoAnimacao.checked()
  
  let filme = geraRecomendacao(idade, comedia, acao, animacao);
  
  text(filme, width/2, height/2); 
}

function geraRecomendacao(idade, comedia, acao, animacao){
  if(idade >= 18){
    if(comedia){
      return 'American Pei'
    }else if(acao){
      return 'Deadpool'
    }else if(animacao){
      return ' Rick and Morty'
    }else {
      return 'Deadpool'
    } 
  } else if(idade >= 14){
     if(comedia){
      return 'Desencanto' 
     }else if(acao){
       return 'Vingadores'
     }else if(animacao){
       return 'desencanto'
     }
  }else  if(idade >= 10){
    if (comedia){
      return 'ICarly'
    }else if(acao){
      return 'Jovens Titas'
    }else if(animacao){
      return 'Hora de Aventura'
    }else {
      return 'Jovens Titas'
    }
  } else {
    if(comedia){
      return 'Scooby Doo'
    }else if(acao){
      return 'HOmen-Aranha: Através do Aranhaverso'
    }else if(animacao){
      return 'Peppa Pig'
    }else{
      return 'Homen-Aranha: Através do Aranhaverso'
    }
  }
}
