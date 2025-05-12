
    fetch('navbar.html')
    .then(response => response.text())
    .then(data=>{
    document.getElementById('menu').innerHTML=data;
})
    const metodos = [
    {
        id: "token",
        nome: "Token (SMS)",
        descricao: "Um código será enviado para seu número de celular.",
        compatibilidade: true
    },
    {
        id: "biometria",
        nome: "Biometria",
        descricao: "Use o leitor de impressão digital do dispositivo.",
        compatibilidade: () => 'credentials' in navigator && 'get' in navigator.credentials
    },
    {
        id: "face",
        nome: "Reconhecimento Facial",
        descricao: "Use a câmera para validar seu rosto.",
        compatibilidade: () => !!navigator.mediaDevices?.getUserMedia
    },
    {
        id: "voz",
        nome: "Reconhecimento de Voz",
        descricao: "Fale uma frase de autorização para se autenticar.",
        compatibilidade: () => 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window
    },
    {
        id: "gesto",
        nome: "Gesto Facial (Sorriso)",
        descricao: "Sorria para a câmera para validar sua identidade.",
        compatibilidade: () => !!navigator.mediaDevices?.getUserMedia
    },
    {
        id: "qr",
        nome: "QR Code",
        descricao: "Escaneie um QR com seu celular para autenticar.",
        compatibilidade: true
    },
    {
        id: "assinatura",
        nome: "Assinatura Manual",
        descricao: "Desenhe sua assinatura com o dedo ou mouse.",
        compatibilidade: true
    }
    ];

    function redirecionar(metodo) {
    localStorage.setItem("metodoAutenticacao", metodo);
    window.location.href = `autenticacao-${metodo}.html`;
}

    async function verificarCompatibilidade() {
    const container = document.getElementById("opcoesAutenticacao");

    metodos.forEach(async metodo => {
    const compativel = typeof metodo.compatibilidade === 'function'
    ? await metodo.compatibilidade()
    : metodo.compatibilidade;

    if (compativel) {
    const card = document.createElement("div");
    card.className = "autenticacao-card";
    card.onclick = () => redirecionar(metodo.id);
    card.innerHTML = `<h4>${metodo.nome}</h4><p>${metodo.descricao}</p>`;
    container.appendChild(card);
}
});
}

    verificarCompatibilidade();
