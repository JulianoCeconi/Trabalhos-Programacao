let inputNumero1 = document.querySelector("#inputNumero1");
let inputNumero2 = document.querySelector("#inputNumero2");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularArea(){
    let vlr1 = Number(inputNumero1.value);
    let vlr2 = Number(inputNumero2.value);

    let multiplica = vlr1 * vlr2;

    h2Resultado.innerHTML = "&Aacute;rea do Terreno (metros): "+multiplica;

}

btCalcular.onclick = function(){
    calcularArea();
}