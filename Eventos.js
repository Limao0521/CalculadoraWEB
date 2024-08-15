primerDato = null;
segundoDato = null;
datoSimbolo = null;
datoOperacion = null;

const display = document.getElementById('displayText');

function agregarNumero(dato) {
    const display = document.getElementById('displayText');
    display.value = verficarNumero(dato);
}

function verficarNumero(dato) {
    let datoString = dato.toString();
    let datoControl = verficarSimbolo(dato);
    let a = 4;

    if (datoControl == null) {

        if (datoOperacion == null) {

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
        else if (datoOperacion != null && dato !== a ) {
            if (segundoDato == null) {
                segundoDato = datoString;
                console.log(segundoDato);
                return segundoDato;
            } else {
                segundoDato = segundoDato + datoString;
                console.log(segundoDato);
                return segundoDato;
            }
        }
    } 
    else {
        if (datoOperacion == null) {
            
        }
        else if (datoOperacion != null) {
            
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
        if (dato == null) {
            return null;
        } else {
            return datoSimbolo;
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

