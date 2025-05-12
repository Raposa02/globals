

const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');
const items = [
    { name: 'Home', link: 'cliente.html' },
    { name: 'Javis Chat', link: 'chat.html' },
    { name: 'Perfil', link: 'perfil.html' },
    { name: 'Autenticação', link: 'metodo-autenticacao.html' },
    { name: 'Ajuda', link: 'ajuda.html' },
    { name: 'Feedback', link: 'feedback.html' }
];

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const value = searchInput.value.toLowerCase();
        suggestions.innerHTML = '';
        if (value) {
            const filtered = items.filter(i => i.name.toLowerCase().includes(value));
            filtered.forEach(item => {
                const a = document.createElement('a');
                a.href = item.link;
                a.textContent = item.name;
                suggestions.appendChild(a);
            });
            suggestions.style.display = 'block';
        } else {
            suggestions.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target)) {
            suggestions.style.display = 'none';
        }
    });
}

function toggleNotificacoes() {
    document.getElementById('notificacoesOffcanvas')?.classList.toggle('active');
}

function toggleMobileMenu() {
    document.getElementById('hamburguer')?.classList.toggle('active');
}
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