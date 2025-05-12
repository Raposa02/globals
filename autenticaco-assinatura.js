

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let desenhando = false;
    let modoDigitado = false;

    canvas.addEventListener('mousedown', () => desenhando = true);
    canvas.addEventListener('mouseup', () => {
    desenhando = false;
    ctx.beginPath();
});
    canvas.addEventListener('mousemove', desenhar);
    canvas.addEventListener('mouseout', () => desenhando = false);

    function desenhar(e) {
    if (!desenhando || modoDigitado) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

    function limparCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}

    function enviarAssinatura() {
    if (modoDigitado) {
    const valor = document.getElementById('assinaturaInput').value.trim();
    if (valor === "") {
    alert("Digite sua assinatura.");
} else {
    alert(`Assinatura digitada enviada: ${valor}`);
}
} else {
    const dataURL = canvas.toDataURL();
    alert("Assinatura desenhada enviada! (simulação)");
    console.log(dataURL);
}
}

    function alternarModo() {
    modoDigitado = !modoDigitado;
    document.getElementById("modoDigitado").style.display = modoDigitado ? "block" : "none";
    canvas.style.display = modoDigitado ? "none" : "block";
}

    function mostrarPreview() {
    const texto = document.getElementById('assinaturaInput').value;
    document.getElementById('previewAssinatura').textContent = texto;
}
