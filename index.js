// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = document.querySelector('#theme-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Skill bars animation
window.addEventListener('load', () => {
    document.querySelectorAll('.fill').forEach(bar => {
        const w = bar.getAttribute('data-width') + '%';
        setTimeout(() => bar.style.width = w, 400);
    });
});

// Show more / Show less – loads 4 at a time
const showMoreBtn = document.getElementById('show-more-btn');
const allCards = document.querySelectorAll('.writeup-card');
const hiddenCards = document.querySelectorAll('.writeup-card.hidden');

let currentIndex = 0;
const cardsPerLoad = 4;
let showingAll = false;

showMoreBtn.addEventListener('click', function() {
    if (showingAll) {
        // Hide everything after first 4
        allCards.forEach((card, i) => {
            if (i >= 4) card.classList.add('hidden');
        });
        currentIndex = 0;
        showingAll = false;
        this.textContent = 'Show more write-ups';
    } else {
        // Show next 4
        for (let i = currentIndex; i < currentIndex + cardsPerLoad; i++) {
            if (hiddenCards[i]) hiddenCards[i].classList.remove('hidden');
        }
        currentIndex += cardsPerLoad;

        if (currentIndex >= hiddenCards.length) {
            showingAll = true;
            this.textContent = 'Show less';
        }
    }
});
