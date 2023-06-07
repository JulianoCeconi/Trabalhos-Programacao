let inputNumero1 = document.querySelector("#inputNumero1");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularFerraduras(){
    let vlr1 = Number(inputNumero1.value);

    let multiplica = vlr1 * 4;

    h2Resultado.innerHTML = "Quantidade de ferraduras necess&aacute;rias: "+multiplica;
}

btCalcular.onclick = function(){
    calcularFerraduras();
}