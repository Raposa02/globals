function mudarExpressao(expressao) {
    const robo = document.getElementById("javis");
    robo.className = "javis " + expressao;
}

// Exemplo: mudar para confuso depois de 2 segundos
setTimeout(() => mudarExpressao("confuso"), 2000);
