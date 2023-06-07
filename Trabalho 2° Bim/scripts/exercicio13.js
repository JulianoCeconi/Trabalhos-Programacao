let inputNumero = document.querySelector("#inputNumero");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaArea(){
    let vlr1 = Number(inputNumero.value);

    let raio = vlr1 / 2;

    let raio2 = raio * raio;

    let area = 3.14 * raio2;

    h2Resultado.innerHTML = "Area da Pizza: " +area+" cm";
}

btCalcular.onclick = function(){
    calculaArea();
}