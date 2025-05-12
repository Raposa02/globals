
    function toggleMenu() {
    document.getElementById("menuLateral").classList.toggle("hide");
}

    function mostrarTela(id) {
    document.querySelectorAll('.tela').forEach(tela => tela.classList.remove('ativa'));
    document.getElementById(id).classList.add('ativa');
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('ativo'));
    document.querySelector(`nav a[href="#${id}"]`).classList.add('ativo');
}

    function enviarCodigo(event) {
    event.preventDefault();
    alert("Código enviado para seu e-mail ou telefone.");
    mostrarTela('verificar');
}

    function validarCodigo(event) {
    event.preventDefault();
    const codigo = event.target.querySelector('input').value;
    if (codigo === "123456") {
    alert("Código verificado com sucesso!");
} else {
    mostrarTela('erro');
}
}

    function respostaRobo() {
    alert("Javis: Em breve vou responder dinamicamente!");
}
