const codigoEl = document.getElementById('codigo');
const tempoEl = document.getElementById('tempoRestante');
const ticksEl = document.getElementById('ticks');

const tempoTotal = 30;
let tempoRestante = tempoTotal;

function gerarCodigo() {
    const novoCodigo = Math.floor(100000 + Math.random() * 900000);
    codigoEl.textContent = novoCodigo;
}

function criarTicks() {
    for (let i = 0; i < tempoTotal; i++) {
        const tick = document.createElement('div');
        tick.style.transform = `rotate(${(360 / tempoTotal) * i}deg) translateY(0px)`;
        ticksEl.appendChild(tick);
    }
}

function atualizarTicks() {
    const ticks = ticksEl.children;
    for (let i = 0; i < tempoTotal; i++) {
        if (i < tempoRestante) {
            ticks[i].classList.add('active');
        } else {
            ticks[i].classList.remove('active');
        }
    }
}

function atualizarTempo() {
    atualizarTicks();
    tempoEl.textContent = `Novo código em ${tempoRestante}`;
    tempoRestante--;

    if (tempoRestante < 0) {
        gerarCodigo();
        tempoRestante = tempoTotal;
    }
}

gerarCodigo();
criarTicks();
setInterval(atualizarTempo, 1000);
