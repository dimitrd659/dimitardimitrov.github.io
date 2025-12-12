// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Typed.js effect
const texts = ["Red Teamer", "Penetration Tester", "Cloud Security Enthusiast", "Bug Bounty Hunter"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.getElementById('typed-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}());

// Skills bar animation
const fills = document.querySelectorAll('.fill');
fills.forEach(fill => {
    const width = fill.getAttribute('data-width');
    setTimeout(() => {
        fill.style.width = width + '%';
    }, 500);
});

// Counters animation
const counters = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target + (counter.nextElementSibling.textContent.includes('+') ? '+' : '');
        }
    };
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) updateCount();
    }, { threshold: 0.5 });
    observer.observe(counter.parentElement);
});

// Show more / Show less write-ups
const showMoreBtn = document.getElementById('show-more-btn');
const hiddenCards = document.querySelectorAll('.writeup-card.hidden');

showMoreBtn.addEventListener('click', function() {
    hiddenCards.forEach(card => card.classList.toggle('hidden'));
    if (this.textContent.includes('more')) {
        this.textContent = 'Show less write-ups';
    } else {
        this.textContent = 'Show more write-ups';
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll до началото на секцията
document.querySelectorAll('.nav-links a, header .btn').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            const topOffset = document.querySelector('.navbar').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - topOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Затваряме мобилното меню, ако е отворено
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});
