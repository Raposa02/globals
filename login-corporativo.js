document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const pin = document.getElementById('PIN').value.trim();

    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email, senha: pin })
    })
        .then(res => res.text())
        .then(tipo => {
            if (tipo === 'admin') {
                localStorage.setItem('tipoUsuario', 'admin');
                window.location.href = 'tela_adminp2.html';
            } else if (tipo === 'cliente') {
                localStorage.setItem('tipoUsuario', 'cliente');
                window.location.href = 'cliente.html';
            } else {
                alert('Usuário não encontrado. Crie uma conta.');
                window.location.href = 'cadastro.html';
            }
        })
        .catch(err => console.error('Erro:', err));
});

document.addEventListener('DOMContentLoaded', () => {
    carregarDocumentosPendentes();
    carregarHistorico();
});

function carregarDocumentosPendentes() {
    const carrossel = document.getElementById('carrosselDocumentos');
    carrossel.innerHTML = '';

    const documentos = [
        { id: 1, titulo: 'Contrato 1', descricao: 'Assinar até 24/04/2025', local: 'São Paulo', hora: '10:00', assinatura: 'Token', status: 'pendente' },
        { id: 2, titulo: 'Contrato 2', descricao: 'Assinar até 30/04/2025', local: 'Rio de Janeiro', hora: '14:00', assinatura: 'Biometria', status: 'pendente' }
    ];

    documentos.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'card-documento pendente';
        card.innerHTML = `
      <h4>${doc.titulo}</h4>
      <p style="display:none">
        ${doc.descricao}<br>
        Local: ${doc.local}<br>
        Hora: ${doc.hora}<br>
        Assinatura: ${doc.assinatura}
      </p>
      <button class="btn-individual" onclick="assinarDocumento(${doc.id})">Assinar Documento</button>
    `;

        card.addEventListener('mouseover', () => card.querySelector('p').style.display = 'block');
        card.addEventListener('mouseout', () => card.querySelector('p').style.display = 'none');

        carrossel.appendChild(card);
    });
}

function assinarDocumento(idDocumento) {
    localStorage.setItem('documentoSelecionado', idDocumento);
    window.location.href = 'metodo-autenticacao.html';
}

function abrirChat() {
    const chat = document.getElementById('chatBox');
    chat.style.display = chat.style.display === 'block' ? 'none' : 'block';
}

function enviarMensagem() {
    const textarea = document.querySelector('.chat-box textarea');
    const msg = textarea.value.trim();
    if (msg) {
        alert('IA: Obrigado pela sua mensagem. Estamos analisando!');
        textarea.value = '';
    }
}

