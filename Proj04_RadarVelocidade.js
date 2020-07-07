// PROJETO RADAR VELOCIDADE

//Velocidade máxima de 70 km/h
//A cada 5 km/h acima do limite você ganha 1 ponto
//Math.floor() // Arredondar valores decimais Math.floor(1.3) = 1
//Caso a quantidade de dos pontos seja maior que 12 -> 'Carteira suspendida'  

verificarVelocidade(150);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    const limiteDePontos = 12;
    if (velocidade <= velocidadeMaxima) { //Velocidade máxima de 70 km/h
        console.log('A velocidade de (' + velocidade + ')km/h está permitida conforme o limite que é 70 km/h.');
    } 
    else if (velocidade >= velocidadeMaxima) { //A cada 5 km/h acima do limite você ganha 1 ponto
        const pontos = (Math.floor((velocidade - velocidadeMaxima) / kmPorPonto)); //Math.floor() // Arredondar valores decimais
            console.log('A velocidade de (' + velocidade + ') está acima da permitida que é 70 km/h.');
            console.log('A quantidade de pontos que vc fez é (' + pontos + ')'); 
            return pontos > limiteDePontos ? console.log('Você fez (' + pontos + ') pontos e utrapassou o limite total de (12) pontos.') :
             console.log('Você está com (' + pontos + ') pontos, ainda no limite de pontos permitidos que é de um total de (12).'); //Caso a quantidade de dos pontos seja maior que 12 -> 'Carteira suspendida' 
     
    } 
}