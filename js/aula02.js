procedimento();
//essa função está sendo chamada e não precisa de argumentos
bemVindo("Geovani");
bemVindo(true);
bemVindo(30); //a variável é um let, então pode-se colocar quaisquer valor 
bemVindo(bemVindo);
bemVindo(1.78);

login("Geovani", "58917");

maiorDeIdade(15);

let resultado = maiorDeIdade(16);
console.log(resultado);

console.log(maiorDeIdade(18));

let concatenado = maiorDeIdade(10) + maiorDeIdade(20);
console.log(concatenado);

console.log(calcularMedia(8, 9, 10));

console.log(verificarSituacao(9));

console.log(verificarSituacao(calcularMedia(8, 9, 10)));

function procedimento() { //declaração

    console.log("Esse tipo de função sempre executa da mesma forma, porque não tem parâmetros para deixá-lo dinâmico");

    console.warn("Essa função também não retorna nada");
}

function bemVindo(nome) { //em JS, toda função é uma variável, de certa forma
    console.log(typeof (nome));
    console.warn("Bem vindo, " + nome);
}

function login(userName, password) {

    console.error("O usuário " + userName + ", cuja senha é " + password + ", está inadinplente, não pode entrar");

}

function maiorDeIdade(idade) {

    if (idade < 18) {

        return "Menor de Idade";

    } else {

        return "Maior de Idade";

    }

}

function calcularMedia(notaUm, notaDois, notaTres) {

    return (notaUm + notaDois + notaTres) / 3

}

function verificarSituacao(media) {

    return media >= 7 ? "Aprovado" : "Reprovado"

}

//para definir um array, colocamos em uma function e usamos o let variavel =[key, value]

function definirArray() {

    let listaVazia = [];
    console.log(listaVazia);

    let nomes = ["Geovani", "Algumacoisa"];
    console.log(nomes);
}

definirArray();