const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

// the following 2 lines are for the displaying the last date modified
//and the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

navbutton.addEventListener('click', () => {
    // const isOpen = navbutton.classList.toggle('show');
    // navbutton.setAttribute('aria-expanded',isOpen);
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});



