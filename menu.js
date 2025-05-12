function mostrarTela(id) {
    document.querySelectorAll('.tela').forEach(tela => tela.classList.add('oculto'));
    const telaAtiva = document.getElementById(id);
    telaAtiva.classList.remove('oculto');
    telaAtiva.classList.add('animar');
    setTimeout(() => telaAtiva.classList.remove('animar'), 600);
}

// Simular envio do código
function enviarCodigo(event) {
    event.preventDefault();
    mostrarTela('carregando');
    setTimeout(() => mostrarTela('verificar-codigo'), 2000);
}

// Simular validação do código
function validarCodigo(event) {
    event.preventDefault();
    mostrarTela('carregando');
    setTimeout(() => {
        const codigo = event.target.codigo.value;
        if (codigo === '123456') {
            alert('Código verificado com sucesso!');
            mostrarTela('conversa');
        } else {
            mostrarTela('erro');
        }
    }, 2000);
}

// Navegação do menu lateral
const links = document.querySelectorAll('.menu-lateral nav a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const destino = link.getAttribute('href').substring(1);
        links.forEach(l => l.classList.remove('ativo'));
        link.classList.add('ativo');
        mostrarTela(destino);
    });
});