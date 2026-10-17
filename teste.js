// Selecionando os elementos do HTML
const audio = document.getElementById('audio-track');
const playBtn = document.getElementById('play-btn');
const progressBar = document.getElementById('progress-bar');

// Função de Play e Pause
playBtn.addEventListener('click', () => {
    // Verifica se você colocou um arquivo src no HTML antes de tentar tocar
    if (!audio.src || audio.src === window.location.href) {
        alert("Adicione o caminho de um arquivo .mp3 no src da tag <audio>!");
        return;
    }

    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸'; // Muda o ícone para Pause
    } else {
        audio.pause();
        playBtn.textContent = '▶'; // Muda o ícone para Play
    }
});

// Atualiza a barra de progresso conforme o som rola
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    }
});

// Permite o usuário adiantar ou voltar a música clicando na barra
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Selecionando os novos elementos de troca de faixa
const releaseButtons = document.querySelectorAll('.play-release');
const playerImg = document.getElementById('player-img');
const trackName = document.getElementById('track-name');
const trackArtist = document.getElementById('track-artist');

releaseButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Pega os dados dos atributos 'data-' do botão clicado
        const newSrc = button.getAttribute('data-src');
        const newTitle = button.getAttribute('data-title');
        const newArtist = button.getAttribute('data-artist');
        const newImg = button.getAttribute('data-img');

        // Atualiza o player
        audio.src = newSrc;
        trackName.textContent = newTitle;
        trackArtist.textContent = newArtist;
        playerImg.src = newImg;

        // Dá o play automaticamente
        audio.play();
        playBtn.textContent = '⏸';
    });
});