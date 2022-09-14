function soma (num1, num2){
    console.log(`${num1} + ${num2} = ${num1+num2}`)
}

function maiorQue (num1, num2){
    console.log(`O número ${num1} é maior que ${num2}: ${num1>num2}`)
}

function parOuNao (num) {
    if(num % 2 === 0){
        console.log(`O ${num} é um número par!`)
    }else{
        console.log(`O ${num} não é um número par!`)
    }
}

function stringTamanho (string){
    console.log(`A string \'${string.toUpperCase()}\' tem ${string.length} caracteres!`)
}

const num1 = +prompt("Digite um número:")
const num2 = +prompt("Digite outro número:")
const frase = prompt("Digite uma palavra ou frase que te represente:")

soma(num1, num2)

maiorQue(num1, num2)

parOuNao(num1)
parOuNao(num2)

stringTamanho(frase)