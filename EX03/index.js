// Faça um algoritmo para que solicite o nome do usuário, a nota dele em duas avaliações e
// imprima o nome dele junto com a média de suas notas

let studentName = prompt("Digite seu nome: ");
let studentFirstGrade = parseFloat(prompt("Digite a sua primeira nota: "));
let studentSecondGrade = parseFloat(prompt("Digite a sua segunda nota: "));
let studentAverage = (studentFirstGrade + studentSecondGrade) / 2;

alert(`Seu nome é: ${studentName},
Sua média é ${studentAverage}`);
