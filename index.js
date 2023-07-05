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

    console.log("Bienvenido/a, " + nombre + ". Puede ingresar.");
}

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

    function buscarPorNombre(nombre) {
    return personas.find(persona => persona.nombre === nombre);
    }

    function buscarPorEdad(edad) {
    return personas.filter(persona => persona.edad === edad);
    }

    function filtrarMayoresEdad() {
    return personas.filter(persona => persona.edad >= 18);
    }
    
    function filtrarMenoresEdad() {
    return personas.filter(persona => persona.edad < 18);
}

agregarPersonas();

    let nombreBuscado = prompt("Ingrese el nombre de la persona que desea buscar:");
    let personaEncontrada = buscarPorNombre(nombreBuscado);
    if (personaEncontrada) {
    console.log("Persona encontrada:");
    console.log(personaEncontrada);
    } else {
    console.log("No se encontró ninguna persona con ese nombre.");
    }

    let edadBuscada = parseInt(prompt("Ingrese la edad de las personas que desea buscar:"));
    let personasEncontradas = buscarPorEdad(edadBuscada);
    if (personasEncontradas.length > 0) {
    console.log("Personas encontradas:");
    console.log(personasEncontradas);
    } else {
    console.log("No se encontraron personas con esa edad.");
    }

    console.log("Personas mayores de edad:");
    console.log(filtrarMayoresEdad());

    console.log("Personas menores de edad:");
    console.log(filtrarMenoresEdad)


