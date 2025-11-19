const games = [
    {
        id: 1,
        title: "Sopa Letras Pro Revolution",
        image: "https://i.postimg.cc/G3xvZJgb/1763566510243.png",
        url: "JuegoSopaLetrasPro.html"
    },
    {
        id: 2,
        title: "Snake Infinity Revolution",
        image: "https://i.postimg.cc/7Z0HWXmq/1763566692505.png",
        url: "JuegoSnake.html"
    },
    {
        id: 3,
        title: "Memoria Challenge",
        image: "https://placehold.co/600x400/FF007B/00FFEE?text=Memoria+Challenge",
        url: "nodisponible.html"
    },
    {
        id: 4,
        title: "Ahorcado Kids",
        image: "https://placehold.co/600x400/7BFF00/1A0033?text=Ahorcado+Kids",
        url: "nodisponible.html"
    },
    {
        id: 5,
        title: "Pacman Retro",
        image: "https://placehold.co/600x400/F0E68C/8B0000?text=Pacman+Retro",
        url: "nodisponible.html"
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
