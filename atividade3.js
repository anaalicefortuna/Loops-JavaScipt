let anos = 0;
let maisVlhs = 0;
let maisNv = 0;


while (anos >= 0) {
    anos = parseInt (prompt(`Digite sua idade : `));
    
    if (anos < 21){
         maisNv++
         document.write(`O total de pessoas com menos de 21 anos é de: ${maisNv}`)
         document.write('<br>')
        
    } else if (anos > 50) {
       maisVlhs++
       document.write(`O total de pessoas com mais de  50 anos é de: ${maisVlhs}`)
    }
        
}




    