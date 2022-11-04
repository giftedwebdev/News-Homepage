const navSlide = () => {
    const hamburger = document.querySelector('.hamburger-icon');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const closeMenu = document.querySelector('.menu-close-icon')
    // Toggle Navs
    hamburger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });

    closeMenu.addEventListener('click', ()=> {
        nav.classList.toggle('nav-inactive');
    });

    

    // Animate Links
    // navLinks.forEach((link, index) => {
    //     link.style.animation = `navLinksfade 0.5s ease forwards ${index / 7 + 2}s`;
    // })


}  

navSlide();