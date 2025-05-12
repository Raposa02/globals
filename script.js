let currentIndex = 0;
const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");

function updateCarousel() {
    const offset = -currentIndex * (cards[0].offsetWidth + 20);
    carousel.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function assinarDocumento(button) {
    const card = button.parentElement;
    card.querySelector("p").innerText = "Assinado";
    button.remove();

    const historico = document.getElementById("historico");
    card.remove();
    historico.appendChild(card);
}
