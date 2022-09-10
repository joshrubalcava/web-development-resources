document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    body.addEventListener('scroll', (evt) => {
        const navbar = document.querySelector('.navbar');
        if (body.scrollTop >= 300) {
            navbar.classList.remove('navbar-light');
            navbar.classList.remove('bg-light');
            navbar.classList.add('navbar-red');
            navbar.classList.add('navbar-dark');
        } else {
            navbar.classList.add('navbar-light');
            navbar.classList.add('bg-light');
            navbar.classList.remove('navbar-red');
            navbar.classList.remove('navbar-dark');
        }
    })
})


