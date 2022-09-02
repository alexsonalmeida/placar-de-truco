const teamName = document.querySelector(".nomeEquipe") as HTMLBodyElement
const valor = document.location.href
const vencedor = valor.split("=")[1]

window.addEventListener("load", () => {
    showWinner()
})

const showWinner = () => {
    if (vencedor === "us") teamName.innerHTML = "Nós vencemos!"
    else teamName.innerHTML = "Eles venceram!"
}
