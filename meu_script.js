const documentos = [
    { id: 1, nome: "Documento 1", data: "02/09", hora: "19:30", local: "Av. Paulista", status: "pendente", prazo: new Date('2025-04-22T19:31:00') },

];

function renderizarDocumentos() {
    const lista = document.getElementById("listaDocumentos");
    lista.innerHTML = "";
    documentos.forEach(doc => {
        if (doc.status === 'pendente') {
            lista.innerHTML += `
        <div class="documento">
          <p>${doc.data} - <strong>${doc.nome}</strong></p>
          <p>${doc.hora} ${doc.local}</p>
          <button onclick="assinar(${doc.id})">Assinar</button>
        </div>
      `;
        }
    });
}

function renderizarHistorico() {
    const lista = document.getElementById("historicoDocumentos");
    lista.innerHTML = "";
    documentos.forEach(doc => {
        const statusClass = doc.status;
        const botaoDownload = doc.status === 'assinado' ? `<button onclick=\"baixarDocumento('${doc.nome}')\">Baixar</button>` : '';
        lista.innerHTML += `
      <div class="documento ${statusClass}">
        <p>${doc.data} - <strong>${doc.nome}</strong> - <span class="${statusClass}">${doc.status.toUpperCase()}</span></p>
        <p>${doc.hora} ${doc.local}</p>
        ${botaoDownload}
      </div>
    `;
    });
}

function assinar(id) {
    const doc = documentos.find(d => d.id === id);
    if (doc) doc.status = 'assinado';
    renderizarDocumentos();
    renderizarHistorico();
}

function assinarTodos() {
    documentos.forEach(doc => {
        if (doc.status === 'pendente') doc.status = 'assinado';
    });
    renderizarDocumentos();
    renderizarHistorico();
}

function verificarVencidos() {
    const agora = new Date();
    documentos.forEach(doc => {
        if (doc.status === 'pendente' && agora > doc.prazo) {
            doc.status = 'vencido';
        }
    });
}

function baixarDocumento(nome) {
    const blob = new Blob([`Conteúdo simulado do ${nome}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nome + ".txt";
    a.click();
    URL.revokeObjectURL(url);
}

function abrirChat() {
    const box = document.getElementById("chatBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
}

function enviarMensagem() {
    alert("Mensagem enviada! (funcionalidade futura com IA)");
}

verificarVencidos();
renderizarDocumentos();
renderizarHistorico();



document.getElementById("formDoc").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const local = document.getElementById("local").value;
    const prazo = new Date(document.getElementById("prazo").value);

    documentos.push({
        id: documentos.length + 1,
        nome, data, hora, local, prazo,
        status: "pendente"
    });

    renderizarDocumentos();
    renderizarHistorico();
    this.reset();
});
