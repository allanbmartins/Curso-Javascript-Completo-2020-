// PROJETO MÉDIA NOTA ESCOLAR

//Obter a média a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

// const mediaNotas = [70,70,80,60,100,50,40,80,90,10];

// // const mediaNotas = [100,100,100,100,100,100,100,100,100,100];

// console.log(mediaDoAluno(mediaNotas));

// function mediaDoAluno(notas) {
//     let qtdNotas = notas.length;
//     let soma = 0;
//     let media = 0;
    
//     for (let i = 0; i < qtdNotas; i++) {
//       soma = soma + notas[i];       
//     }

//     media = (soma / qtdNotas).toFixed(2);
//     console.log('A media de notas é : ('+ media + ')');
//         ( media <= 59 ) ? console.log('A sua nota está entre '+'0-59: F') :
//         ( media <= 69 ) ? console.log('A sua nota está entre '+'60-69: D') :
//         ( media <= 79 ) ? console.log('A sua nota está entre '+'70-79: C') :
//         ( media <= 89 ) ? console.log('A sua nota está entre '+'80-89: B') : 
//         console.log('A sua nota está entre '+'90-100: A');
    
//     // console.log('Soma ' + soma);
//     // console.log(typeof(qtdNotas));
//     // console.log('A quantidade de notas é ' + qtdNotas);
    
// }

// const array = [70,70,80];

// console.log(mediaDoAluno(array));

// function mediaDoAluno(notas) {
//     let soma = 0;
//     for (let nota of notas) {
//         soma += nota;
//     }
//     const media = (soma/(notas.length)).toFixed(2);
//     console.log('A media de notas é : ('+ media + ')');

//     if ( media <= 59 ) return console.log('A sua nota está entre '+'0-59: F');
//     if ( media <= 69 ) return console.log('A sua nota está entre '+'60-69: D');
//     if ( media <= 79 ) return console.log('A sua nota está entre '+'70-79: C');
//     if ( media <= 89 ) return console.log('A sua nota está entre '+'80-89: B'); 
//     return console.log('A sua nota está entre '+'90-100: A')
// }

const array = [70,70,80]; //Aplicando princípio de responsabilidade única

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) { // Bloco vai avaliar a nota
    const media = calcularMedia(notas)

    console.log('A media de notas é : ('+ media + ')');
    
    if ( media <= 59 ) return console.log('A sua nota está entre '+'0-59: F');
    if ( media <= 69 ) return console.log('A sua nota está entre '+'60-69: D');
    if ( media <= 79 ) return console.log('A sua nota está entre '+'70-79: C');
    if ( media <= 89 ) return console.log('A sua nota está entre '+'80-89: B'); 
    return console.log('A sua nota está entre '+'90-100: A')
}

function calcularMedia(array){ // Bloco vai calcular a nota
    let soma = 0;
        for (let valor of array) {
            soma += valor;
        }
        return (soma/(array.length)).toFixed(2);
        
}



