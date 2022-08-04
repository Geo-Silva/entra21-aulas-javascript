console.group("Ler conteúdos com jQuery")
console.log($("#paragrafo_1"));
console.log($("#paragrafo_1").text());
console.groupEnd()

console.group("Alterar conteúdos com jQuery")
/*# para pegar o ID e $ para ativar o jQuery, todas as propriedades dele*/
$("#paragrafo_2").text("Conteúdo escrito com o jQuery")
console.log($("#paragrafo_2").text());

console.groupEnd()

console.group("Ler vários conteúdos com o jQuery")

let lista = $("p")
console.log(lista);
console.log(lista.text());

/*isso é uma função, esse é um forEach*/
$("p").each(function () {
    console.log(this.textContent)
    /*Vai passar por todas as linhas e ler elas*/
})

console.groupEnd()

console.group("Escrever vários conteúdos com jQuery")

$("li").text("ul>li - escrito com jQuery")

console.groupEnd()

console.group("Criar elementos com jQuery")
/*cria um elemento chamado button, com uma configuração inicial em {}*/
$("<button>", { /*a chave significa um objeto*/
    text: "clique aqui", /*nome do atributo + valor dele*/
    class: "btn btn-primary"
}).appendTo("body") /*vai pegar esses atributos e colocar no "body"*/

$("body").append( /*vai inserir no body esse atributo com esse conteúdo*/
    $("<br>"), /*para dar um enter na página e separar o conteúdo*/
    $("<b>", { text: "texto em negrito" }),
    $("<br>"),
    $("<i>", { text: "texto em itálico" })
)

console.groupEnd()

console.group("Mais de um item com jQuery");
$("<ul>").append(
    $("<li>", {
        text: "Primeiro item"

    }),
    $("<li>", {
        text: "Segundo item"

    }),
    $("<li>", {
        text: "Terceiro item"

    })
).appendTo("#paragrafo_3")

console.groupEnd();

console.log('====================================================================')

console.group('Exercise writen more iten')

// One table
// Thead
//th
//th
//th

// Tbody
//tr
//td
//td
//td

//tr
//td
//td
//td

$("<table>", {
    class: "table-bordered"
}).append(
    $("<thead>").append(
        $("<th>", {
            text: "Dia",
            class: "bg-primary border:1px"
        }),
        $("<th>", {
            text: "Mês",
            class: "bg-warning"
        }),
        $("<th>", {
            text: "Ano",
            class: "bg-danger"
        })
    ),
    $("<tbody>").append(
        $("<tr>").append(
            $("<td>", {
                text: "16",
                class: "bg-primary"
            }),
            $("<td>", {
                text: "07",
                class: "bg-warning"
            }),
            $("<td>", {
                text: "2002",
                class: "bg-danger"
            })
        ),
        $("<tr>").append(
            $("<td>", {
                text: "14",
                class: "bg-primary"
            }),
            $("<td>", {
                text: "02",
                class: "bg-warning"
            }),
            $("<td>", {
                text: "2001",
                class: "bg-danger"
            })
        ),
        $("<tr>").append(
            $("<td>", {
                text: "03",
                class: "bg-primary"
            }),
            $("<td>", {
                text: "03",
                class: "bg-warning"
            }),
            $("<td>", {
                text: "1969",
                class: "bg-danger"
            })
        )
    ),
    $("<br>")
).appendTo("#tabela")

console.groupEnd()

console.group('Eventos de clique em qualquer lugar');

$("p").on("click", function() {
    alert("Opa!")
})

$("li").on("click", function() {
    console.warn("Epa!")
})

console.groupEnd();

/*
exercicio
No html ter um button com id=add
no JS ter um evento de clique para quem tenha o id add
nesse evento deve ser inserido no HTML um novo P com class alert alert-danger
depois
ter outro button no HTML com o id limpar
e no JS um evento de clique para quem tem o id = limpar
para remover todos os elementos com class alert
$(".alert").remove()
*/

console.group('Exercício II');

$("#add").on("click", function(){
    $("<p>", {text:"Novo Item", class:"alert alert-success"}).appendTo("body")
})

$("#remove").on("click", function(){
    
    $(".alert").remove()
    
})

console.groupEnd();