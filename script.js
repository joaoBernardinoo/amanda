// --- CONFIGURAÇÃO ---
// Coloque as suas imagens na ordem que desejar
const images = [
    'images/img.webp',
    'images/img2.webp',
];

// Defina a data de início do relacionamento (Ano, Mês-1, Dia, Hora, Minuto, Segundo)
const startDate = new Date(2024, 10, 5, 22, 0, 0); // Ex: 15 de Dezembro de 2022, 20:00

// --- LÓGICA DO CARROSSEL ---
let currentImageIndex = 0;
const carouselImage = document.getElementById('carousel-image');

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    carouselImage.src = images[currentImageIndex];
}

// Opcional: Trocar imagem a cada 5 segundos
setInterval(() => {
    changeImage(1);
}, 2000);

// --- LÓGICA DO CONTADOR ---
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365;
    // Uma aproximação para meses, a lógica exata é mais complexa
    const months = Math.floor(days / 30.44);
    const remainingDays = Math.floor(days % 30.44);
    
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownElement.textContent = 
        `${years} anos, ${months} meses, ${remainingDays} dias, ${hours} horas e ${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Chama uma vez para não esperar 1 segundo para aparecer

