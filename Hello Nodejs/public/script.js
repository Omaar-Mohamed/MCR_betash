const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

function changefav() {
    let displayimage = document.getElementById('favor')
    if (displayimage.scr.match('img/heart.png')) {
        displayimage.src = 'img/lover.png'
    } else {
        displayimage.src = 'img/heart.png'
    }
}