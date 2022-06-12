

let añoActual = 2022;
let edad;
let error = false;

do{
    if(error) {
        edad = Number(prompt("Que edad tienes?\nDebes ingresar un número."));
    } else {
        edad = Number(prompt("Que edad tienes?"));
    }
    error = true;   
} while(isNaN(edad));

if(edad==0){
    alert("Todo lo que podía fallar falló");
} else if(!isNaN(edad)){
    alert(`Naciste en el año ${añoActual-edad}`);
    console.log(`Naciste en el año ${añoActual-edad}`);

    for (i = 0; i < 20; i++) {
        añoActual += 1;
        edad += 1;
        console.log(`En el año ${añoActual} tendrás ${edad} años.`);
    }
}