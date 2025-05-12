document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formNovoDoc");
    const preview = document.getElementById("preview");
    const canvas = document.getElementById("pdfPreviewCanvas");
    const ctx = canvas.getContext("2d");
    const carrosselContainer = document.getElementById("carrosselContainer");

    form.addEventListener("change", () => {
        document.getElementById("prevTitulo").innerText = form.titulo.value;
        document.getElementById("prevDesc").innerText = form.descricao.value;
        document.getElementById("prevDataHora").innerText = form.prazo.value + " às " + form.hora.value;
        document.getElementById("prevLocal").innerText = form.local.value;
        document.getElementById("prevMetodo").innerText = form.assinatura.value;
        document.getElementById("prevEmail").innerText = form.emailCliente.value;

        const arquivo = form.arquivoDoc.files[0];
        if (arquivo && arquivo.type === "application/pdf") {
            document.getElementById("prevArquivo").innerText = arquivo.name;
            preview.style.display = "block";

            const fileReader = new FileReader();
            fileReader.onload = function () {
                const typedarray = new Uint8Array(this.result);

                pdfjsLib.getDocument(typedarray).promise.then(function (pdf) {
                    pdf.getPage(1).then(function (page) {
                        const viewport = page.getViewport({ scale: 1.5 });
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        const renderContext = {
                            canvasContext: ctx,
                            viewport: viewport,
                        };
                        canvas.style.display = "block";
                        page.render(renderContext);
                    });
                });
            };
            fileReader.readAsArrayBuffer(arquivo);
        } else {
            canvas.style.display = "none";
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Aqui você pode adicionar a lógica para enviar o formulário ao servidor

        // Após o envio, adicionar o card ao carrossel
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <h4>${form.titulo.value}</h4>
      <p>${form.descricao.value}</p>
      <p><strong>Cliente:</strong> ${form.emailCliente.value}</p>
    `;
        carrosselContainer.appendChild(card);

        // Limpar o formulário
        form.reset();
        preview.style.display = "none";
        canvas.style.display = "none";
    });
});
