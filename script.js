const myBlock = document.querySelector('.my-block');

//******** Клик мышью ******//

/*myBlock.onclick = function () {
    myBlock.classList.toggle('bg-darkred');
}*/


//******** Двойной клик мышью ******//

/*
myBlock.ondblclick = function () {
    myBlock.style.backgroundColor = 'blue';
}*/


//******** Клик правой кнопкой мыши ******//

/*
myBlock.oncontextmenu = function () {
    myBlock.style.width = '700px';
    return false;
}*/


//******** Вхождение мыши на элемент ******//

/*myBlock.onmouseenter = function () {
    myBlock.style.backgroundColor = 'black';
}*/


//******** Унос мыши с элемента ******//

/*
myBlock.onmouseleave = function () {
    myBlock.style.backgroundColor = 'red';
}*/


//******** Движение мышью ******//

let count = 350;
myBlock.onmousemove = function () {
    count += 3;
    myBlock.style.height = `${count}px`;
}