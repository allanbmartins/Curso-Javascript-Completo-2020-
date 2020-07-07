// PROJETO MONTADOR DE ENDEREÇO

//Criar um objeto endereço que contem:
// Rua
// Cidade
// CEP
// E função para exibir endereço

let endereco = {
    rua:'Travessa Cordeiro, 66',
    cidade: 'Duque de Caxias',
    cep: '25250-438'
}

function exibirEndereco1(endereco){
    console.log("Jeito 1"+`\nRua: ${endereco.rua}\nCidade: ${endereco.cidade}\nCEP: ${endereco.cep}`)
}

function exibirEndereco11(endereco){
    for(let chave in endereco)
    console.log(chave, endereco[chave]);
}

exibirEndereco1(endereco)
exibirEndereco11(endereco)



function Endereco2(ruaEndereco,cidadeEndereco,cepEndereco){ 
    this.ruaEndereco = ruaEndereco,
    this.cidadeEndereco = cidadeEndereco,
    this.cepEndereco = cepEndereco
}
const endereco2 = new Endereco2('Travessa Cordeiro, 66', 'Duque de Caxias', 'Masculino','25250-438');

function exibirEndereco2(endereco2){
    console.log("Jeito 2"+`\nRua: ${endereco2.rua}\nCidade: ${endereco2.cidade}\nCEP: ${endereco2.cep}`)
}

function exibirEndereco22(endereco2){
    for(let chave in endereco2)
    console.log(chave, endereco2[chave]);
}

exibirEndereco2(endereco2)
exibirEndereco22(endereco2)