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

window.addEventListener('scroll', function(evt) {
    if (document.body.scrollTop >= 200) {
        console.log('scrolling')
    }
})
