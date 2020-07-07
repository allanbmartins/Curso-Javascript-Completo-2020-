// PROJETO IMPAR OU PAR

//Receba uma quantidade de valores para avaliar
//Função exibe se cada valor é par ou impar


avaliarValores(10);

function avaliarValores(limite){
    // let i = limite;
    for (let i = 1 ; i <= limite; i++ ){
        ( i % 2 === 0) ? console.log('Passada ' + i + ' PAR '):  console.log('Passada ' + i + ' IMPAR ');
       
    }
}

// function avaliarValores(limite){
//     // let i = limite;
//     for (let i = 0 ; i <= limite; i++ ){
//         if ( i % 2 === 0)
//             console.log('Passada ' + i + ' PAR ');
//         // else (i % 2 !== 0)
//         else
//             console.log('Passada ' + i + ' IMPAR ');
//     }
// }
    
    // while ( i > 1) {
    //     if(i % 2 === 0){
    //         console.log('Passada ' + i + ' PAR ');
    //     }else { (i % 2 !== 0)
    //         console.log('Passada ' + i + ' IMPAR ');
    //     }
    //     i--;

    // }

// }





    // if (typeof(entrada) !== 'number') { //Retorna valor que não é um número (true) ('string') => Nâo é um número
    //     return 'O (' + entrada + ') nâo é um número.';
    // } 
    // else if (entrada % 3 !== 0 && entrada %5 !== 0) { //Não é divisível por 3 e 5 (11) => retorna o mesmo valor
    //     return 'O (' + entrada + ') não é divisível por 3 ou 5.';
    // } 
    // else if (entrada % 3 === 0 && entrada %5 === 0) { //Divisível por 3 e 5 (15) => FizzBuzz
    //     return 'O (' + entrada + ') é FizzBuzz';
    // }
    // else if (entrada % 5 === 0) { //Divisível por 5 (5) => Buzz
    //     return 'O (' + entrada + ') é Buzz';
    // } 
    // else if (entrada % 3 === 0) { //Divisível por 3 (3) => Fizz
    // return 'O (' + entrada + ') é Fizz';
    // }
    // else{ // Nenhuma das opções acima
    //     return 'Impossível';
    //     }
