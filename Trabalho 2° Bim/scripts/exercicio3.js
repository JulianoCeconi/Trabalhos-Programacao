let inputNumero1 = document.querySelector("#inputNumero1");
let inputNumero2 = document.querySelector("#inputNumero2");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularValor(){
    let vlr1 = Number(inputNumero1.value);
    let vlr2 = Number(inputNumero2.value);

    let paes = vlr1 * 0.12;
    let broas = vlr2 * 1.50;

    let soma = paes + broas;

    let poupanca = soma * (10/100);

    h2Resultado.innerHTML = "Vendas de P&atilde;es e Broas (R$) : "+soma +"<br>"+
                            "Quantia para guardar na poupança (R$) : "+poupanca;
}

btCalcular.onclick = function(){
    calcularValor();
}