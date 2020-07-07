// PROJETO 14 - SEGURANÇA VIRTUAL 4:30:00 (https://youtu.be/i6Oi-YtXnAU?t=16211)

//Criar pagina com texto especificados
//Você precisa pegar o nome da pessoa que quer entrar naquele lugar
//Você precisa perguntar a ele(a) que a convidou para essa festa
/*Você precisa de um botão na tela que você ao clicar irá acessar o seu código javascriptpara verificar se a pessoa que 
está tentando entrar e foi de fato convidada por quem ela diz que a convidou. (ex: nome da pessoa Jhonata, quem convidou 
para festa? Cristian. Clico no botão, o javascript pega as informações que eu preenchi na tela e verifica no meu código 
javascript se dentro da lista de convidados do Cristian, o meu nome está lá)*/
//Caso meu nome esteja, eu vou alterar a descrição de "Pesquisando..." para "Você pode entrar!"
//Caso meu nome não esteja, eu vou alterar a descrição de "Pesquisando..." para "Você não pode entrar!"

function pegarDados(){
    convidado = document.getElementById('convidado1').value;
    listaConvidados = ['Jhonata','Allan','Augusto','Paulo','Beatris','Paula','Juliana','Carla'];
    anfitriao = document.getElementById('anfitriao1').value;
    if( listaConvidados.includes(convidado)){
        document.getElementById('Resposta').innerHTML = convidado + ' - Nome na da lista de convidados. Você pode entrar!';
    }
    else {
        document.getElementById('Resposta').innerHTML = 'Nome fora da lista de convidados. Você não pode entrar!';
    }
    
}

