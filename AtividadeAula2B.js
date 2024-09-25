let numeroCurtidas = 0;

function curtir() {
    numeroCurtidas++;
    atualizarCurtidas();
}

function descurtir() {
    if (numeroCurtidas > 0) {
        numeroCurtidas--;
    }
    atualizarCurtidas();
}

function atualizarCurtidas() {
    document.getElementById("curtidas").innerText = "Curtidas: " + numeroCurtidas;
}