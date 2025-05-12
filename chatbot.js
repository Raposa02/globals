const chatWindow = document.getElementById('chatWindow');
const input = document.getElementById('mensagem');

function enviarParaJavis() {
    const texto = input.value.trim();
    if (!texto) return;


    adicionarMensagem("Você", texto, "user");


    input.value = '';


    setTimeout(() => {
        const resposta = gerarResposta(texto.toLowerCase());
        adicionarMensagem("Javis ", resposta, "bot");
    }, 1000);
}

function adicionarMensagem(remetente, texto, tipo) {
    const msg = document.createElement('div');
    msg.classList.add('mensagem', tipo);
    msg.innerHTML = `<strong>${remetente}:</strong> ${texto}`;
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function gerarResposta(pergunta) {
    if (pergunta.includes("ola") || pergunta.includes("oi")) {
        return "Olá! 👋 Como posso ajudar você hoje?";
    }
    if (pergunta.includes("documento")) {
        return "📄 Você pode enviar documentos na seção 'Enviar Documento para Assinatura'. Precisa de ajuda com isso?";
    }
    if (pergunta.includes("problema") || pergunta.includes("erro")) {
        return "😕 Sinto muito por isso. Pode me dar mais detalhes para que eu possa ajudar?";
    }
    if (pergunta.includes("autenticar") || pergunta.includes("assinar")) {
        return "🖊️ Vá até a aba 'Autenticação' para iniciar o processo de assinatura.";
    }
    if (pergunta.includes("obrigado") || pergunta.includes("valeu")) {
        return "De nada! 😊 Sempre à disposição.";
    }

    // Resposta padrão
    return "🤔 Hmm... ainda estou aprendendo! Poderia reformular ou ser mais específico?";
}
