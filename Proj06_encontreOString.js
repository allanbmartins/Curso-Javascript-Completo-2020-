// PROJETO ENCONTRE O STRING

//Criar método para ler propriedades de um objeto e
//exibir somente as propriedades do tipo que estão nesse objeto

// const filme =  {
//     titulo:'MadMax', 
//     lamcamento: 1980,
//     diretor: 'Robin',
//     genero: 'ação',
//     duracaoMin: 130,
//     personagem: 'Mad'
// }

// exibirPropriedades(filme);

// function exibirPropriedades(obj){
//     (typeof(filme.titulo) === 'string') ? console.log(filme.titulo) : console.log() ;
//     (typeof(filme.lamcamento) === 'string') ? console.log(filme.lamcamento) : console.log() ;
//     (typeof(filme.diretor) === 'string') ? console.log(filme.diretor) : console.log() ;
//     (typeof(filme.genero) === 'string') ? console.log(filme.genero) : console.log() ;
//     (typeof(filme.duracaoMin) === 'string') ? console.log(filme.duracaoMin) : console.log() ;
//     (typeof(filme.personagem) === 'string') ? console.log(filme.personagem) : console.log() ;
// }

const filme =  {
    titulo:'MadMax', 
    lamcamento: 1980,
    diretor: 'Robin',
    genero: 'ação',
    duracaoMin: 130,
    personagem: 'Mad'
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for (prop in obj){
        (typeof obj[prop] === 'string') ? console.log(prop,obj[prop]) : console.log() ;
          }
}

// function exibirPropriedades(obj){
//     for (prop in obj){
//         if (typeof obj[prop] === 'string') 
//         console.log(prop,obj[prop]);
//     }
// }
