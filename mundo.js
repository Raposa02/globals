

    function toggleMobileMenu(){
    document.getElementById('mobileMenu').classList.toggle('active');
}


    const chatbox = document.getElementById("chatbox");
    function toggleChatbox() {
    chatbox.style.display = chatbox.style.display === "block" ? "none" : "block";
}

    function enviarPergunta() {
    const texto = chatbox.querySelector("textarea").value;
    if (texto.trim()) {
    alert("Javis responderá: " + texto);
    chatbox.querySelector("textarea").value = "";
}
}


    document.addEventListener('click',function (e){
    if (e.target.classList.contains('menu-toggle')){
    document.getElementById('mobileMenu').classList.toggle('active');

}
});
    document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu").innerHTML = data;
            evalScriptsFrom(data); // Isso é necessário para reexecutar os scripts embutidos na navbar
        });

    function evalScriptsFrom(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    tempDiv.querySelectorAll("script").forEach(script => {
    const newScript = document.createElement("script");
    if (script.src) {
    newScript.src = script.src;
} else {
    newScript.textContent = script.textContent;
}
    document.body.appendChild(newScript);
});
}
});

