let inputNumero = document.querySelector("#inputNumero");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function lerNumero(){
    let vlr1 = Number(inputNumero.value);

    let centena = Math.floor(vlr1 / 100);
    let dezena = Math.floor((vlr1 % 100) / 10);
    let unidade = (vlr1 % 100) % 10;

    h2Resultado.innerHTML = "Centena: " +centena +"<br>"+
                            "Dezena: " +dezena +"<br>"+
                            "Unidade: " +unidade;
}

btCalcular.onclick = function(){
    lerNumero();
}