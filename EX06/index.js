// Faça um programa que leia o nome do usuário, a idade do usuário, o nome da mãe do usuário,
// a idade da mãe do usuário, o nome do pai do usuário e a idade do pai do usuário. O programa
// devera imprimir na tela quantos anos a mãe e o pai do usuário tinha quando ele nasceu. A
// resposta deve ter o formato deste exemplo:
// “Carlos, quando você nasceu, Dona Cecilia tinha 27 anos e Seu Paulo tinha 32

let userName = prompt("Digite o seu nome: ");
let userAge = parseInt(prompt("Digite a sua idade: "));
let motherName = prompt("Digite o nome da sua mãe: ");
let motherAge = parseInt(prompt("Digite a idade da sua mãe: "));
let fatherName = prompt("Digite o nome do seu pai: ");
let fatherAge = parseInt(prompt("Digite a idade do seu pai: "));

let calcMotherAge = motherAge - userAge;
let calcFatherAge = fatherAge - userAge;

alert(
  `${userName}, quando você nasceu, Dona ${motherName} tinha ${calcMotherAge} anos e Seu ${fatherName} tinha ${calcFatherAge} anos`
);
