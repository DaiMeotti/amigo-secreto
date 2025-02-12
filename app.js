//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    nome = document.querySelector('input').value;   
    
    if (nome === null || nome === undefined || nome === '') {
        alert("Por favor, digite um nome");
    } else {
        listaAmigos.push(nome);
        limparCampo();
        return console.log(listaAmigos);
        
    }

    
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = ' ';
}