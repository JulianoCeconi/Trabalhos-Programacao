let inputNumero = document.querySelector("#inputNumero");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaPreco(){
    let vlr1 = Number(inputNumero.value);
    let precoKilo = 12.00;

    let preco = vlr1 * precoKilo;

    h2Resultado.textContent = "Valor a pagar R$ " +preco;
}

btCalcular.onclick = function(){
    calculaPreco();
}