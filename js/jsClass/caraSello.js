let dinero, apuesta=0, cont=0, des, ale;

dinero=prompt("Cantidad general para apostar");

if(opc=true){
    apuesta=prompt("Ingrese la cantidad que desea apostar");
    ale=Math.round(Math.random()*2);
    des=parseInt(prompt("Ingrese su elección 1.Cara 2.Sello"));

    if(ale==1 && des==1){
        alert("La respuesta es cara, felicidades");
        dinero=parseInt(dinero)+parseInt(apuesta);
    }else if(ale==2 && des==2){
        alert("La respuesta es sello, felicidades");
        dinero=parseInt(dinero)+parseInt(apuesta);
    }else if(ale==1 && des==2){
        alert("La respuesta es cara, Game Over");
        dinero=parseInt(dinero)-parseInt(apuesta);
    }else if(ale==2 && des==1){
        alert("La respuesta es sello,Game Over");
        dinero=parseInt(dinero)-parseInt(apuesta);
    }else{

    }

    resp=confirm("Desea continuar?");
}else if(opc=false){
alert(`El resultado es ${dinero}`);

    alert(`El resultado es ${marranito}`);
    alert(`El valor acumulado es ${cont}`);
    apuesta=parseInt(apuesta)+parseInt(dinero);
    cont=parseInt(cont)+1;
}