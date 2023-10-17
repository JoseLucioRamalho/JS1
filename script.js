alert("Iremos realizar algumas operações matemáticas")
let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma dos dois números é: ' + sum)
alert('Subtração dos dois números é: ' + sub)
alert('Multiplicação dos dois números é: ' + multi)
alert('Divisão dos dois núemros é: ' + div)
alert('Resto da Divisão dos dois números são: ' + restDiv) 

if (sum % 2 === 0) {
  alert('A soma dos números é par.')
} else {
  alert('A soma dos números é ímpar.')
}

if (firstNumber === secondNumber) {
  alert('Os números inseridos são iguais.')
} else {
  alert('Os dois números inseridos são diferentes.')
}


