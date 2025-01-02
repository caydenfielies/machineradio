//time
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
const footer = document.querySelector('.footer');
setInterval(() => {
    const date = new Date();
    const year = date.getFullYear();

    footer.innerText = `${year} machineradio`;
}, 1000);