const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    // const isOpen = navbutton.classList.toggle('show');
    // navbutton.setAttribute('aria-expanded',isOpen);
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});



