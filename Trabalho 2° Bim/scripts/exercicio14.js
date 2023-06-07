let inputValor = document.querySelector("#inputValor");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularConta(){
    let vlr1 = Number(inputValor.value);

  let carlos = Math.floor(vlr1 / 3);
  let andre = Math.floor(vlr1 / 3);
  let felipe = vlr1 - (carlos + andre);

    h2Resultado.innerHTML = "Carlos vai pagar: R$ "+carlos.toFixed(2) +"<br>"+
                            "Andre vai pagar: R$ "+andre.toFixed(2) +"<br>"+
                            "Felipe vai pagar: R$ "+felipe.toFixed(2) +"<br>";
}

btCalcular.onclick = function(){
    calcularConta();
}