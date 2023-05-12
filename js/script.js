//descripciones mostrar y ocultar
function mostrarDescripcion(descripcion) {
    document.getElementById('pt2').innerText = descripcion;
}

function ocultarDescripcion() {
    document.getElementById('pt2').innerText = ' Descripción del Avenger ';
}

//barra
var header = document.querySelector('header');
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // Desplazamiento hacia arriba
    header.style.top = '0';
  } else {
    // Desplazamiento hacia abajo
    header.style.top = '-100px'; // Altura de la barra de tareas
  }
  prevScrollpos = currentScrollPos;
};
//Flecha arriba
var backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('active');
  } else {
    backToTopButton.classList.remove('active');
  }
});

backToTopButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
