let numeros = 0;
let media = 0;
let qt = 0;

   numeros  = parseInt(prompt('Digite um numero do teclado(exceto 0): '));
do{
    numeros = parseInt(prompt(`Digite um numero do teclado (exceto 0):  `));
    if (numeros % 3 == 0) {
        media += media + numeros;
        qt++
        
    }
} while (numeros != 0)
document.write(`A média dos valores foi: ${media/qt}`)