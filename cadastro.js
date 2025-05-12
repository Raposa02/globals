document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;

    const confirm = document.getElementById('confirmacoes');
    confirm.innerHTML = `<p>Verificando email (${email}) e telefone (${telefone})...</p>`;

    setTimeout(() => {
        confirm.innerHTML = '<p style="color: green">Cadastro realizado com sucesso.</p>';
    }, 2000);
});
const usuarios = [
    {

        email: "",
        senha: "",
        tipo: "",
    },
    {

        email: "",
        senha: "",
        tipo: ""
    }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("PIN").value;


    const usuario = usuarios.find(user =>
        user.cpf === cpf && user.email === email && user.senha === senha
    );

    if (usuario) {
        if (usuario.tipo === "corporativo") {
            window.location.href = "tela-admin.html";
        } else {
            window.location.href = "tela-cliente.html";
        }
    } else {
        alert("CPF, e-mail ou senha incorretos.");
    }
});

