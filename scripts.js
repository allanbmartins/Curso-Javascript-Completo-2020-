//## AULA 01 VARIÁVEIS ################################################################

// let idade = 40;
// console.log(idade);
// let altura = 175;
// console.log(altura);

// // camelCase
// let nameCompleto

// //case sensitive
// let nome = 'Allan';
// // console.log(Nome); // Forma errada
// console.log(nome);


// Exercícios 3 variáveis

// let nome = 'Allan';
// let peso = 80;
// let altura = 175;
// console.log(nome, peso, altura);

//## AULA 02 CONSTANTES ################################################################

// let valorIngressoAdulto = 20;
// valorIngressoAdulto = 30; // Reatribuir valor
// console.log(valorIngressoAdulto);

// let // permite reatribuir valor, usar menos
// const // não permite reatribuir valor, usar mais

// const valorIngressoAdulto = 20;
// // valorIngressoAdulto = 30; // Const não permite reatribuir valor
// console.log(valorIngressoAdulto);

//## AULA 03 TIPOS PRIMITIVOS ###########################################################

// let nome = 'Allan'; // string literal
// let idade = 40; // number literal
// let estaAprovado = true; // boolean
// let sobrenome ; // undefined
// let corSelecionado = null; // nulo / Redefinir um valor

//## AULA 04 TIPAGEM DINÂMICA ############################################################

// let nome = 'Allan'; // string literal
// let idade = 40; // number literal
// let estaAprovado = true; // boolean
// let sobrenome ; // undefined
// let corSelecionado = null; // nulo / Redefinir um valor

// typeof nome //string / texto / caracter
// "string"
// nome = 5 // auterando variáveis dinamicamente
// 5
// typeof nome // number / numero / decimal
// "number"

// typeof idade
// "number"
// idade = 25.05
// 25.05

// typeof idade
// "number"

// typeof estaAprovado // boolean / lógico
// "boolean"

// estaAprovado = 10
// 10
// typeof estaAprovado
// "number"

// typeof sobrenome // undefined / indefinido
// "undefined"

// typeof corSelecionado // object / objeto
// "object"

//## AULA 05 OBJETOS ############################################################

// let nome = 'Allan'; // string literal
// let idade = 40; // number literal
// let estaAprovado = true; // boolean
// let sobrenome ; // undefined
// let corSelecionado = null; // nulo / Redefinir um valor

// let pessoa = {}; // Sintaxe de criação do objeto / seria um objeto vazio

// let pessoa = {
//     nome:'Allan' // Sintaxe [Chave]: [valor] 
// };
// console.log(pessoa);

// typeof pessoa
// "object"
// typeof pessoa.nome
// "string"
// pessoa.nome
// "Allan"

// let pessoa = {
//     nome:'Allan', // Sintaxe [Chave]: [valor] 
//     idade: 40,
//     estaAprovado: true,
//     sobrenome: 'Batista Martins'
// };
// console.log(pessoa);

// Exercícios 3 propriedades

// let pessoa = {
//     nome:'Allan', // Sintaxe [Chave]: [valor] 
//     sobrenome: 'Batista Martins',
//     idade: 40,
//     grauDeInstrucao: '3 grau incompleto',
//     telefone: 21987049676,
//     genero: 'masculino',
//     estaAprovado: true
// };
// console.log(pessoa);

//## AULA 06 ARRAYS ############################################################

// let familia = [26,45,50,17] // Sintaxe {tipo} {variável} = {[0,1,2,3,...valores}

// console.log(familia); // (4) [26, 45, 50, 17]
// console.log(familia[2]); //50

// let familia = [true,45,'Allan',17]

// console.log(familia); // (4) [true, 45, "Allan", 17]
// console.log(familia[2]); //Allan

// console.log(familia.length);

// let nomeDoColega = ['Andre',40,'Rio de Janeiro']

// console.log(nomeDoColega); 
// console.log(nomeDoColega[2]);
// console.log(nomeDoColega.length);

//## AULA 07 FUNCTIONS ############################################################

// Verbo + Sbstantivo

// resetaCor / transformarObjeto / alterarTamanho

// let corSite = "azul";
// function resetaCor() {   // Sintaxe de funções
//     corSite = "";
// };

// console.log(corSite); // chama valor
// resetaCor(); // reseta valor // sem parametro
// console.log(corSite); // chama valor resetado


// let corSite = "azul";
// function resetaCor(cor, tonalidade) {   
//         // corSite = cor + tonalidade;
//         corSite = cor + ' ' + tonalidade;

// };

// console.log(corSite); 
// resetaCor("verde", "claro"); 
// console.log(corSite); 


// Exercício função que altera algo

// let idadePessoa = 40;
// function alteraIdade(idade, nascimento) {   
//        idadePessoa = idade + ' ' + nascimento;

// };

// console.log(idadePessoa); 
// alteraIdade(30, 1980); 
// console.log(idadePessoa);

//## AULA 08 TIPOS DE FUNCTIONS ############################################################

// Função que realiza uma tarefa e não devolve nada
// function dizerNome() {
//     console.log('Allan');
// }
// dizerNome();

// // Função faz um calculo ou operação e retorna algo
// function multiplicarPorDois(valor) {
//     return valor * 2;
// }
// // console.log(multiplicarPorDois(5));

// let resultado = multiplicarPorDois(5);
// console.log(resultado);


//## AULA 09 OPERADORES ############################################################

// Operadores Aritméticos (matemáticos) / + , - , * , / , **
// let salário = 5;

// console.log(salário + salário); 
// console.log(salário - salário); 
// console.log(salário * salário); 
// console.log(salário / salário); 
// console.log(salário ** salário); 

//  ++ , --
// let idade = 18;
// console.log(idade ++); // 18 // Posição do operador afeta (++ antes ou depois ++)
// console.log(idade);  // 19


// Operadores de Atribuição
// let valorTecladoGamer = 100;
// // valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
// valorTecladoGamer += valorTecladoGamer;
// console.log(valorTecladoGamer);


// Operadores de Comparação/igualdade
// Igualdade estrita
// console.log( 1 === 1 ); // forma recomendada
// console.log( '1' === 1 ); // forma recomendada

// Igualdade solta
// console.log( 1 == 1 ); // forma não recomendada
// console.log( '1' == 1 ); // forma não recomendada


// Operadores Ternário / Lógicos

// Tem um cliente, 100 premium, comum
// let pontos = 100;
// let tipo = pontos >= 100 ? 'Cliente premium' : 'Cliente comum'; // ##### LEMBRETE  ####
// console.log(tipo);


// Operadores Lógicos

// (AND) e (&&) // Retorna TRUE se os dois operandos forem TRUE

// console.log(true && true); // true
// console.log(false && true); // false

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
// console.log(podeAplicar);


// (OR) ou (||) // Retorna TRUE se um dos operandos for TRUE

// console.log(true || true); // true
// console.log(false || true); // true

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// console.log(podeAplicar);


// (NOT) negação (!) // Retorna falso se o seu operando pode ser convertido para verdadeiro; senão, retorna verdadeiro.

// console.log(true ! true); // true
// console.log(false ! true); // false

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade != possuiCarteiraDeTrabalho;
// console.log('Pode aplicar', podeAplicar);

// let candidatoRecusado = !podeAplicar
// console.log('Candidato Recusado',candidatoRecusado);


// Operadores não boleanos

// Falsy - são
// undefined
// null
// 0
// false
// ''
// NaN - not a number

// Truthy - o que não for acima

// let corPersonalizada = 'Vermelho';
// let corPersonalizada = '';
// let corPadrao = 'Azul';
// let corPerfil = corPersonalizada || corPadrao;

// console.log(corPerfil);


// Operadores Bitwise

//Projeto Trocando valores

//## AULA 09 OPERADORES ############################################################

// If .. Else

//Se a hora estiver entre 06:00 até 12:00 = Bom dia!
//Se estiver entre 12:00 até 18:00 = Boa Tarde!
//Caso contrário = Boa noite!

// if (condição) {
//     //código da 1 condição a ser executado
// }
// else if (outraCondição) {
//     //código da 2 condição a ser executado
// }
// else{
//     //3 condição que sobrou
// }

// var data = new Date(); // Obtém a data/hora atual

// // let hora = 06;

// let hora = data.getHours(); // Guarda cada pedaço em uma variável
// console.log('Hora atual: ', hora);

// if (hora >= 06 && hora <= 12) {
//     console.log('Bom dia!');
// }
// else if (hora >= 12 && hora <= 18) {
//     console.log('Boa Tarde!');
// }
// else{
//     console.log('Boa noite!');
// }


// Swich .. Case

// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

// let permissao = 'presidente'; // Comum, Gerente, Diretor, Presidente

// switch(permissao) {
//     case 'comum':
//         console.log('Permissão liberada usuário Comum');
//       break;
    
//       case 'gerente':
//         console.log('Permissão liberada usuário Gerente');
//       break;
    
//       case 'diretor':
//         console.log('Permissão liberada usuário Diretor');
//       break;
    
//       case 'presidente':
//         console.log('Permissão liberada usuário Presidente');
//       break;

//     default:
//     console.log('Permissão negada');
// }

// FOR / Laço / Loop

// for ([inicialização]; [condição]; [expressão final])
//    declaração

// console.log('Estou aprendendo!');
// console.log('Estou aprendendo!');
// console.log('Estou aprendendo!');
// console.log('Estou aprendendo!');
// console.log('Estou aprendendo!');

// 1.For

// for (let i = 0; i < 5; i++ ){
//     console.log('FOR - ' + 'Estou aprendendo! ' + ' Passada ' + i);
// }

// for (let i = 1; i <= 5; i++ ){
// for (let i = 5; i >= 1; i-- ){
//     if(i % 2 !== 0){ // pesquisar modules
//         // 3 % 2
//     console.log('Passada ' + i);
//     }
// }
 
// 2.While loop

// let i = 5;

// while ( i >= 1) {
//     if(i % 2 !== 0){ // pesquisar modules
//         console.log('Passada ' + i);
//     }
//     i--;
// }

// 3.Do..While

// do
//    statement
// while (condition);

// let i = 0;

// do {
//     console.log('WHILE - ' + 'Digitando! ' + ' Passada ' + i);
//     i++;
// } while (i < 10);


// 4.For..In // melhor para objetos e array

// const pessoa = {
//     nome: 'Allan',
//     idade: 40
// };
// //key-value
// for (let chave in pessoa) {
//     // console.log(chave, pessoa.nome);
//     console.log(chave, pessoa['nome']);
// }

// const cores = ['vermelho','azul','verde'];

// for (let indice in cores) {
//     console.log(indice,cores[indice]);
// }

// 5.For..Of
// const cores = ['vermelho','azul','verde'];

// for(let cor of cores){
//     console.log(cor);
// }

//Projeto valor máximo


//## AULA 10  ############################################################

//Projeto Fizzbuzz

//Comparação de valores

//Divisível por 3 (3) => Fizz
//Divisível por 5 (5) => Buzz
//Divisível por 3 e 5 (15) => FizzBuzz
//Não é divisível por 3 e 5 (11) => retorna o mesmo valor
//Retorna valor que não é um número (true) ('string) => Nâo é um número

// const resultado = fizBuzz(15);
// console.log(resultado);

// function fizBuzz(entrada){

// }

//## AULA 11  ############################################################

// FACTORY FUNCTIONS - Funções de Fábrica - AULA 34

// const celular = {
//     marcaCelular : 'ASUS',
//     tamanhoTela : {
//         vertical : 155,
//         hotizontal : 75
//     },
//     capacidadeBateria: 5000,
//     ligar: function() {
//         console.log("Fazenndo ligação...")
//     }
// }

// function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){ //Método encapsulado para fazer a criação de objetos
//     // const celular = {
//     return {
//         // marcaCelular : 'ASUS', // Hard code / Está chumbado.   
//         // marcaCelular : marcaCelular, // Key : Value / Chave : Valor / Tiverem o mesmo nome deixar um só
//         marcaCelular,
//         tamanhoTela,
//         capacidadeBateria,
//         // ligar: function() {
//         ligar() {
//             console.log("Fazenndo ligação...")
//         }
//     }
//     // return celular;
// }

// const celular1 = criarCelular('Zenfone', 5.5, 5000);
// console.log(celular1);

//EXERCÍCIO

// function criarPersonagem(nomePersonagem,classePersonagem,generoPersonagem,racaPersonagem){ 
//     return {
//         nomePersonagem,
//         classePersonagem,
//         generoPersonagem,
//         racaPersonagem,
//         andar() {
//             console.log("Criando personagem...")
//         }
//     }
// }

// const personagem1 = criarPersonagem('Átila', 'Guerreiro', 'Masculino','Anão');
// console.log(personagem1);


//## AULA 12  ############################################################

// CONSTRUTOR FUNCTIONS - Construtor de funções - AULA 35

//camelCase - umDoisTresQuatro
// function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){ 
//     return {
//         marcaCelular,
//         tamanhoTela,
//         capacidadeBateria,
//         ligar() {
//             console.log("Fazenndo ligação...")
//         }
//     }
// }

//Pascal Case - UmDoisTresQuatro
// function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
//     this.marcaCelular = marcaCelular,
//     this.tamanhoTela = tamanhoTela,
//     this.capacidadeBateria = capacidadeBateria,
//     this.ligar = function() {
//         console.log("Fazenndo ligação...");
//     }
// }
// const celular = new Celular('Zenfone', 5.5, 5000)
// console.log(celular);


//EXERCÍCIO

// function Personagem(nomePersonagem,classePersonagem,generoPersonagem,racaPersonagem){ 
//     this.nomePersonagem = nomePersonagem,
//     this.classePersonagem = classePersonagem,
//     this.generoPersonagem = generoPersonagem,
//     this.racaPersonagem = racaPersonagem,
//     this.andar = function() {
//         console.log("Criando personagem...")
//     }
// }
// const personagem = new Personagem('Átila', 'Guerreiro', 'Masculino','Anão');
// console.log(personagem);


//## AULA 13  ############################################################

// Natureja dinâmica de Objetos - AULA 36

// const mouse = {
//     cor : 'red',
//     marca : 'dazz'
// }
// console.log(mouse)


// const mouse = {
//     cor : 'red',
//     marca : 'dazz'
// }
// mouse.velocidade = 5000;
// mouse.trocarDPI = function() {
//     console.log('munando DPI...')
// }
// delete mouse.velocidade;
// delete mouse.trocarDPI;
// console.log(mouse)

//## AULA 14  ############################################################

// Clonando Objetos - AULA 37

// const celular = {
//     marcaCelular : 'ASUS',
//     tamanhoTela : {
//         vertical : 155,
//         hotizontal : 75
//     },
//     ligar: function() {
//         console.log("Fazenndo ligação...")
//     }
// }

// const celular = {
//     marcaCelular : 'ASUS',
//     tamanhoTela : {
//         vertical : 155,
//         hotizontal : 75
//     },
//     ligar: function() {
//         console.log("Fazenndo ligação...")
//     }
// }

// const novoObjeto = Object.assign({ //Clonar forma 1
//     bateria : 5000

// },celular)
// console.log(novoObjeto);


// const novoObjeto2 = {...celular}; // pretty {...} três pontos
// console.log(novoObjeto2);


//EXERCÍCIO

// function Personagem(nomePersonagem,classePersonagem,generoPersonagem,racaPersonagem){ 
//     this.nomePersonagem = nomePersonagem,
//     this.classePersonagem = classePersonagem,
//     this.generoPersonagem = generoPersonagem,
//     this.racaPersonagem = racaPersonagem,
//     this.andar = function() {
//         console.log("Criando personagem...")
//     }
// }
// const personagem = new Personagem('Átila', 'Guerreiro', 'Masculino','Anão');
// console.log(personagem);


// const novoObjeto = Object.assign({ //Clonar forma 1
//     idade : 5000
// },personagem)
// console.log(novoObjeto);


// const novoObjeto2 = {...personagem}; // pretty {...} três pontos
// console.log(novoObjeto2);


//## AULA 15  ############################################################

// MATH - AULA 38 (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math)

// Math.random()
// Retorna um número pseudo-aleatório entre 0 e 1.

// Math.max([x[,y[,…]]])
// Retorna o maior dentre os parâmetros recebidos.
// Math.max(3,6,8,10)


// Math.min([x[,y[,…]]])
// Retorna o menor dentre os parâmetros recebidos.
// Math.min(5,8,4,8)

// Math.PI
// Relação entre a circunferência de um círculo e o seu diâmetro, aproximadamente 3.14159.


//## AULA 16  ############################################################

// METÓDOS DO STRING - AULA 39 (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)

//Tipo Primitivo
// const mensagem = 'minha primeira mensagem';

//Tipo objeto
// const outraMensagem = new String ('bom dia');

// outroMensagem.length
// 7

// outroMensagem[2]
// 'm'

// mensagem.includes('primeira') // Contem
// true
// mensagem.includes('vermelho')
// false

// mensagem.startsWith('minha') // começa
// true
// mensagem.startsWith('vermelho')
// false

// mensagem.endsWith('mensagem') // termina
// true

// mensagem.replace('minha','sua') // Susbstituição de palavras

// mensagem.trim() // remove espaços excedentes do ínicio e do final

// mensagem.split(' ') // quebra pelo parametro fornecido


//## AULA 17  ############################################################

// TEMPLATE LITERAL - AULA 40 ()

// const mensagem = 'Oi isso é minha\n primeira mensagem'; // \n escape notation (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)

// const mensagem = 
// 'Oi isso é minha\n +
// '\'primeira mensagem\' mensagem';

// Object {}
// Boolean true,false
// String ' '," "
// Template ``

// const outra = `Oi isso é minha 
// 'primeira' mensagem`

// const nome = 'Allan';
// const email = 
// `Oi ${nome}Fulano ${2+2} 


// Obrigado por se inscrever no canal

// Para acompanhar não se esqueça de ativar o sino.

// Obrigado
// Allan.`;

// ${} inserir informações


//## AULA 18  ############################################################

// DATE - AULA 41 (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)

// const date1 = new Date();

// const date2 = new Date('March 06 2019 09:30');

// const date3 = new Date(2019, 02, 06, 09,30); // OBS começa a contar do zero 03(Mês Março)

// date3.setFullYear(2030); // coloca data

// date2.toString();
// date2.toTimeString();

// date2.toISOString(); // "2019-03-06T12:30:00.000Z" Formato visto no banco de dados

// PROJETO MONTADOR DE ENDEREÇO


//## AULA 19  ############################################################

// IGUALDADE DE OBJETOS - AULA 43 ()

// exercício

//## AULA 20  ############################################################
// CONSTRUTOR FUNCTION - AULA 46 ()

// EXERCÍCIO

// function Postagem(titulo,autorPost,mensagemPost,visualizacoes,comentarios,estaAoVivo){
//     this.titulo = titulo,
//     this.autorPost = autorPost,
//     this.mensagemPost = mensagemPost,
//     this.visualizacoes = visualizacoes,
//     this.comentarios = comentarios [
//      { autorComent = autorComent, mensagemComent = mensagemComent}
//     ],
//     this.estaAoVivo = estaAoVivo
// }

// const postagem = new Postagem('Aula de JavaScript','AllaBM','A aula é muito boa',3000,{'Allan1','É verdade a aula é muito boa1'},true)
// console.log(postagem);

// function Postagem(titulo,autorPost,mensagemPost){
//     this.titulo = titulo,
//     this.autorPost = autorPost,
//     this.mensagemPost = mensagemPost,
//     this.visualizacoes = 0,
//     this.comentarios = [],
//     this.estaAoVivo = false
// }

// let postagem = new Postagem('Aula de JavaScript','AllaBM','A aula é muito boa')
// console.log(postagem);


//## AULA 21  ############################################################
// FAIXA DE PREÇO - AULA 47 ()

// EXERCÍCIO

//Crie uma rray de objetos de faixa de preço para que ele possa ser usado em um site igual o mercado livre
//Faixas, tootip(mensagem de dica(EX: Até..., ...a... , Mais de...)), mínimo e máximo

//Primeira opção

// let faixaDePreco = [
//     {tootip: 'até R$ 700', minimo: 0, maximo: 700},
//     {tootip: 'de R$ 700 a R$ 1.000', minimo: 701, maximo: 1000},
//     {tootip: 'Mais de R$ 1.000', minimo: 1001, maximo: 9999999}
// ];
// console.log(faixaDePreco);
    
// //Opção 2 - Usando uma (factory function)

// function criaFaixaDePreco(tootip,minimo,maximo){
//     return{
//         tootip,
//         minimo,
//         maximo
//     }
// }

// let faixaDePreco2 = [
//     criaFaixaDePreco( 'até R$ 700', 0, 700),
//     criaFaixaDePreco( 'de R$ 700 a R$ 1.000', 701, 1000),
//     criaFaixaDePreco( 'Mais de R$ 1.000', 1001, 9999999)
// ];
// console.log(faixaDePreco2);

// //Opção 3 - Usando um (Constructor function)

// function FaixaDePreco3(tootip,minimo,maximo){
//         this.tootip = tootip,
//         this.minimo = minimo,
//         this.maximo = maximo
// }
        
// let faixaDePreco3 = [
//     new FaixaDePreco3('até R$ 700', 0, 700),
//     new FaixaDePreco3('de R$ 700 a R$ 1.000', 701, 1000),
//     new FaixaDePreco3('Mais de R$ 1.000', 1001, 9999999)
// ]
// console.log(faixaDePreco3);


//## AULA 22  ############################################################
// INTRODUÇÃO A ARRAYS - AULA 52 (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

//add novos elementos
//encontrar elementos
//remover elementos
//dividir elementos
//dividir arrays
//combinar arrays


// //criar array
// const numeros = [1,2,3];

// //Inserir no início do array

// numeros.unshift(0);
// console.log(numeros)

// //Inserir no meio do array
// numeros.splice(1,0,'a');
// console.log(numeros)

// //Inserir no final do array
// numeros.push(5);
// console.log(numeros)


//encontrar elementos (Tipos Primitivos) (https://braziljs.org/artigos/diferencas-entre-valor-e-referencia-em-javascript/)

// const numeros = [1,2,3,4];
// console.log(numeros.indexOf(2)); //1
// console.log(numeros.indexOf(5)); //-1 não existe
// console.log(numeros.indexOf('5')); //-1 não existe

// const numeros = [1,2,3,1,4];
// console.log(numeros.lastIndexOf(1)); //index 3

// console.log(numeros.indexOf(2) !== -1); //true

// console.log(numeros.includes(2)); //true (Javascript ECMA 6)



//encontrar elementos (Tipos referencia) (https://braziljs.org/artigos/diferencas-entre-valor-e-referencia-em-javascript/)

// const marcas = [
//     {id: 1 , nome: 'a'},
//     {id: 2 , nome: 'b'},
// ];

// console.log(marcas.includes({id: 1 , nome: 'a'})); //false (é um objeto) não da para utilizar (Javascript ES6)

// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);
// // expected output: 12

// const marcas = [
//     {id: 1 , nome: 'a'},
//     {id: 2 , nome: 'b'},
// ];

// const marca = marcas.find(function(marca){
//     return marca.nome === 'a' 
// });

// console.log(marca);


// aula 56 ARROW FUNCTIONS

// const marcas = [
//     {id: 1 , nome: 'a'},
//     {id: 2 , nome: 'b'},
// ];

// const marca = marcas.find(function(marca){
//     return marca.nome === 'a' 
// });

// console.log(marca);

// (Javascript ES6)
// const marcas = [
//     {id: 1 , nome: 'a'},
//     {id: 2 , nome: 'b'},
// ];

// const marca = marcas.find((marca) => { //Sendo vários parametros
//     return marca.nome === 'a' 
// });

// console.log(marca);

// const marca2 = marcas.find(marca => marca.nome === 'a' //Sendo um parametros
// );

// console.log(marca2);


//remover elementos de um array
// https://youtu.be/i6Oi-YtXnAU?t=13963 = 3:52:43

// const numeros = [1,2,3,4,5,6];
// console.log(numeros);

// //remover no final
// const ultimo = numeros.pop();
// console.log(ultimo)
// console.log(numeros)

// //remover no inicio
// const primeiro = numeros.shift();
// console.log(primeiro)
// console.log(numeros)

// //remover algo no meio
// const meio = numeros.splice(2,1);
// console.log(meio)
// console.log(numeros)


//esvaziar elementos de um array
// https://youtu.be/i6Oi-YtXnAU?t=14171 = 3:56:11

//Opção 1 - reatribuir array
// let numeros = [1,2,3,4,5,6]; // const não pode substituir tem que ser let  //se tiver referencias pode não estar apagando 
// let outros = numeros;
// console.log(numeros);
// numeros = [];
// console.log(outros);

// //Opção 2 - limpar com lenght array
// let numeros = [1,2,3,4,5,6];
// let outros = numeros;
// console.log(numeros);
// numeros.length = 0; // apaga valores de referencias também // "AVISO' MELHOR FORMA DE LIMPAR ARRAY
// console.log(numeros);
// console.log(outros);

//Opção 3 - limpar com splice array
// let numeros = [1,2,3,4,5,6];
// let outros = numeros;
// console.log(numeros);
// numeros.splice(0,numeros.length); // apaga valores de referencias também
// console.log(numeros);
// console.log(outros);

//Opção 4 - limpar com pop array
// let numeros = [1,2,3,4,5,6];
// let outros = numeros;
// console.log(numeros);
// while (numeros.length > 0)
// numeros.pop(); // apaga valores de referencias também // "AVISO' não é uma opção muito performática
// console.log(numeros);
// console.log(outros);

//combinando e cortando um array   // Thema "One Dark Pro Bold"
// xxxxx = 4:35:41

// const primeiro = [1,2,3]; 
// const segundo = [4,5,6]; 

// //combinar
// const combinado = primeiro.concat(segundo)
// console.log(combinado);

// //dividir
// const cortado = combinado.slice(1,3)
// console.log(cortado);

// const cortado2 = combinado.slice() // Tipos primitivos
// console.log(cortado2);

// const primeiro = [{id:1}]; // Tipos referencia
// const segundo = [4,5,6]; 
// primeiro[0].id = 10;
// //combinar
// const combinado = primeiro.concat(segundo);
// console.log(combinado);
// //dividir
// const cortado = combinado.slice();
// console.log(cortado);


// Operador SPREAD / Cópias e clonagem de arrays

// const primeiro = [1,2,3]; 
// const segundo = [4,5,6]; 

// const combinado = [...primeiro,'a',...segundo,'a']; // Pode fazer adições
// console.log(combinado);

// const clonado = [...combinado];
// console.log(clonado);

//Percorar um array

// const numeros = [1,2,3,4,5];
// console.log(numeros);

// //FOR
// for (numero of numeros)
//     console.log(numero);

// //FOREACH
// numeros.forEach(function(numero){
//     console.log(numero);
// });
    
// //FOREACH // ES6 ARROW FUNCTION
// numeros.forEach((numero,indice) => console.log(numero,indice))

//COMBINANDO ARRAYS

// const numeros = [1,2,3,4,5];
// console.log(numeros);

// const combinado = numeros.join('.')
// console.log(combinado);

// const frase = "Olha bem vindo ao curso";
// const resultado = frase.split(' ');
// console.log(resultado);

// const traco = resultado.join('-') // Opção 1
// console.log(traco); 
// console.log(resultado.join('-')); // Opção 2


//RECEBENDO DADOS IMPUT

// prompt('Olá qual sua cor favorita?')
// "vermelho"

// let CorFavorita = prompt('Olá qual sua cor favorita?');
// //'vermelho'

// if (CorFavorita = 'vermelho'){
//     alert('Essa é minha cor também');
// }

// EXERCÍCIO CONTROLE DE IDADE

// let idade = prompt('Qual sua idade?')

// //Opção 1
// if(idade >= 18){
//     alert('Você tem (' + idade + ')anos que é igual ou maior de 18 anos e é maior de idade');
// } else {
// alert('Você tem (' + idade + ')anos  que é menos de 18 anos e é menor de idade');
// }

//IF (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)

//Opção 2
// (idade >= 18) ? alert('Você tem é maior de idade') : alert('Você é menor de idade');


//INTRO MANIPULAÇÃO DO DOM (HTML) // DOM é o HTML que está numa página


https://devaprender.com/como-criar-um-bot-no-whatsapp/

// console

// document.getElementById('comment').innerText = 'Olá meu nome é Allan e eu estou fazendo seu curso de javaScript';


// class="python"

// document.getElementsByClassName('python').innerText = 'JavaScript'; //Não alterou

// document.getElementsByClassName('python').value = 'JavaScript'; //Não alterou

// document.getElementsByClassName('python').innerHTML = 'JavaScript'; //procurando todos os elementos

// document.getElementsByClassName('python')[0].innerText = 'JavaScript'; //Alterou o testo //procurando indice 0

// document.getElementsByClassName('python')[0].value = 'JavaScript'; //procurando indice 0

// document.getElementsByClassName('python')[0].innerHTML = 'JavaScript'; //procurando indice 0

// // parte de publicar (clicar)

// id="submit"

// document.getElementById('submit').click()


// //Execício postar via DOM (HTML)


// id="comment"
// document.getElementById('comment').innerText = 'Olá meu nome é Allan e eu estou fazendo este ótimo curso de javaScript, muito obrigado por compartilhar o seu conhecimento conosco.';

// id="author"
// document.getElementById('author').value = 'Allan Batista Martins';

// id="email"
// document.getElementById('email').value = 'allanbmartins@yahoo.com';

// id="url"

// document.getElementById('url').value = 'www.linkedin.com/in/allan-batista-martins-23aa6783';

// id="submit"

// document.getElementById('submit').click();











































