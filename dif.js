document.addEventListener('DOMContentLoaded', function() {
    const tipoUsuario = localStorage.getItem('tipoUsuario');

    if (tipoUsuario === 'admin') {
        const menu = document.querySelector('.menu');
        menu.innerHTML = `
          <a href="tela-admin.html">Criar Documento</a>
          <a href="tela_adminp2.html">Início</a>
          <a href="perfil.html">Perfil</a>
          <a href="metodo-autenticacao.html">Autenticações</a>
      `;
    }
});
