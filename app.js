//1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt('Qual dia da semana é hoje?');

if (diaSemana == 'Sábado' || diaSemana == 'Domingo') {
    alert('Bom fim de semana');
} else {
    alert('Boa semana');
}

//2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let valorInformado = prompt('Informe um valor');

if (valorInformado > 0) {
    alert(`O valor ${valorInformado} é um número positivo`);
} else {
    alert(`O valor ${valorInformado} é um número negativo`);
}

//3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao;
placar = 100;

while (true) {
    pontuacao = prompt('Informe o valor da pontuação.');

    if (pontuacao < placar) {
        alert('Tente novamente para ganhar.');
    } else {
        alert('Parabéns, você venceu!');
        break;
    }

}

alert('Você alcançou o placar para vencer!');

//4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 1000;

alert(`Seu saldo é de ${saldo} Reais`);

//5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Qual é o seu nome?');
alert(`Olá! Seja bem vindo(a) ${nome}`);