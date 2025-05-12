
    function simularReconhecimento() {

    document.querySelector('.javis-msg').textContent = "Reconhecendo...";
    setTimeout(() => {
    alert("Rosto reconhecido com sucesso! Redirecionando...");
    window.location.href = "cliente.html";
}, 2000);
}
    function volta() {

    document.querySelector('.javis-msg').textContent = "voltando...";
    setTimeout(() => {

    window.location.href = "metodo.html";
}, 1000);
}

    navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => document.getElementById("camera").srcObject = stream)
    .catch(() => alert("Câmera não disponível."));

