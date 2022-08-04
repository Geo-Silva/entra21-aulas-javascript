console.log('Hello World'); //o console aceita parâmetros para exibir em Log (console)
console.log('Geovani ' + 19 + ' anos'); //é possível concatenar textos e variáveis, igual no Java
console.log('Geovani', 19, 'anos'); //o console aceita infinitos parâmetros, basta separar por vírgula

let nome = "Geovani"; //let cria uma variavel com escopo limitado
var sobrenome = "da Silva"; //var cria uma variavel que continua existindo mesmo depois do escopo

console.log(nome);
console.log('Meu nome é ' + nome);
console.log('Meu nome é ', nome);
console.log('Meu nome é ' + nome + ' mas me chamam também de \'Geo\'');
console.log(`Meu nome é ${nome}`);
console.log("No momento nome é do tipo " + typeof (nome)); //ele irá dizer de qual tipo é a variável
nome = 10; //alterei a variável para numérico
console.log("No momento nome é do tipo " + typeof (nome)); //então aqui será number, ao invés de string
nome = false; //passou para boolean
console.log("No momento nome é do tipo " + typeof (nome)); //agora é um boolean
nome = "Geovani"; //passou para string novamente
console.log("No momento nome é do tipo " + typeof (nome)); //voltou a ser uma string
let idade = 19;
let altura = 1.75;
console.log(`A variável idade é do tipo ${typeof (idade)} e a variável altura é do tipo ${typeof (altura)}`);
//em JS não existe byte, int, float, variáveis numéricas serão do tipo 'number'
// let mensagem = prompt('Diga algo rapaz');
// let interromper = prompt('Estou interrompendo?')
// console.log('Você disse ' + mensagem);
// console.log('E essa informação é do tipo ' + typeof(mensagem));

console.log('Os operadores aritméticos são os mesmos que no Java');

console.log('Somando ' + (1 + 5));
console.log('Subtraindo ' + (7 - 1));
console.log('Multiplicando ' + (3 * 2));
console.log('Dividindo ' + (12 / 2));

idade = prompt('Sua idade');

if (idade > 18) {

    console.log('É maior de idade');

} else {

    console.log('É menor de idade');

}

altura = prompt('Sua altura');

if (altura < 1.5) {

    console.log('Anão praticamentekkkkk');

} else if (altura > 1.90) {

    console.log('Maluco é um avatarkkkkkk');

} else {

    console.log('Tá aceitável tua altura');

}

let resposta = (altura < 2 ? 'Normal' : 'Avatar');
console.log('Sua altura é ' + resposta);

resposta = prompt('O que você prefere? 1 para Sorvete e 2 para Picolé')

switch (resposta) {

    case '1':

        console.log('Gordo');

        break;

    case '2':

        console.log('Nham nham');

        break;

    default:

        console.log('Um ou dois cara...');

        break;

}


