// Uma empresa vai dar um aumento de salário ao seu funcionário. Faça um programa para ler o
// salário do funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

let presentSalary = parseFloat(prompt("Digite aqui o seu salário: "));
let salaryPercentage = parseFloat(
  prompt("Digite seu percentual de reajuste do salário (sem o %):")
);
let newSalary = presentSalary * (1 + salaryPercentage / 100);

alert(`Seu novo salário é R$${newSalary.toFixed(2)}`);
