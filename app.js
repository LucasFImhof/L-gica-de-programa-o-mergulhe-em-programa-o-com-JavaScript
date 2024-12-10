// 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas-Vindas');

// 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome = 'Lucas';
console.log(`Olá, ${nome}`);
alert(`Olá, ${nome}`);

// 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem);

// 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = parseInt(Math.random() * 100 + 1);
let valor2 = parseInt(Math.random() * 100 + 1);
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
resultado = 0;

resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// 7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Informe sua idade');

if (idade >= 18) {
    alert('Você é maior de idade');
} else {
    alert('Você é menor de idade');
}

// 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Informe um valor aleatório');

if (numero > 0) {
    alert(`o ${numero} é positivo`);
} else if (numero < 0) {
    alert(`o ${numero} é negativo`);
} else {
    alert(`o ${numero} é igual a zero`);
}

// 9. Use um loop while para imprimir os números de 1 a 10 no console.
numero = 0;

while (numero < 10) {
    alert(numero);
    numero++;
}

// 10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = parseInt(Math.random() * 10 + 1);

if (nota >= 7) {
    alert(`Sua nota é ${nota}, você está aprovado.`);
} else {
    alert(`Sua nota é ${nota}, você está reprovado.`);
}

// 11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
// 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
numero = parseInt(Math.random() * 10 + 1);
console.log(numero);

// 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
numero = parseInt(Math.random() * 1000 + 1);
console.log(numero);