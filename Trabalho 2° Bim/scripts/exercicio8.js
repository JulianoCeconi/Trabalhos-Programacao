let inputCamiseta1 = document.querySelector("#inputCamiseta1");
let inputCamiseta2 = document.querySelector("#inputCamiseta2");
let inputCamiseta3 = document.querySelector("#inputCamiseta3");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularCamisetas(){
    let vlr1 = Number(inputCamiseta1.value);
    let vlr2 = Number(inputCamiseta2.value);
    let vlr3 = Number(inputCamiseta3.value);

    let pequenas = vlr1 * 10;
    let medias = vlr2 * 12;
    let grandes = vlr3 * 15;

    let total = pequenas + medias + grandes;

    h2Resultado.innerHTML = "Camisetas pequenas: R$ " +pequenas +"<br>"+
                            "Camisetas m&eacute;dias: R$ " +medias +"<br>"+
                            "Camisetas grandes: R$ " +grandes +"<br>"+
                            "Total do pedido: R$ " +total;
}

btCalcular.onclick = function(){
    calcularCamisetas();
}