document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const pin = document.getElementById('PIN').value.trim();

    fetch('http://localhost:63342', {
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