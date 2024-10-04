const ball = document.querySelector('.ball');
const equationDisplay = document.querySelector('.equation');
const countDisplay = document.querySelector('#count');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const equations = [
    "E = mc²",
    "a² + b² = c²",
    "F = ma",
    "i² = -1",
    "A = πr²",
    "V = lwh",
    "P = 4/3πr³",
    "d = rt",
    "E = hf",
    "PV = nRT",
    "A = 1/2bh",
    "C = 2πr",
    "s = ut + 1/2at²",
    "x² - 4x + 4 = 0",
    "y = mx + b",
    "m = Δy/Δx",
    "Q = mcΔT",
    "sin²θ + cos²θ = 1",
    "log(a * b) = log(a) + log(b)",
    "∫f(x)dx = F(x) + C",
    "d/dx [sin(x)] = cos(x)"
];

let position = 0;
let count = 0;
let animationId;

function animateBall() {
    position += 10; // Incrementa la posizione della palla
    ball.style.left = `${position}px`;

    // Cambia colore della palla
    const colorChange = (position / (7 * 100)) * 240; // Gradazione dal verde al blu
    ball.style.backgroundColor = `hsl(${colorChange}, 100%, 50%)`;

    // Controlla se la palla ha attraversato la linea
    if (position >= 700) {
        position = 0; // Resetta la posizione della palla
        count++;
        countDisplay.textContent = count; // Aggiorna il conteggio
        // Mostra un'equazione ogni 7 attraversamenti
        if (count % 7 === 0) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * equations.length);
            } while (equationDisplay.textContent.includes(equations[randomIndex])); // Evita equazioni duplicate
            equationDisplay.textContent = equations[randomIndex];
        }
    }

    animationId = requestAnimationFrame(animateBall); // Richiama la funzione di animazione
}

// Funzione per avviare l'animazione
startButton.addEventListener('click', () => {
    if (!animationId) {
        animateBall();
    }
});

// Funzione per fermare l'animazione
stopButton.addEventListener('click', () => {
    cancelAnimationFrame(animationId);
    animationId = null; // Resetta l'ID dell'animazione
});