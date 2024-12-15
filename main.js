 /* Toggle Icon NavBar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

/* Scroll Section Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach.apply(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  /* Sticky NavBar */
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
  /* Remove Toggle Icon and NavBar */
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

/* Scroll Reveal */
ScrollReveal( {
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form, .contact ',  { origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});

/* Typed JS */
const typed = new Typed('#multiple-text', {
  strings: ['Computer Science Student', 'Future Web Developer', 'Future UX/UI Designer'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
