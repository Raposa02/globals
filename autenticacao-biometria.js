<script>
    async function redirecionar(metodo) {
    if (metodo === 'biometria') {
    iniciarBiometria();
} else {
    localStorage.setItem('metodoAutenticacao', metodo);
    window.location.href = 'autenticacao.html';
}
}

    async function iniciarBiometria() {
    if (!window.PublicKeyCredential) {
    alert('Seu navegador não suporta autenticação biométrica.');
    return;
}

    const publicKey = {
    challenge: new Uint8Array(32),
    timeout: 60000,
    userVerification: 'required',
    allowCredentials: []
};

    try {
    const assertion = await navigator.credentials.get({ publicKey });

    const response = await fetch('http://localhost:8080/autenticar/biometria', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({credencial: assertion})
});

    const resultado = await response.text();
    alert(resultado);
} catch (err) {
    console.error(err);
    alert('Falha na autenticação biométrica.');
}
}
</script>
