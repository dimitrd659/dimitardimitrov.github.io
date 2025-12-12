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

// Show more write-ups – показва по 6, добавя по 6, има Show less
const showMoreBtn = document.getElementById('show-more-btn');
const allCards = document.querySelectorAll('.writeup-card');
const initialVisible = 6;
const cardsPerLoad = 6;
let currentVisible = initialVisible;
let showingAll = false;

allCards.forEach((card, i) => {
    if (i >= initialVisible) card.classList.add('hidden');
});

showMoreBtn.addEventListener('click', function() {
    if (showingAll) {
        // Show less – скрива всичко след първите 6
        allCards.forEach((card, i) => {
            if (i >= initialVisible) card.classList.add('hidden');
        });
        currentVisible = initialVisible;
        showingAll = false;
        this.textContent = 'Show more write-ups';
    } else {
        // Show more – добавя по 6 или по-малко
        const toShow = Math.min(cardsPerLoad, allCards.length - currentVisible);
        for (let i = currentVisible; i < currentVisible + toShow; i++) {
            allCards[i].classList.remove('hidden');
        }
        currentVisible += toShow;
        if (currentVisible >= allCards.length) {
            showingAll = true;
            this.textContent = 'Show less';
        }
    }
});
