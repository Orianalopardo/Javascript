function verificarEdad() {
    let edad = 0;

    while (edad < 18) {
    edad = parseInt(prompt("Ingrese su edad:"));
    
    if(isNaN(edad)) {
    console.log("Por favor, ingrese un numero valido");
    edad = 0;
    continue;
    
    }
    if (edad < 18) {
        console.log("Debe ser mayor de edad para ingresar.");
    }
    }

    console.log("Bienvenido/a. Puede ingresar.");
}
    verificarEdad();

