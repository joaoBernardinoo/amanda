// --- CONFIGURAÇÃO ---
// Coloque as suas imagens na ordem que desejar
const images = [
  "images/img.webp",
  "images/img2.webp",
  "images/img10.webp",
  "images/img13.webp",
  "images/img16.webp",
  "images/img19.webp",
  "images/img21.webp",
  "images/img24.webp",
  "images/img27.webp",
  "images/img2.webp",
  "images/img32.webp",
  "images/img35.webp",
  "images/img5.webp",
  "images/img8.webp",
  "images/img11.webp",
  "images/img14.webp",
  "images/img17.webp",
  "images/img1.webp",
  "images/img22.webp",
  "images/img25.webp",
  "images/img28.webp",
  "images/img30.webp",
  "images/img33.webp",
  "images/img3.webp",
  "images/img6.webp",
  "images/img9.webp",
  "images/img12.webp",
  "images/img15.webp",
  "images/img18.webp",
  "images/img20.webp",
  "images/img23.webp",
  "images/img26.webp",
  "images/img29.webp",
  "images/img31.webp",
  "images/img34.webp",
  "images/img4.webp",
  "images/img7.webp",
  "images/img10.webp",
  "https://lh3.googleusercontent.com/pw/AP1GczPefcVG6bVUpLR2IRLT844_ctnup21eomcltUxjicMN2D3uN5KThwBFsytAk-CB6cDBMug1V5aCq2IfCeOQRS5vRd1oq2Y7P5LWljHK-S4h_IsyLrRdt6WsVzAcTAXtgPs3IvZZVRLSEuDuWgizfT_s=w685-h913-s-no?authuser=1",
];

// Defina a data de início do relacionamento (Ano, Mês-1, Dia, Hora, Minuto, Segundo)
const startDate = new Date(2024, 10, 5, 22, 0, 0); // Ex: 15 de Dezembro de 2022, 20:00

// --- LÓGICA DO CARROSSEL ---
let currentImageIndex = 0;

const carouselImage = document.getElementById("carousel-image");

let availableIndexes = Array.from(images.keys());

function changeImage() {
  if (availableIndexes.length === 0) {
    // Reset when all images have been shown
    availableIndexes = Array.from(images.keys());
  }
  // Pick a random index from availableIndexes
  const randomIdx = Math.floor(Math.random() * availableIndexes.length);
  currentImageIndex = availableIndexes[randomIdx];
  carouselImage.src = images[currentImageIndex];

  availableIndexes.splice(randomIdx, 1);
  console.log(availableIndexes)

}
// Opcional: Trocar imagem a cada 5 segundos
setInterval(() => {
  changeImage(1);
}, 5000);

// --- LÓGICA DO CONTADOR ---
const countdownElement = document.getElementById("countdown");

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

  countdownElement.textContent = `${years} anos, ${months} meses, ${remainingDays} dias, ${hours} horas e ${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Chama uma vez para não esperar 1 segundo para aparecer
