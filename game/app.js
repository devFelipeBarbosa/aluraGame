// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';

// let aba = document.querySelector('title');
// aba.innerHTML = 'JS Game - Secreto';
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute==numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}