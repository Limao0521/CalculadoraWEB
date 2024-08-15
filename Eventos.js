primerDato = null;
segundoDato = null;
datoSimbolo = null;
datoOperacion = null;

const display = document.getElementById('displayText');

function agregarNumero(dato) {
    const display = document.getElementById('displayText');
    parseFloat(display.value = verficarNumero(dato));
}

function verficarNumero(dato) {
    let datoString = dato.toString();
    let datoControl = verficarSimbolo(dato);
    let a = parseInt(datoString) ;

    if (datoOperacion == null) {
        if (datoControl == false) {
            if (primerDato == null) {
                primerDato = datoString;
                console.log(primerDato);
                return primerDato;
            }
            else {
                primerDato = primerDato + datoString;
                console.log(primerDato);
                return primerDato;
            }
        } 
        // terminar la logica para las comas
        else if (datoControl == true && datoString !== a) { 
             
            }
        }
    
    else if (datoOperacion != null && datoString !== a) {
        if (datoControl == false) {    
            if (segundoDato == null) {
                segundoDato = datoString;
                console.log(segundoDato);
                return segundoDato;
            } 
            else {
                segundoDato = segundoDato + datoString;
                console.log(segundoDato);
                return segundoDato;
            }
        }
        // terminar la logica para las comas
        else if (datoControl == true && datoString !== a) { 
            
        }
    }
}


function agregarSimbolo(dato) {
    const display = document.getElementById('displayText');

    display.value = dato;
    console.log(dato);

    datoSimbolo = dato;
}

function verficarSimbolo(dato) {
    if (datoSimbolo == null) {
        return false;
    } else if (datoSimbolo == dato) {
        return true;
    }
}

function agregarSimbolo(dato) {
    const display = document.getElementById('displayText');

    display.value = dato;
    console.log(dato);

    datoSimbolo = dato;
}


//cambiar los metodos de operacion para lpos que no son correctos
function agregarOperacion(dato) {
    if (dato == '+') {
        datoOperacion = '+';
    }
    else if (dato == '-') {
        datoOperacion = '-';
    }
    else if (dato == '*') {
        datoOperacion = '*';
    }
    else if (dato == '/') {
        datoOperacion = '/';
    }
}

