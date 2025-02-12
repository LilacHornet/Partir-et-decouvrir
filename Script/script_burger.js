const burger = document.getElementById('burger')
const nav = document.getElementById('nav')
burger.addEventListener('click', () => {
    burger.classList.toggle('open')
    nav.classList.toggle('nav-open')
})