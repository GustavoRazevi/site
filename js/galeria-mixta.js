// Galería de Estilos - JavaScript
// Este script maneja la galería de obras de arte en la sección de "Óleo sobre lienzo"

const oleoObras = [
  {
    thumb: "../img/mixta/ALEGORÍA DEL OCASO.jpg",
    full: "../img/mixta/ALEGORÍA DEL OCASO.jpg",
    alt: "Alegoría del Ocaso, técnica mixta sobre lienzo",
    titulo: "Alegoría del Ocaso",
    tecnica: "Técnica mixta sobre lienzo",
    dimensiones: "80 x 100 cm",
    anio: "2023",
    disponibilidad: "Disponible",
  },
  
    {
    thumb: "../img/mixta/ELGRANMANTO.jpg",
    full: "../img/mixta/ELGRANMANTO.jpg",
    alt: "El Gran Manto, técnica mixta sobre lienzo",
    titulo: "El Gran Manto",
    tecnica: "Técnica mixta sobre lienzo",
    dimensiones: "70 x 90 cm",
    anio: "2023",
    disponibilidad: "Disponible",
  },
  
    {
    thumb: "../img/mixta/EQUILIBRIO.jpg",
    full: "../img/mixta/EQUILIBRIO.jpg",
    alt: "Equilibrio, técnica mixta sobre lienzo",
    titulo: "Equilibrio",
    tecnica: "Técnica mixta sobre lienzo",
    dimensiones: "49 x 62 cm",
    anio: "2023",
    disponibilidad: "Disponible",
    },
    
        {
    thumb: "../img/mixta/GENESIS.jpg",
    full: "../img/mixta/GENESIS.jpg",
    alt: "Génesis, técnica mixta sobre lienzo",
    titulo: "Génesis",
    tecnica: "Técnica mixta sobre lienzo",
    dimensiones: "80 x 100 cm",
    anio: "2023",
    disponibilidad: "Disponible",
  },
  
    {
    thumb: "../img/mixta/INERTE ALEGORÍA.jpg",
    full: "../img/mixta/INERTE ALEGORÍA.jpg",
    alt: "Inerte Alegoría, técnica mixta sobre lienzo",
    titulo: "Inerte Alegoría",
    tecnica: "Técnica mixta sobre lienzo",
    dimensiones: "80 x 100 cm",
    anio: "2023",
    disponibilidad: "Disponible",
    },
    
        {
    thumb: "../img/mixta/SUBLIME LETARGO.jpg",
    full: "../img/mixta/SUBLIME LETARGO.jpg",
    alt: "Sublime Letargo, técnica mixta sobre lienzo",
    titulo: "Sublime Letargo",
    tecnica: "Técnica mixta sobre lienzo",
    dimensiones: "80 x 100 cm",
    anio: "2023",
    disponibilidad: "Disponible",
    },
    
  // ...Agrega aquí más objetos de obras...
];

// Inicializa el modal de Bootstrap
let oleoIndex = 0;

function openOleoModal(idx) {
  oleoIndex = idx;
  updateOleoModal();
  const modal = new bootstrap.Modal(document.getElementById('oleoModal'));
  modal.show();
  document.addEventListener('keydown', oleoModalKeyNav);
}

function updateOleoModal() {
  const obra = oleoObras[oleoIndex];
  const img = document.getElementById('oleoModalImg');
  const placeholder = document.getElementById('oleoModalPlaceholder');
  img.style.opacity = 0;
  placeholder.style.display = 'block';
  img.src = obra.full;
  img.alt = obra.alt;
  img.style.objectFit = "contain"; // Asegura que la imagen se vea completa en el modal
  document.getElementById('oleoModalTitle').textContent = obra.titulo;
  document.getElementById('oleoModalTech').textContent = obra.tecnica;
  document.getElementById('oleoModalDims').textContent = obra.dimensiones;
  document.getElementById('oleoModalYear').textContent = obra.anio;
  document.getElementById('oleoModalNoDisp').textContent = obra.nodisponible;
  document.getElementById('oleoModalDisp').textContent = obra.disponibilidad || '';
  document.getElementById('oleoModalPos').textContent = `${oleoIndex+1} / ${oleoObras.length}`;
  img.onload = () => { img.style.opacity = 1; placeholder.style.display = 'none'; };
}

function oleoPrev() {
  if (oleoIndex > 0) { oleoIndex--; updateOleoModal(); }
}
function oleoNext() {
  if (oleoIndex < oleoObras.length-1) { oleoIndex++; updateOleoModal(); }
}
function oleoModalKeyNav(e) {
  if (e.key === "ArrowLeft") { oleoPrev(); }
  if (e.key === "ArrowRight") { oleoNext(); }
  if (e.key === "Escape") {
    bootstrap.Modal.getInstance(document.getElementById('oleoModal')).hide();
    document.removeEventListener('keydown', oleoModalKeyNav);
  }
}

// Carga las obras en la galería al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('oleo-gallery');
  grid.innerHTML = oleoObras.map((obra, i) => `
    <div class="col-12 col-sm-6 col-lg-4">
      <div tabindex="0" role="button" aria-label="Ver detalle de obra: ${obra.titulo}" onclick="openOleoModal(${i})" style="cursor:pointer;background:none;border:none;">
        <div class="oleo-img-wrapper position-relative overflow-hidden rounded-4" style="aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;background:#f5f5f5;">
          <img src="${obra.thumb}" data-full="${obra.full}" alt="${obra.alt}" class="oleo-img" loading="lazy"
            style="max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;background:#eaeaea;display:block;margin:auto;"/>
        </div>
        <div class="text-center mt-2">
          <h3 class="oleo-title mb-0">${obra.titulo}</h3>
        </div>
      </div>
    </div>
  `).join('');

  // Animación fade-in para miniaturas
  document.querySelectorAll('.oleo-img').forEach((img, idx) => {
    img.style.opacity = '0';
    img.onload = () => {
      img.style.animation = `fadeInImg .7s ${0.1 + idx * 0.08}s forwards`;
    };
    img.style.objectFit = 'contain';
  });
});
// Fredko :)