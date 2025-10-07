// Galería de Estilos - JavaScript
// Este script maneja la galería de obras de arte en la sección de "Acrilico sobre lienzo"

const oleoObras = [
  {
    thumb: "../img/acrilico/CB.jpg",
    full: "../img/acrilico/CB.jpg",
    alt: "Buda No1",
    titulo: "Buda No1",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "23 x 23 cm",
    anio: "2025",
    disponibilidad: "Disponible",
  },

    {
    thumb: "../img/acrilico/CC.jpg",
    full: "../img/acrilico/CC.jpg",
    alt: "Las tazas",
    titulo: "Las tazas",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "23 x 23 cm",
    anio: "2025",
    nodisponible: "No Disponible",
  },

    {
    thumb: "../img/acrilico/CD.jpg",
    full: "../img/acrilico/CD.jpg",
    alt: "Mariposa",
    titulo: "Mariposa",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "23 x 23 cm",
    anio: "2025",
    nodisponible: "No Disponible",
  },

    {
    thumb: "../img/acrilico/CE.jpg",
    full: "../img/acrilico/CE.jpg",
    alt: "Mano de Fatima",
    titulo: "Mano de Fatima",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "21 x 21 cm",
    anio: "2025",
    disponibilidad: "Disponible",
  },

    {
    thumb: "../img/acrilico/CF.jpg",
    full: "../img/acrilico/CF.jpg",
    alt: "OM",
    titulo: "OM",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "21 x 21 cm",
    anio: "2025",
    disponibilidad: "Disponible",
  },

    {
    thumb: "../img/acrilico/CG.jpg",
    full: "../img/acrilico/CG.jpg",
    alt: "Colibrí",
    titulo: "Colibrí",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "23 x 23 cm",
    anio: "2025",
    disponibilidad: "Disponible",
  },

   {
    thumb: "../img/acrilico/CH.jpg",
    full: "../img/acrilico/CH.jpg",
    alt: "Limones",
    titulo: "Limones",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "23 x 23 cm",
    anio: "2025",
    disponibilidad: "Disponible",
  },

    {
    thumb: "../img/acrilico/CI.jpg",    
    full: "../img/acrilico/CI.jpg",
    alt: "Corazón Listón",
    titulo: "Corazón Listón",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "21 x 21 cm",
    anio: "2025",
    disponibilidad: "Disponible",
    },
    
    {
    thumb: "../img/acrilico/CJ.jpg",
    full: "../img/acrilico/CJ.jpg", 
    alt:"Flor de Loto",
    titulo: "Flor de Loto",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "21 x 21 cm",
    anio: "2025",
    disponibilidad: "Disponible",
  },

    {
    thumb: "../img/acrilico/CK.jpg",
    full: "../img/acrilico/CK.jpg",
    alt:"Ying'Yang",
    titulo: "Ying'Yang",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "21 x 21 cm",
    anio: "2025",
    disponibilidad: "Disponible", 
  },

    {
    thumb: "../img/acrilico/CL.jpg",
    full: "../img/acrilico/CL.jpg",
    alt:"Eclipse",
    titulo: "Eclipse",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "23 x 23 cm",
      anio: "2025",
    disponibilidad: "Disponible",
  },

    {
    thumb: "../img/acrilico/CM.jpg",
    full: "../img/acrilico/CM.jpg",
    alt:"7 Vidas",
    titulo: "7 Vidas",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "23 x 23 cm",
    anio: "2025",
    disponibilidad: "Disponible",
  },
  
    {
    thumb: "../img/acrilico/CN.jpg",
    full: "../img/acrilico/CN.jpg",
    alt:"Hogar 1",
    titulo: "Hogar 1",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "23 x 23 cm",
    anio: "2025",
    nodisponible: "No Disponible",
  },

    {
    thumb: "../img/acrilico/CÑ.jpg",
    full: "../img/acrilico/CÑ.jpg",
    alt:"Hogar 2",
    titulo: "Hogar 2",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "23 x 23 cm",
    anio: "2025",
    nodisponible: "No Disponible",
  },

    {
    thumb: "../img/acrilico/mural.jpg",
    full: "../img/acrilico/mural.jpg",
    alt: "Mural",
    titulo: "Vista al campo",
    tecnica: "Acrílico sobre mural",
    dimensiones: "1.2 x 1.6 m",
    anio: "2025",
    nodisponible: "No Disponible",
  },
  
    {
    thumb: "../img/acrilico/CO.jpg",
    full: "../img/acrilico/CO.jpg",
    alt:"El faro",
    titulo: "El faro",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "47 x 72 cm",
    anio: "2025",
    nodisponible: "No Disponible",
  },

    { 
    thumb: "../img/acrilico/CP.jpg",
    full: "../img/acrilico/CP.jpg",
    alt:"Mujer de fuego",
    titulo: "Mujer de fuego",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "23 x 80 cm",
    anio: "2025",
    nodisponible: "No Disponible",
  },
 
    {
    thumb: "../img/acrilico/CQ.jpg",
    full: "../img/acrilico/CQ.jpg",
    alt:"Corazón Oaxaca",
    titulo: "Corazón Oaxaca",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "21 x 21 cm",
    anio: "2025",
    disponibilidad: "Disponible",
  },

    {
    thumb: "../img/acrilico/CR.jpg",
    full: "../img/acrilico/CR.jpg",
    alt:"Cristo Rey ",
    titulo: "Cristo Rey",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "23 x 23 cm",
    anio: "2025",
    disponibilidad: "Disponible",
  },

    {
    thumb: "../img/acrilico/CU.jpg",
    full: "../img/acrilico/CU.jpg",
    alt: "Ojo de Ra",
    titulo: "Ojo de Ra",
    tecnica: "Acrílico y chapopote sobre MDF",
    dimensiones: "23 x 23 cm",
    anio: "2025",
    disponibilidad: "Disponible", 
  },
  
    {
    thumb:"../img/acrilico/acrilico-lienzo/ÁNGEL-1.jpg",
    full: "../img/acrilico/acrilico-lienzo/ÁNGEL-1.jpg",
    alt:"Ángel 1",
    titulo: "Ángel 1",
    tecnica: "Acrílico sobre lienzo",
    dimensiones: "20 x 26 cm",
    anio: "2024",
    nodisponible: "No Disponible",
  },
    {
    thumb:"../img/acrilico/acrilico-lienzo/ÁNGEL-2.jpg",
    full: "../img/acrilico/acrilico-lienzo/ÁNGEL-2.jpg",
    alt:"Ángel 2",
    titulo: "Ángel 2",
    tecnica: "Acrílico sobre lienzo",
    dimensiones: "28 x 36 cm",
    anio: "2024",
    nodisponible: "No Disponible",
  },
    
    {
    thumb:"../img/acrilico/acrilico-lienzo/ÁNGEL-3.jpg", 
    full: "../img/acrilico/acrilico-lienzo/ÁNGEL-3.jpg",
    alt:"Ángel 3",
    titulo: "Ángel 3",
    tecnica: "Acrílico sobre lienzo",
    dimensiones: "28 x 36 cm",
    anio: "2024",
    disponibilidad: "Disponible",
  },

    {
    thumb: "../img/acrilico/acrilico-lienzo/COHEN.jpg",
    full: "../img/acrilico/acrilico-lienzo/COHEN.jpg",
    alt:"Cohen",
    titulo: "Cohen",
    tecnica: "Acrílico sobre lienzo",
    dimensiones: "28 x 36 cm",
    anio: "2024",
    disponibilidad: "Disponible",
  },

    {
    thumb: "../img/acrilico/acrilico-lienzo/ENELMUELLE-A b.jpg",
    full: "../img/acrilico/acrilico-lienzo/ENELMUELLE-A b.jpg",
    alt:"En el muelle A",
    titulo: "En el muelle A",
    tecnica: "Acrílico sobre lienzo",
    dimensiones: "100 x 140 cm",
    anio: "2018",
    nodisponible: "No Disponible",
  },

    {
    thumb: "../img/acrilico/acrilico-lienzo/MILES & COLTRANE.jpg",
    full: "../img/acrilico/acrilico-lienzo/MILES & COLTRANE.jpg",
    alt:"Miles & Coltrane",
    titulo: "Miles & Coltrane",
    tecnica: "Acrílico sobre lienzo",
    dimensiones: "100 x 140 cm",
    anio: "2024",
    disponibilidad: "Disponible",
  },

    {
    thumb: "../img/acrilico/acrilico-lienzo/PROTECTOR.jpg",
    full: "../img/acrilico/acrilico-lienzo/PROTECTOR.jpg",
    alt:"Protector",
    titulo: "Protector",
    tecnica: "Acrílico sobre lienzo",
    dimensiones: "100 x 150 cm",
    anio: "2015",
    nodisponible: "No Disponible",
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
  img.style.objectFit = "contain";
  document.getElementById('oleoModalTitle').textContent = obra.titulo;
  document.getElementById('oleoModalTech').textContent = obra.tecnica;
  document.getElementById('oleoModalDims').textContent = obra.dimensiones;
  document.getElementById('oleoModalYear').textContent = obra.anio;
  document.getElementById('oleoModalNoDisp').textContent = obra.nodisponible;
  document.getElementById('oleoModalDisp').textContent = obra.disponibilidad || '';
  document.getElementById('oleoModalPos').textContent = `${oleoIndex+1} / ${oleoObras.length}`;
  img.onload = () => {
    // Ajuste dinámico para imágenes verticales
    if (img.naturalHeight > img.naturalWidth * 1.2) {
      img.style.maxHeight = "80vh";
      img.style.maxWidth = "80vw";
    } else {
      img.style.maxHeight = "80vh";
      img.style.maxWidth = "90vw";
    }
    img.style.opacity = 1;
    placeholder.style.display = 'none';
  };
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
        <div class="oleo-img-wrapper position-relative overflow-hidden rounded-4" style="aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;background:none;">
          <img src="${obra.thumb}" data-full="${obra.full}" alt="${obra.alt}" class="oleo-img" loading="lazy"
            style="max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;background:none;display:block;margin:auto;"/>
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