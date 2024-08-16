let primerDato = null;
let segundoDato = null;
let datoSimbolo = false; // Modo decimal
let datoOperacion = null;
let historial = []; // Array para almacenar el historial

function agregarNumero(dato) {
    const display = document.getElementById('displayText');

    if (datoOperacion == null) { // Primer número
        if (primerDato == null) {
            primerDato = dato.toString();
        } else if (datoSimbolo) { // Modo decimal
            primerDato += '.' + dato.toString(); // Cambiado ',' por '.'
            datoSimbolo = false; // Resetear para aceptar nuevos números
        } else {
            primerDato += dato.toString();
        }
        console.log("Primer Dato:", primerDato);
        display.value = primerDato.replace('.', ','); // Mostrar con coma en el display
    } else { // Segundo número
        if (segundoDato == null) {
            segundoDato = dato.toString();
        } else if (datoSimbolo) { // Modo decimal
            segundoDato += '.' + dato.toString(); // Cambiado ',' por '.'
            datoSimbolo = false; // Resetear para aceptar nuevos números
        } else {
            segundoDato += dato.toString();
        }
        console.log("Segundo Dato:", segundoDato);
        display.value = primerDato.replace('.', ',') + " " + datoOperacion + " " + segundoDato.replace('.', ','); // Mostrar con coma en el display
    }
    
    // Desactivar botones de operación si se ha ingresado el segundo dato
    if (segundoDato !== null) {
        desactivarOperaciones();
    }
}

function agregarSimbolo(dato) {
    const display = document.getElementById('displayText');
    if (dato === ',') {
        datoSimbolo = true; // Activamos el modo decimal
        console.log("Modo Decimal Activado");
        display.value += ','; // Mantener coma visualmente en el display
    }
}

function agregarOperacion(dato) {
    const display = document.getElementById('displayText');

    // Si ya se ha ingresado un primer dato, y no se ha ingresado una operación antes
    if (primerDato !== null && datoOperacion === null) {
        datoOperacion = dato;
        console.log("Operación seleccionada:", datoOperacion);
        display.value = primerDato.replace('.', ',') + " " + datoOperacion;
    }
}

function igual(dato) {
    const display = document.getElementById('displayText');

    // Convertimos comas a puntos para los cálculos
    let num1 = parseFloat(primerDato.replace(',', '.'));
    let num2 = parseFloat(segundoDato.replace(',', '.'));

    let resultado = null;

    if (datoOperacion == "+") {
        resultado = sumar(num1, num2);
    } else if (datoOperacion == "-") {
        resultado = restar(num1, num2);
    } else if (datoOperacion == "*") {
        resultado = multiplicar(num1, num2);
    } else if (datoOperacion == "/") {
        if (num2 !== 0) {
            resultado = dividir(num1, num2);
        } else {
            display.value = "No se puede dividir por 0";
        }
    }

    console.log("Resultado:", resultado);
    display.value = resultado.toString().replace('.', ','); // Mostramos el resultado con coma en el display

    // Agregar operación al inicio del historial
    historial.unshift(`${primerDato.replace('.', ',')} ${datoOperacion} ${segundoDato.replace('.', ',')} = ${resultado.toString().replace('.', ',')}`);
    actualizarHistorial();

    // Resetear datos para la siguiente operación
    primerDato = null;
    segundoDato = null;
    datoSimbolo = false;
    datoOperacion = null;

    // Volver a activar botones de operación después de presionar igual
    activarOperaciones();

    return resultado;
}

function borrar(dato) {
    const display = document.getElementById('displayText');

    primerDato = null;
    segundoDato = null;
    datoSimbolo = false;
    datoOperacion = null;

    display.value = "";

    // Volver a activar botones de operación después de borrar
    activarOperaciones();

    console.log("Datos Borrados");
}

function limpiarHistorial() {
    historial = [];
    actualizarHistorial();
}

function actualizarHistorial() {
    const historialLista = document.getElementById('historialLista');
    historialLista.innerHTML = ''; // Limpiar el historial actual

    // Agregar cada entrada del historial a la lista
    historial.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        historialLista.appendChild(li);
    });
}

function cambiarModo() {
    document.body.classList.toggle('modo-oscuro');
    console.log("Modo cambiado");
}

function desactivarOperaciones() {
    const botonesOperacion = document.querySelectorAll('.div5 .operacion');
    botonesOperacion.forEach(btn => {
        btn.classList.add('desactivado');
        btn.disabled = true;
    });
}

function activarOperaciones() {
    const botonesOperacion = document.querySelectorAll('.div5 .operacion');
    botonesOperacion.forEach(btn => {
        btn.classList.remove('desactivado');
        btn.disabled = false;
    });
}
