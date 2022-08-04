console.group("Site pelo jQuery");

$("body").append(
    $("<header>", { class: "row" }).append(
        $("<section>", { class: "col" }).append(
            $("<div>", { class: "card" }).append(
                $("<div>", { class: "card-body" }).append(
                    $("<h1>", { text: "Bem-vindo a um site muito louco!" })
                ),
                $("<div>", { class: "card-footer" }).append(
                    $("<a>", { href: "/paginaweird.html", text: "Essa página é um pouco diferente..." })
                )
            )
        )
    ),
    $("<main>", { class: "row" }).append(
        $("<section>", { class: "col" }).append(
            $("<div>", { class: "card" }).append(
                $("<div>", { class: "card-body" }).append(
                    $("<p>", { text: "Aqui eu deveria encher de coisas, mas para ser sincero, eu não sei exatamente o que digitar, por essa razão eu vou falar apenas..." }),
                    $("<b>", { text: "Carro mal alinhado na página" }),
                    $("<br>"),
                    $("<img>", { src: "/capaphonk.jpg" })
                ),
                $("<div>", { class: "card-footer" }).append(
                    $("<p>", { text: "Geovani da Silva, 2022, Todos os Direitos Reservados" }),
                    $("<p>", { text: "Não que eu me orgulhe disso..." })
                )
            )
        )
    )

)


console.groupEnd();

