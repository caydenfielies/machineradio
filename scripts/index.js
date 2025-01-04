// time
const time = document.querySelector('.time');

setInterval(() => {
    const date = new Date();
    let hours = date.getHours(); 
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    
    time.innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);

// footer
const footer = document.getElementById('footer');
setInterval(() => {
    const date = new Date();
    const year = date.getFullYear();

    footer.innerText = `${year} machineradio™`;
}, 1000);

// project carousel
const projectCarousel = document.querySelector('.proj-carousel');
const nextBtn = document.getElementById('next-button');
const prevBtn = document.getElementById('prev-button');

const scrollAmount = 415;

nextBtn.addEventListener('click', () => {
    projectCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    projectCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// navigation
const nav = document.querySelector('.navigation');
const home = document.querySelector('.main-container');
const bio = document.getElementById('biography');
const proj = document.getElementById('projects');
const socials = document.getElementById('socials');

console.log(home.classList);

if (!home.classList.contains('main-off')) {
    nav.classList.add('nav-off');
}

function switchContent(button) {
    if (button === 'bio') {
        nav.classList.remove('nav-off');
        home.classList.add('main-off');
        bio.classList.remove('bio-off');
        proj.classList.add('proj-off');
        socials.classList.add('socials-off');
    } else if (button === 'proj') {
        nav.classList.remove('nav-off');
        home.classList.add('main-off');
        bio.classList.add('bio-off');
        proj.classList.remove('proj-off');
        socials.classList.add('socials-off');
    } else if (button === 'socials') {
        nav.classList.remove('nav-off');
        home.classList.add('main-off');
        bio.classList.add('bio-off');
        proj.classList.add('proj-off');
        socials.classList.remove('socials-off');
    } else if (button === 'home') {
        nav.classList.add('nav-off');
        home.classList.remove('main-off');
        bio.classList.add('bio-off');
        proj.classList.add('proj-off');
        socials.classList.add('socials-off');
    }
}