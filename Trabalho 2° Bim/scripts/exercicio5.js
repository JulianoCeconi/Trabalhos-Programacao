let inputNumero1 = document.querySelector("#inputNumero1");
let inputNumero2= document.querySelector("#inputNumero2");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularLitros(){
    let vlr1 = Number(inputNumero1.value);
    let vlr2 = Number(inputNumero2.value);

    let litros = (vlr2 / vlr1);

    h2Resultado.innerHTML = "Voc&ecirc; consegue colocar " +litros.toFixed(1) +" litros de gasolina no tanque. ";
}

btCalcular.onclick = function(){
    calcularLitros();
}