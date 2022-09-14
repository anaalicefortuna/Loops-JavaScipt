let numero = 0
let soma = 0

let Number = numero = parseInt(prompt(`Digita um número:  `));


do {
 numero = parseInt(prompt('Digite um número:  '));

    if (numero > 0){
        soma += numero 
    }
} while ( numero != 0)

document.write(`A soma dos valores é ${soma}`)