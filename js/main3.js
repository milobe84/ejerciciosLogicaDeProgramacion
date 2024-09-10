

// FUNCIONES

function fsaludo() {
    return('hola');
};

function fsaludo2() {
    console.log('hola')
};

function fsaludo3(nombre) {
    return('hola ' + nombre)
};

function fsaludo4(nombre, edad) {
    return("hola soy " + nombre + " y tengo " + edad + " años")
    
};

function fsaludo5(nombre, anioDeNacimiento) {

    function calcularEdad(anio) {
        return(2024 - anio)
    }
    return(("hola soy " + nombre + " y tengo " + calcularEdad(anioDeNacimiento) + " años").toUpperCase())
    
}



function numeros(texto1, texto2) {
    let acumulador = 0;
    for (let i = 1; i <= 100; i++) {

        if(i %3 ==0 && i%5 ==0){
            console.log(texto1 + texto2)
        }else {
            if(i%3 ==0){
                console.log(texto1)
            }else {
                if(i%5 ==0){
                    console.log(texto2)
                }
                else{
                    console.log(i);
                    acumulador = acumulador + 1;
                }
            }
        }
    }
    return(acumulador);
};



//console.log(fsaludo());
fsaludo2();
//console.log(fsaludo3('Miryan'));
//console.log(fsaludo4("Miryan", 10));
//console.log(fsaludo5("Miryan", 2014))
//console.log(numeros("texto1", "texto2"))

