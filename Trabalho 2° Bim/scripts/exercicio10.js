let inputDias = document.querySelector("#inputDias");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaAnos(){
    let vlr1 = Number(inputDias.value);

    let anos =  Math.floor(vlr1 / 365);
    let meses = Math.floor((vlr1 % 365) / 30);
    let dias = (vlr1 % 365) % 30;
    

    h2Resultado.innerHTML = "Anos: " +anos +"<br>"+
                            "Meses: " +meses +"<br>"+
                            "Dias: " +dias +"<br>";
}   

btCalcular.onclick = function(){
    calculaAnos();
}