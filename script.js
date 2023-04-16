button = document.querySelectorAll('.button')
scrollPage = document.querySelectorAll('.box2')

button[0].addEventListener('click', () => {
    scrollPage[0].scrollIntoView({behavior: 'smooth'})
})