// Faça um algoritmo que solicite do usuário três valores e calcule a média das notas de um aluno;

let nota1 = parseFloat(prompt("Digite sua primeira nota: "));
let nota2 = parseFloat(prompt("Digite sua segunda nota: "));
let nota3 = parseFloat(prompt("Digite sua terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

alert(`Sua média é: ${media}`);
