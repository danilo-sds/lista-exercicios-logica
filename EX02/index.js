// Faça um algoritmo que solicite do usuário três valores e calcule a média das notas de um
// aluno:
// Imprima as três notas (Ex. A primeira nota foi 8, a segunda foi ....)
// Imprima a média (Ex. A média do aluno é 7)

let nota1 = parseFloat(prompt("Digite a sua primeira nota: "));
let nota2 = parseFloat(prompt("Digite a sua segunda nota: "));
let nota3 = parseFloat(prompt("Digite a sua terceira nota: "));

let sum = (nota1 + nota2 + nota3) / 3;

alert(`A sua primeira nota foi ${nota1}, a segunda foi ${nota2} e a terceira foi ${nota3}.
Sua média é ${sum.toFixed(2)}`);
