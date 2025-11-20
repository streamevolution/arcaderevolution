const games = [
    {
        id: 1,
        title: "Sopa Letras Pro Revolution",
        image: "https://i.postimg.cc/G3xvZJgb/1763566510243.png",
        url: "JuegoSopaLetrasPro.html"
    },
    {
        id: 2,
        title: "Toon Snake Revolution",
        image: "https://i.postimg.cc/7Z0HWXmq/1763566692505.png",
        url: "JuegoSnake.html"
    },
    {
        id: 3,
        title: "Dino Legends Revolution",
        image: "https://i.postimg.cc/gJNp0xrT/1763593246677.png",
        url: "dinosaurio.html"
    },
    {
        id: 4,
        title: "Water Puzzle Revolution",
        image: "https://i.postimg.cc/q7ZCgRKD/1763618752737.png",
        url: "WaterSortPuzzle.html"
    },
    {
        id: 5,
        title: "Block Puzzle",
        image: "https://i.postimg.cc/vB5gXdDw/1763625250803.png",
        url: "BlockPuzzle.html"
    },
    {
        id: 6,
        title: "Sudoku Clásico",
        image: "https://placehold.co/600x400/C8A2C8/333?text=Sudoku+Clasico",
        url: "nodisponible.html"
    }
];

const container = document.getElementById('games-container');

function renderGames() {
    games.forEach((game, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Añadir animación de entrada con un pequeño retraso
        card.style.animationDelay = `${index * 0.1}s`; // Retraso progresivo
        card.classList.add('fade-in'); // Clase para la animación

        // Evento para toda la tarjeta (y efecto de clic)
        card.addEventListener('click', () => {
            card.classList.add('clicked'); // Añade la clase de animación de clic
            setTimeout(() => {
                window.location.href = game.url;
            }, 300); // Espera que termine la animación antes de navegar
        });

        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${game.title}</h3>
                <button class="btn-play">Jugar Ahora</button>
            </div>
        `;

        container.appendChild(card);

        // Prevenir que el click del botón se propague a la tarjeta y active doble navegación
        const playButton = card.querySelector('.btn-play');
        playButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Detiene la propagación del evento
            card.classList.add('clicked');
            setTimeout(() => {
                window.location.href = game.url;
            }, 300);
        });
    });
}

document.addEventListener('DOMContentLoaded', renderGames);
