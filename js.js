const Btc=19900
const Eth=900
const Ada=1.33
let cripto
let flag=true
let dato
let cantidad=0
const planilla = [];
function total (a,b)
{   
    resultado= a*b;
};
alert("Bienvenido a Coindex")
do {
    flag=confirm("Usted tiene mas de 18 años?")
    if(flag==false)
    {
        alert("Usted no puede ingresar por ser menor de edad")
        break;
    }
    if(flag==true)
    {
        alert("Usted en Coindex puede comprar Bitcoin, ETH y Cardano")
    }
    dato=parseInt(prompt('Si quiere comprar bitcoin ingrese 1, si quiere comprar eth ingrese 2 y si quiere comprar cardano ingrese 3'));
    
    while(isNaN(dato))
    {
        alert("el dato ingresado es inválido")
            dato=parseInt(prompt('Por favor ingrese correctamente si desea compra 1 en bitcoin, 2 en ETH o 3 en cardano'));
    }
    while(dato<1||dato>3)
    {
        alert("Solo hay opciones en 1 para bitcoin, en 2 para eth y en 3 para cardano")
            dato=parseInt(prompt('Si quiere comprar bitcoin ingrese 1, si quiere comprar eth ingrese 2 y si quiere comprar cardano ingrese 3'));
            
    }
    planilla.push(dato)
    switch(dato)
    {
        case 1:
            cripto="btc"
            cantidad=parseInt(prompt('Cuanto bitcoin desea comprar?(valor entre 1 y 10)'))
            while(isNaN(cantidad))
            {
            alert("el dato ingresado es inválido")
            cantidad=parseInt(prompt('Ingrese un valor correcto de la cantidad de bitcoin a comprar(valor entre 1 y 10) precio por cada ETH US$ 19.900'))
            }
            while(cantidad<0||cantidad>10)
            {
                alert("Tiene que respetar la cantidad a comprar (entre 1 y 10)")
                cantidad=parseInt(prompt('Ingrese un valor correcto de la cantidad de bitcoin a comprar(valor entre 1 y 10)'))
            }
            total(Btc,cantidad);
            planilla.push(cantidad)
            break;
        case 2:
            cripto="eth"
            cantidad=parseInt(prompt('Cuanto ETH desea comprar?(valor entre 1 y 10) precio por cada ETH US$ 900'))
            while(isNaN(cantidad))
            {
            alert("el dato ingresado es inválido")
            cantidad=parseInt(prompt('Ingrese un valor correcto de la cantidad de ETH a comprar(valor entre 1 y 10)'))
            }
            while(cantidad<0||cantidad>10)
            {
                alert("Tiene que respetar la cantidad a comprar (entre 1 y 10)")
                cantidad=parseInt(prompt('Ingrese un valor correcto de la cantidad de ETH a comprar(valor entre 1 y 10)'))
            }
            total(Eth,cantidad);
            planilla.push(cantidad)
            break;
        case 3:
            cripto=ada
            cantidad=parseInt(prompt('Cuanto Cardano desea comprar?(valor entre 1 y 10)'))
            while(isNaN(cantidad))
            {
            alert("el dato ingresado es inválido")
            cantidad=parseInt(prompt('Ingrese un valor correcto de la cantidad de Cardano a comprar(valor entre 1 y 10) precio por cada ETH US$ 1.33'))
            }
            while(cantidad<0||cantidad>10)
            {
                alert("Tiene que respetar la cantidad a comprar (entre 1 y 10)")
                cantidad=parseInt(prompt('Ingrese un valor correcto de la cantidad de Cardano a comprar(valor entre 1 y 10)'))
            }
            total(Ada,cantidad);
            planilla.push(cantidad)
            break;
    }
    planilla.push(resultado)
    alert("la criptomoneda seleccionada es " +cripto);
    alert("la cantidad es de " +cantidad);
    alert("y el total es de " +resultado);
    alert("a continuacion se muestra la planilla con el numero seleccionado, la cantidad y el precio total"+planilla)
    alert("gracias por usar coindex")
} while (flag==false);


