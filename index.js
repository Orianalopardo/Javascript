class Persona {
    constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    }
}

    let personas = [];
    let nombresMayoresEdad = [];
    let edadesMenoresEdad = [];
    
    function verificarEdad() {
    let edad = 0;
    
    while (edad < 18) {
    edad = parseInt(prompt("Ingrese su edad:"));
    if (isNaN(edad)) {
        console.log("Por favor, ingrese un número válido");
        edad = 0;
        continue;
}

    if (edad < 18) {
        console.log("Debe ser mayor de edad para ingresar.");
        edadesMenoresEdad.push(edad);
    }
    }

    let nombre = prompt("Ingrese su nombre:");
    let persona = new Persona(nombre, edad);
    personas.push(persona);
    if (edad >= 18) {
    nombresMayoresEdad.push(nombre);
    }

    console.log("Bienvenido/a, " + nombre + ". Puede ingresar.");}

verificarEdad();

  // Agregar más personas

function agregarPersonas() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de personas que desea agregar:"));

    for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Ingrese el nombre de la persona:");
    let edad = parseInt(prompt("Ingrese la edad de la persona:"));

    let persona = new Persona(nombre, edad);
    personas.push(persona);

    if (edad >= 18) {
        nombresMayoresEdad.push(nombre);
    } else {
        edadesMenoresEdad.push(edad);
    }
    }

    console.log("Personas agregadas:");
    console.log(personas);
    console.log("Nombres de las personas mayores de edad:");
    console.log(nombresMayoresEdad);
    console.log("Edades de las personas menores de edad:");
    console.log(edadesMenoresEdad);
}
agregarPersonas();

