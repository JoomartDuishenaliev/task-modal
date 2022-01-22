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


//***** timer ******//
let count = 27;
let mss = 59;
const ms = document.querySelector('#ms');

const sElem = document.querySelector('#s');
sElem.textContent = count;

const startElem = document.querySelector('#btnStart');


function countSequence() {
    ms.textContent = mss--;
    if (mss === 0) {
        mss === 59;
        count--;
    }
}

function start () {
    sElem.textContent = count--;

startElem.onclick = function () {
    setInterval(start, 1000);
    setInterval(countSequence, 10);
}