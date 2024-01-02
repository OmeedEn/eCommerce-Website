
const bar = document.getElementById('bar');
const closer = document.getElementById('closer');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (closer) {
    closer.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}