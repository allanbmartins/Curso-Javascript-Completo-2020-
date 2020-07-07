// PROJETO PROJETO IGUALDADE ENTRE OBJETOS

//Comparar se as properiedades são iguais
//Tem endereço de memoria iguais e retornar true ou false
//Comparando se a referencia aponta pro mesmo local na memoria

function Endereco(rua,cidade,cep){ 
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new Endereco('Travessa Cordeiro, 66', 'Duque de Caxias', 'Masculino','25250-438');
const endereco2 = new Endereco('Travessa Cordeiro, 66', 'Duque de Caxias', 'Masculino','25250-438');
const endereco3 = endereco1;

function saoIguais(endereco1,endereco2){ //As propriedades dos objetos são iguais 'true'
    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
}
console.log(saoIguais(endereco1,endereco2));

function temEnderecoMemoriaIguais(endereco1,endereco2){ //O objeto é diferente 'false'
    return endereco1 === endereco2;
}
console.log(temEnderecoMemoriaIguais(endereco1,endereco2));

function temEnderecoMemoriaIguais3(endereco1,endereco3){ //O objeto é igual 'true'
    return endereco1 === endereco3;
}
console.log(temEnderecoMemoriaIguais(endereco1,endereco3));