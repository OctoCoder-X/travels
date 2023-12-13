/*============== scroll Reveal =====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });
  
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
  