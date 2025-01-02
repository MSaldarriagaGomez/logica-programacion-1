function solicitarTresNumeros() {
    let numeros = []; // Inicializar el arreglo vacío

    for (let i = 0; i < 3; i++) {
        let numero;
        let valido = false; //verificar si la entrada es válida
    
        // Solicitar y validar el número
        while (!valido) {
            numero = prompt(`Ingresa el número ${i + 1}:`);
    
            if (numero === null) {
                console.log("Operación cancelada por el usuario.");
                return; 
            }
    
            // Validar que la entrada no sea NaN ni esté vacía
            if (!isNaN(numero) && numero.trim() !== "") {
                let numeroConvertido = Number(numero);
    
                // Verificar si el número ya está en el arreglo
                if (numeros.includes(numeroConvertido)) {
                    alert("El número ya ha sido ingresado. Por favor, ingresa un número diferente.");
                } else {
                    numeros.push(numeroConvertido);
                    valido = true; // Salir del bucle
                }
            } else {
                alert("Entrada inválida. Por favor, ingresa un número válido.");
            }
        }
    }

    // Mostrar los números ingresados en el DOM sin sobrescribir el contenido
    const numerosElement = document.getElementById('numeros');
    numerosElement.innerHTML = `<p>Números ingresados: ${numeros.join(", ")}</p>`;
    
    analizarNumeros(numeros); // Llamar a la función para analizar los números
}

function analizarNumeros(numeros) {
    numeros.sort((a, b) => a - b); // Orden ascendente
    
    let menor = numeros[0];
    let mayor = numeros[numeros.length - 1];
    let medio = numeros[Math.floor(numeros.length / 2)]; // Índice del número del medio, el floor quita el decimal

    // Mostrar los resultados sin sobrescribir el contenido
    const resultadosElement = document.getElementById('resultados');
    resultadosElement.innerHTML = `
      <p>Números ordenados: ${numeros.join(", ")}</p>
      <p>El número menor es: ${menor}</p>
      <p>El número del medio es: ${medio}</p>
      <p>El número mayor es: ${mayor}</p>
    `;
}

solicitarTresNumeros();
