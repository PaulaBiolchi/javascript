/**exercício 1 */
let meuDecimal = 1.3;
let meuInteiro = 10;
let meuNome = "Paula"

console.log(meuDecimal);
console.log(meuInteiro);
console.log(meuNome);

//*exercício 2*/
let meuNumero = 32;
console.log(typeof meuNumero);

//exercício 3*/
let verdadeiro = true;
console.log(typeof verdadeiro);

//*exercício 4*/
let meuTexto = "Olá";
console.log(typeof meuTexto);

//* exercício 5*/
let v = true;
let f = false;

console.log(v , f);

//*exercício 6*/
let nulo = null;
console.log(nulo);

//*exercício 7*/
let semValor;
console.log(semValor);



//*atividade praticando operadores*/

/**Exercício 1
Declare uma variável chamada num1 e atribua a ela o valor 5. Em seguida, declare uma variável chamada num2 e atribua a ela o valor 10. Some as duas variáveis e imprima o resultado no console. */

let num1 = 5;
let num2 = 10;
let soma = num1 + num2;
console.log(`a soma é = ${soma}`);

/**Exercício 2
Declare uma variável chamada pi e atribua a ela o valor de 3.14. Em seguida, declare uma variável chamada raio e atribua a ela o valor 5. Calcule o comprimento da circunferência com base no raio e imprima o resultado no console. (dica: multiplique o raio pelo valor de pi e pelo número dois) */

let pi = 3.14;
let raio = 5;

console.log(raio*pi*2);

/**Exercício 3
Declare uma variável chamada temperatura e atribua a ela o valor 30. Em seguida, converta a temperatura de Celsius para Fahrenheit e imprima o resultado no console. (dica: para converter de Celsius para Fahrenheit, basta multiplicar a temperatura por nove, após isso dividir o valor por cinco e somar trinta e dois) */

let temperatura = 30;
let Fahrenheit = (temperatura*9)/5+32;
console.log(Fahrenheit);

/**Exercício 4
Declare uma variável chamada nota1 e atribua a ela o valor 7. Em seguida, declare uma variável chamada nota2 e atribua a ela o valor 9. Calcule a média das duas notas e imprima o resultado no console. */

let nota1 = 7;
let nota2 = 9;
let media = (nota1 + nota2)/2;
console.log(media);

/**Exercício 5
Declare uma variável chamada largura e atribua a ela o valor 10. Em seguida, declare uma variável chamada comprimento e atribua a ela o valor 20. Calcule a área do retângulo e imprima o resultado no console */

let largura = 10;
let comprimento = 20;
let areaRetangulo = comprimento*largura;
console.log(areaRetangulo);

/**Exercício 6
Declare uma variável chamada salarioBruto e atribua a ela o valor 5000. Em seguida, calcule e imprima o salário líquido, considerando um desconto de 10% para impostos. */

let salarioBruto = 5000;
let salarioliquido = salarioBruto - (salarioBruto*0.1);
console.log(salarioliquido);

/**Exercício 7
Declare uma variável chamada horasTrabalhadas e atribua a ela o valor 40. Em seguida, declare uma variável chamada valorHora e atribua a ela o valor 50. Calcule o salário bruto de uma pessoa e imprima o resultado no console. */

let horasTrabalhadas = 40;
let valorHora = 50;
let sBruto = horasTrabalhadas*valorHora;

console.log(sBruto);