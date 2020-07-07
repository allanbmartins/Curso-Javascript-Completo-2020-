// PROJETO MULTIPLO DE 3 E 5

//Criar função somar que retorna a
//soma de todos os multiplos de 3 e 5
//O limite da amostra será 10

//Multiplos de 3  // 3, 6, 9
//Multiplos de 5  // 5, 10

somar(10);

function somar(limite){
    let somaMultiplo3e5 = 0;
    for (i = 0 ; i <= limite; i++ ){
        ( i % 3 === 0 ) ? somaMultiplo3e5 += i :
         ( i % 5 === 0 ) ? somaMultiplo3e5 += i : limite;         
    }
    console.log('Soma dos multipos de 3 e 5 é : ' + somaMultiplo3e5);
}

// somar(10);

// function somar(limite){
//     let somaMultiplo3e5 = 0;
//     for (let i = 1 ; i <= limite; i++ ){
//         ( 3 * i > limite) ? limite  :   somaMultiplo3e5 = somaMultiplo3e5 + (i * 3);
//         ( 5 * i > limite) ? limite  :   somaMultiplo3e5 = somaMultiplo3e5 + (i * 5);
       
//     }
//     console.log('Soma dos multipos de 3 e 5 é : ' + somaMultiplo3e5);
// }

// somar(10);

// function somar(limite){
//     let multiplo3 = 0;
//     let multiplo5 = 0;
//     for (i = 0 ; i <= limite; i++ ){
//         if( i % 3 === 0) 
//             multiplo3 += i;
//             if( i % 5 === 0) 
//                 multiplo5 += i;    
//     }
//     console.log('Soma dos multipos de 3 e 5 é : ' + (multiplo3 + multiplo5));
// }









