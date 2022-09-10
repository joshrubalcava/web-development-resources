import axios from "axios";

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

    // const subscribeForm = document.querySelector('.subscribe-form');
    // subscribeForm.addEventListener('submit', (evt) => {
    //     evt.preventDefault();
    //
    //     subscribeForm.style.display = 'none';
    //
    //     const formContainer = document.querySelector('.form-container');
    //
    //     const divEl = document.createElement('div');
    //     divEl.classList.add('thank-you-container');
    //
    //     const h1El = document.createElement('h1');
    //     h1El.innerText = 'Thank you for subscribing!';
    //     h1El.classList.add('thank-you-title');
    //
    //     const h6El = document.createElement('h6');
    //     h6El.innerText = 'You will receive additional information or a response to your message shortly!';
    //     h6El.classList.add('confirmation-text')
    //
    //     divEl.append(h1El);
    //     divEl.append(h6El);
    //
    //     formContainer.append(divEl);
    // })
})


