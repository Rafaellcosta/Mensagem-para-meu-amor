function mostrarPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}
function criarCorações() {
    for (let i = 0; i < 15; i++) {
        let coracao = document.createElement("div");
        coracao.classList.add("heart");
        coracao.style.left = `${Math.random() * 100}vw`;
        coracao.style.animationDuration = `${Math.random() * 5 + 3}s`;
        document.body.appendChild(coracao);
    }
}

criarCorações();
