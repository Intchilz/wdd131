const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    // Burger Animation
    burger.classList.toggle('toggle');
});

var dt = new Date(document.lastModified);
document.getElementById("datetime").innerHTML = dt.toLocaleString();