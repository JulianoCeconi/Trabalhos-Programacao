let inputSalario = document.querySelector("#inputSalario");
let inputCargo = document.querySelector("#inputCargo");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function aumentoSalario(){
    let salario = Number(inputSalario.value);
    let cargo = String(inputCargo.value);

    let porcentagem10 = salario * (10/100);
    let porcentagem20 = salario * (20/100);
    let porcentagem30 = salario * (30/100);
    let porcentagem40 = salario * (40/100);

    if(cargo = "Gerente"){
        h2Resultado.innerHTML = "O aumento do gerente &eacute; " +porcentagem10;
    }else if(cargo = "Engenheiro"){
        h2Resultado.innerHTML = "O aumento do engenheiro &eacute; " +porcentagem20;
    }else if(cargo = "Tecnico"){
        h2Resultado.innerHTML = "O aumento do T&eacute;cnico: " + porcentagem40; 
    }else(cargo)
}

btCalcular.onclick = function(){
    aumentoSalario();
}