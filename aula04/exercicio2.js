// ler os números
let num1 = parseInt(prompt('Informe o primeiro número'));
let num2 = parseInt(prompt('Informe o segundo número'));
// ler a operação
let op = prompt('Informe qual operação <+,-,*,/>:');
if (op == '+'){
    console.log('Soma = ', num1 + num2);
} else if (op == '-'){
    console.log('Subtração = ', num1 - num2);
} else if (op == '*'){
    console.log('Multiplicação = ', num1 * num2);
} else if (op == '/'){
    console.log('Divisão = ', num1 / num2);
} else {
    console.log('Operação inválida');
}
