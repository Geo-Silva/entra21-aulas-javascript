
console.warn("Read More");
let paragrafos = [...document.getElementsByTagName("p")]
console.log("Lendo todos os parágrafos", paragrafos);

paragrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent)
});

console.warn("write");
let escrita = document.getElementById("paragrafo_escrever")

