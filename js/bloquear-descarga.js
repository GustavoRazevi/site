// Evita clic derecho y arrastrar para todas las imágenes del sitio
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
    img.addEventListener('dragstart', function(e) {
      e.preventDefault();
    });
    img.setAttribute('draggable', 'false');
  });
});
//delegacion de eventos para evitar clic derecho y arrastrar en imágenes
document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG') e.preventDefault();
});
document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG') e.preventDefault();
// Evita clic derecho y arrastrar para todas las imágenes del sitio
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
    img.addEventListener('dragstart', function(e) {
      e.preventDefault();
    });
    img.setAttribute('draggable', 'false');
  });
});
//delegacion de eventos para evitar clic derecho y arrastrar en imágenes
document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG') e.preventDefault();
});
document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG') e.preventDefault();
});