// exercício 06
let salario = parseFloat(prompt('Informe o salário'));
let vt = salario * 0.06;
let inss;
if (salario < 2500){
    inss = salario * 0.08;
} else {
    inss = salario * 0.11;
}
console.log("Desconto do vt: ",vt);
console.log("Desconto do inss: ",inss);
