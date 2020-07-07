// PROJETO MONTADOR DE POSTAGEM DE BLOG - 45

//Criar objeto de postagem de blog que vai conter as seeguintes propriedades abaixo:

// titulo
// mensagem
// autor
// vizualizações
// comentários / ter um array de objetos
//     (autor, mensagem)
// estaAoVivo
// */

// let postagem = {
//     titulo : 'Aula de JavaScript',
//     autorPost:'AllaBM',
//     mensagem : 'A aula é muito boa',
//     visualizacoes : 3000,
//     comentarios : {
//         autorComent : 'Allan',
//         mensagem : 'É verdade a aula é muito boa'},
//    estaAoVivo : true
// }
// // console.log(postagem, postagem.comentarios);

// console.log(`Título:${postagem.titulo}\nAutor Postagem:${postagem.autorPost}\nMensagem:${postagem.mensagem}
// \nVizualizações:${postagem.visualizacoes}\nComentários Autor:${postagem.comentarios.autorComent}
// Comentários mensagem:${postagem.comentarios.mensagem}\n\nEstá Ao Vivo:${postagem.estaAoVivo}\n`)

let postagem = {
    titulo : 'Aula de JavaScript',
    autorPost:'AllaBM',
    mensagem : 'A aula é muito boa',
    visualizacoes : 3000,
    comentarios : [
     { autorComent : 'Allan1', mensagem : 'É verdade a aula é muito boa1'},
     { autorComent : 'Allan2', mensagem : 'É verdade a aula é muito boa2'}
    ],
   estaAoVivo : true
}
console.log(postagem);
console.log(postagem.comentarios);
console.log(postagem.comentarios[1]);

