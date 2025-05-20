document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Validación manual
    ['nombre', 'email', 'mensaje'].forEach(id => {
      const input = form[id];
      if (!input.value.trim() || (id === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value))) {
        input.classList.add('is-invalid');
        valid = false;
      } else {
        input.classList.remove('is-invalid');
      }
    });

    if (!valid) {
      formMsg.textContent = '';
      return;
    }

    // Simulación de envío (puedes reemplazar por fetch a tu backend real)
    formMsg.innerHTML = '<span style="color:#19a4bd;">Enviando mensaje...</span>';
    setTimeout(() => {
      formMsg.innerHTML = '<span style="color:#2a3a5c;">¡Gracias por tu mensaje! Te responderé pronto.</span>';
      form.reset();
    }, 1200);
  });

  // Quitar error al escribir
  ['nombre', 'email', 'mensaje'].forEach(id => {
    form[id].addEventListener('input', function() {
      this.classList.remove('is-invalid');
    });
  });
});