function soma(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

const num1 = +prompt("Insira um número");
const num2 = +prompt("Insira outro número");

console.log(`${num1} + ${num2} = ${soma(num1, num2)}`);
console.log(`${num1} - ${num2} = ${subtracao(num1, num2)}`);
console.log(`${num1} X ${num2} = ${multiplicacao(num1, num2)}`);
console.log(`${num1} / ${num2} = ${divisao(num1, num2)}`);
