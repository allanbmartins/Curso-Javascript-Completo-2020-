// PROJETO CONTADOR DE ASTERISTICOS

//Criar uma função que exibe a quantidade de *
//que aquela linha possui

// exibirAsteristicos(10);

// function exibirAsteristicos(linhas) {
//     let asteristicos = '';
      
//     for (let i = 1; i <= linhas; i++) {
//         asteristicos += '*'
//         console.log("Passada " + i + ' ' + asteristicos);   
//     }
// }

// exibirAsteristicos(10);

// function exibirAsteristicos(linhas) {
//     let asteristicos = '';
      
//     for (let i = 1; i <= linhas; i++) {
//         asteristicos += '*';
//         console.log("Passada " + i + ' ' + asteristicos);   
//     }
// }


exibirAsteristicos(10);

function exibirAsteristicos(linhas) { //Usando loop nested ou loop interior
    
      
    for (let i = 1; i <= linhas; i++) {
        let asteristicos = '';
            for (let y = 1; y <= i; y++) {
                asteristicos += '*';
            }
            console.log("Passada " + i + ' ' + asteristicos);   
    }
}