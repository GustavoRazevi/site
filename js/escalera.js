<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
  const reveals = document.querySelectorAll('.reveal-up');
  function revealOnScroll() {
    const trigger = window.innerHeight * 0.92;
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < trigger && rect.bottom > 40) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);
  revealOnScroll();
=======
document.addEventListener("DOMContentLoaded", function() {
  const reveals = document.querySelectorAll('.reveal-up');
  function revealOnScroll() {
    const trigger = window.innerHeight * 0.92;
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < trigger && rect.bottom > 40) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);
  revealOnScroll();
>>>>>>> 671624ede3f813e10404174b650f50f792bee7ff
});