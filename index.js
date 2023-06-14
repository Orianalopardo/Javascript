    let edad = 0;

    while (edad < 18) {
    edad = parseInt(prompt("Ingrese su edad:"));

    if (isNaN(edad)) {
    console.log("Por favor, ingrese un número válido.");
    continue;
}

    if (edad < 18) {
    console.log("Debe ser mayor de edad para ingresar.");
}
}
console.log("Bienvenido/a. Puede ingresar.");

/*crear un algoritmo utilizando un ciclo*/

    let repetir = parseInt(prompt('Ingrese la cantidad de veces que se repite hola: '))
    for (let index = 1; index <= repetir; index++) {
        console.log('Hola')    
    }

    /*armar un simulador interactivo*/
    let cartTotal = 0;

    function addToCart(price) {
      cartTotal += price;
    
      const cartItemsElement = document.getElementById("cart-items");
      const cartItem = document.createElement("li");
      cartItem.innerText = "Producto $" + price;
      cartItemsElement.appendChild(cartItem);
    
      const cartTotalElement = document.getElementById("cart-total");
      cartTotalElement.innerText = "Total: $" + cartTotal;
    }