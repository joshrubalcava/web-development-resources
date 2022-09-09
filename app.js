// document.onreadystatechange = function() {
//     let scrollPosition = 0;
//     const navbar = document.querySelector('.navbar-custom');
//     window.addEventListener('scroll', (e) => {
//         scrollPosition = window.scrollY;
//         console.log(scrollPosition);
//         if (scrollPosition > 100) {
//             navbar.classList.add('navbar-red');
//         }
//     })
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const navbar = document.querySelector('.navbar-custom');
//     window.onscroll((evt) => {
//         navbar.classList.toggle('navbar-light bg-light navbar-red navbar-dark')
//     })
// })

// const navbar = document.querySelector('.navbar-custom');
// navbar.addEventListener('click', () => {
//     navbar.classList.toggle('navbar-light');
//     navbar.classList.toggle('bg-light');
//     navbar.classList.toggle('navbar-red');
//     navbar.classList.toggle('navbar-dark');
//     console.log(window);
// })

const body = document.querySelector('body');
body.addEventListener('scroll', (evt) => {
    const navbar = document.querySelector('.navbar');
    console.log(evt)
    // console.log(body.scrollTop);
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
