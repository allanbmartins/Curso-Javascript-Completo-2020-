// PROJETO FIZZBUZZ

//Comparação de valores

//Divisível por 3 (3) => Fizz
//Divisível por 5 (5) => Buzz
//Divisível por 3 e 5 (15) => FizzBuzz
//Não é divisível por 3 e 5 (11) => retorna o mesmo valor
//Retorna valor que não é um número (true) ('string') => Nâo é um número

const resultado = fizBuzz(30);
console.log(resultado);

function fizBuzz(entrada){
    if (typeof(entrada) !== 'number') { //Retorna valor que não é um número (true) ('string') => Nâo é um número
        return 'O (' + entrada + ') nâo é um número.';
    } 
    else if (entrada % 3 !== 0 && entrada %5 !== 0) { //Não é divisível por 3 e 5 (11) => retorna o mesmo valor
        return 'O (' + entrada + ') não é divisível por 3 ou 5.';
    } 
    else if (entrada % 3 === 0 && entrada %5 === 0) { //Divisível por 3 e 5 (15) => FizzBuzz
        return 'O (' + entrada + ') é FizzBuzz';
    }
    else if (entrada % 5 === 0) { //Divisível por 5 (5) => Buzz
        return 'O (' + entrada + ') é Buzz';
    } 
    else if (entrada % 3 === 0) { //Divisível por 3 (3) => Fizz
    return 'O (' + entrada + ') é Fizz';
    }
    else{ // Nenhuma das opções acima
        return 'Impossível';
        }
       

    
    
    
    
    // typeof entrada == 'number';
    // // return typeof
    // console.log(typeof entrada);

    // if(typeof entrada == 'number')
    //    console.log(typeof);
// }
            //    console.log('Nâo é um número');

        // if(typeof(entrada) = 'string' || 'true' ) {
        //     console.clear(); 
        //     console.log('Fizz - É divisível por 3 ' + entrada);




    // }
    // else if ( n1 < n2 ) {
    // console.clear(); 
    // console.log('O segundo valor é maior: ' + n2);
    // }
    // else{
    //     console.clear(); 
    //     console.log('Os valores são iguais: ' + n1 + ' = ' + n2);



    // return n1 > n2 ? 'O primeiro valor é maior: ' + n1 : 'O segundo valor é maior: ' + n2;
}



// let n1 = 100;
// // let n1 = prompt('Insira o primeiro valor:');
// let n2 = 100;
// // let n2 = prompt('Insira o segundo valor:');
// let max = 0;

    // if( n1 > n2 ) {
    //     console.clear(); 
    //     console.log('O primeiro valor é maior: ' + (max = n1));

    // }
    // else if ( n1 < n2 ) {
    // console.clear(); 
    // console.log('O segundo valor é maior: ' + n2);
    // }
    // else{
    //     console.clear(); 
    //     console.log('Os valores são iguais: ' + n1 + ' = ' + n2);
    
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



