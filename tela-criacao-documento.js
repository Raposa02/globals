
    const form = document.getElementById("formNovoDoc");
    const preview = document.getElementById("preview");
    const canvas = document.getElementById("pdfPreviewCanvas");
    const ctx = canvas.getContext("2d");
    const inputArquivo = document.getElementById("arquivoDoc");

    function atualizarPreview() {
    const titulo = form.titulo.value.trim();
    const descricao = form.descricao.value.trim();
    const prazo = form.prazo.value;
    const hora = form.hora.value;
    const local = form.local.value.trim();
    const metodo = form.assinatura.value;
    const email = form.emailCliente.value.trim();
    const arquivo = inputArquivo.files[0];

    // Atualiza visualmente os campos do card
    document.getElementById("prevTitulo").innerText = titulo;
    document.getElementById("prevDesc").innerText = descricao;
    document.getElementById("prevDataHora").innerText = prazo && hora ? prazo + " às " + hora : "";
    document.getElementById("prevLocal").innerText = local;
    document.getElementById("prevMetodo").innerText = metodo;
    document.getElementById("prevEmail").innerText = email;
    document.getElementById("prevArquivo").innerText = arquivo ? arquivo.name : "";

    const deveMostrar =
    (titulo || descricao || prazo || local || metodo || email) &&
    arquivo && arquivo.type === "application/pdf";

    preview.style.display = deveMostrar ? "block" : "none";
    canvas.style.display = "none";
}

    inputArquivo.addEventListener("change", function () {
    const file = this.files[0];

    if (file && file.type === "application/pdf") {
    const reader = new FileReader();
    reader.onload = function () {
    const typedarray = new Uint8Array(this.result);

    pdfjsLib.getDocument(typedarray).promise.then(function (pdf) {
    pdf.getPage(1).then(function (page) {
    const scale = 1.5;
    const viewport = page.getViewport({ scale: scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
    canvasContext: ctx,
    viewport: viewport,
};
    canvas.style.display = "block";
    page.render(renderContext);


    page.getTextContent().then(function (textContent) {
    const textItems = textContent.items.map(item => item.str).join(" ");
    const textoLimpo = textItems.trim();

    if (textoLimpo) {

    if (!form.titulo.value) form.titulo.value = textoLimpo.slice(0, 40);
    if (!form.descricao.value) form.descricao.value = textoLimpo.slice(0, 150);
    atualizarPreview();
}
});
});
});
};
    reader.readAsArrayBuffer(file);
} else {
    canvas.style.display = "none";
    preview.style.display = "none";
}
});

    form.addEventListener("input", atualizarPreview);
    fetch('navbar.html')
    .then(response => response.text())
    .then(data=>{
    document.getElementById('menu').innerHTML=data;
})


