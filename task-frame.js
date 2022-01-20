
const modalWindow = document.querySelector('#modal-window');
const openButton = document.querySelector('#open-button');
const closeButton = document.querySelector('#close-button');
const outside = document.querySelector('#outside');

openButton.onclick = function () {
    modalWindow.style.display = 'block';
}

closeButton.onclick = function () {
    modalWindow.style.display = 'none';
}

window.onclick = function (event) {
    if(event.target == outside) {
        modalWindow.style.display = 'none';
    }
}

let sec = 28;

function stopwatch() {
    document.getElementById('second').textContent = sec--;
}

function startCount (event) {
    setInterval(stopwatch, 1000)
}

btnStart.onclick = function () {
    startCount();
}