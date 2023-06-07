let inputNome = document.querySelector("#inputNome");
let inputNumero1 = document.querySelector("#inputNumero1");
let btCalcular= document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularDias(){
    let nome = String(inputNome.value);
    let idade = Number(inputNumero1.value);
    let dias = idade * 365;

    h2Resultado.textContent = nome + " ja viveu " +dias +" dias. ";
}

btCalcular.onclick = function(){
    calcularDias();
}