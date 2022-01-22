const modalWindow = document.querySelector('#modal-window');

const openButton = document.querySelector('#open-button');
openButton.onclick = function () {
    modalWindow.style.display = 'block';
}

const closeButton = document.querySelector('#close-button');
closeButton.onclick = function () {
    modalWindow.style.display = 'none';
}

const outside = document.querySelector('#outside');
window.onclick = function (event) {
    if (event.target == outside) {
        modalWindow.style.display = 'none';
    }
}


let seconds = 27;
let milliseconds = 59;
const appendMilliseconds = document.querySelector('#milliseconds');
const appendSeconds = document.querySelector('#seconds');
const startButton = document.querySelector('#btnStart');
let interval;

function countdown () {
    milliseconds--;
    appendMilliseconds.innerHTML = milliseconds
    if(milliseconds === 0) {
        seconds--;
        appendSeconds.innerHTML = seconds;
        milliseconds = 59;
        appendMilliseconds.innerHTML = milliseconds
    }
    if(seconds === 0) {
        milliseconds--;
        appendMilliseconds.innerHTML = milliseconds
    }
    if(milliseconds === 0 && seconds === 0) {
        clearInterval(interval);
        startButton.onclick = function () {
            clearInterval(interval);
        }
    }
}

startButton.onclick = function () {
    clearInterval(interval);
    interval = setInterval(countdown, 20);
}