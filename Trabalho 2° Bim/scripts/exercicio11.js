let inputSalario = document.querySelector("#inputSalario");
let btSalario = document.querySelector("#btSalario");
let h2Resultado = document.querySelector("#h2Resultado");

function novoSalario(){
    let vlr1 = Number(inputSalario.value);

    let aumento = vlr1 + (vlr1 * (15/100));

    let imposto = aumento - (aumento * (8/100));


    h2Resultado.innerHTML = "Seu sal&aacute;rio era de: " +vlr1 +"<br>"+
                            "Sal&aacute;rio com aumento: " +aumento +"<br>"+
                            "Sal&aacute;rio final: " +imposto;
}

btSalario.onclick = function(){
    novoSalario();
}