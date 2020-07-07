// PROJETO MÁXIMO ENTRE DOIS VALORES

// let n1 = 100;
// // let n1 = prompt('Insira o primeiro valor:');
// let n2 = 100;
// // let n2 = prompt('Insira o segundo valor:');
// let max = 0;

//     if( n1 > n2 ) {
//         console.clear(); 
//         console.log('O primeiro valor é maior: ' + (max = n1));

//     }
//     else if ( n1 < n2 ) {
//     console.clear(); 
//     console.log('O segundo valor é maior: ' + n2);
//     }
//     else{
//         console.clear(); 
//         console.log('Os valores são iguais: ' + n1 + ' = ' + n2);
    
// }

// let valorMaior = max(100,100);
// console.log(valorMaior)

// function max(n1, n2){
//     if( n1 > n2 )
//         return n1;
//     else return n2;
// }

// let valorMaior = max(100,100);
// console.log(valorMaior)

// function max(n1, n2){
//     if( n1 > n2 )
//         return n1;
//     return n2; //sem o else
// }

let valorMaior = max(100,100);
console.log(valorMaior)

function max(n1, n2){
    return n1 > n2 ? 'O primeiro valor é maior: ' + n1 : 'O segundo valor é maior: ' + n2;
}


