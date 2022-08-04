console.group("Weird");

$("body").append(
    $("<header>", {class: "row"}).append(
        $("<section>", {class: "col"}).append(
            $("<div>", {class: "card"}).append(
                $("<div>", {class: "card-body"}).append(
                    $("<h1>", {text: "Na real não tem nada demais mesmo :P"})
                )
            )
        )
    ),
    $("<main>", {class: "row"}).append(
        $("<section>", {class: "col-3"}).append(
            $("<div>", {class: "card"}).append(
                $("<div>", {class: "card-body"}).append(
                    $("<a>", {href: "/Aula05.html", text: "Voltar para a outra página"})
                )
            )
        ),
        $("<section>", {class: "col"}).append(
            $("<div>", {class: "card"}).append(
                $("<div>", {class: "card-body"}).append(
                    $("<p>", {text: "Realmente, nada de mais aqui...vou nem dizer muita coisa"})
                ),
                $("<div>", {class: "card-footer"}).append(
                    $("<p>", { text: "Geovani da Silva, 2022, Todos os Direitos Reservados" })
                )
            )
        )
    )
)

console.groupEnd();