const toggleButton = document.getElementsByClassName('menu-button')[0]
const navbarLinks = document.getElementsByClassName('nav-item')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})