const prompt = require ('prompt-sync')();

let i = 0;
let qtdsCalmos = 0;
let qtdsMNervosos =0;
let qtdsHAgressivos =0;
let qtdsOCalmos18 = 0;
let qtdsNervosos40 =40;

while (i< 150) {
const idadeText =prompt('Digite a idade');
const idade = Number(idadeText);
document.write('Escolha o sexo entre \n\n');
document.write('1 - homens\n');
document.write('2- mulheres\n');
document.write('3- outros\n');
const sexoText = prompt('Escolha a opção do sexo');
document.write('1-calmo\n');
document.write('2-nervoso\n');
document.write('3-agressivo\n');
const  humorText  =  prompt ( 'Escolher a opção do humor: ' ) ;
const  humor  =  Number (humorText) ;

if  ( humor  ==  1 )  {
    qtdsCalmos ++ ;
  }

  if  ( sexo  ==  2  &&  humor  ==  2 )  {
    qtdsMNervosos ++ ;
  }

  if  ( sexo  ==  1  &&  humor  ==  3 )  {
    qtdHAgressivos ++ ;
  }

  if  ( sexo  ==  3  &&  humor  ==  1 )  {
    qtdsCalmos ++ ;
  }

  if  ( humor  ==  2  &&  idade  >  40 )  {
    qtdsNervosos40 ++ ;
  }

  if  ( humor  ==  1  &&  idade  <  18 )  {
    qtdsOCalmos18 ++ ;
  }

  e ++ ;
}