let verificarNumero = parseFloat(prompt('Digite de um numero Real'));

if (verificarNumero<0){
  console.log('O número digitado é negativo')
}else if(verificarNumero=0){
  console.log('O número tem valor igual a Zero')
}else{
  console.log('O número digitado é positivo')
}

let verificaMes = parseInt(prompt('digite de 1 a 12 para os meses do ano'))
switch (verificaMes){
  case 1: 
  console.log('Você está no mês de Janeiro')
  break;
  case 2: 
  console.log('Você está no mês de fevereiro')
  break;
  case 3: 
  console.log('Você está no mês de Março')
  break;
  case 4: 
  console.log('Você está no mês de Abril')
  break;
  case 5: 
  console.log('Você está no mês de Maio')
  break;
  case 6: 
  console.log('Você está no mês de Junho')
  break;
  case 7: 
  console.log('Você está no mês de Julho')
  break;
  case 8: 
  console.log('Você está no mês de Agosto')
  break;
  case 9: 
  console.log('Você está no mês de Setembro')
  break;
  case 10: 
  console.log('Você está no mês de Outubro')
  break;
  case 11: 
  console.log('Você está no mês de Novembro')
  break;
  case 12: 
  console.log('Você está no mês de Dezembro')
  break;
  default:
  console.log('O numero digitado não esta entre os solicitados')
}
for(let i = 0; i < 5; i++){
  console.log("Número "+ i)

}
let count=0;
while(count < 10){
  console.log("Número "+count);
  count++;
}
let num = 0;

let array = ['maçã','Banana','Laranja']
for(let fruta of array){
  console.log(fruta);
}
