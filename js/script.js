// Flecha subir
window.onscroll = () => {
  if (window.scrollY < 200) {
    scrollTop.style.visibility = 'hidden';
    scrollTop.style.opacity = 0;
  } else {
    scrollTop.style.visibility = 'visible';
    scrollTop.style.opacity = 1;
  }
};

// Mostrar un loader mientras los archivos se cargan
// Ocultar el scroll al cargar la página
const scrollTop = document.getElementById('scrolltop');
scrollTop.style.visibility = 'hidden';
scrollTop.style.opacity = 0;

// Mostrar el scroll cuando la página haya cargado completamente
window.onload = () => {
  scrollTop.style.visibility = 'visible';
  scrollTop.style.opacity = 1;
};
window.addEventListener('DOMContentLoaded', function () {
  var loader = document.getElementById('loader');

  // Mostrar el loader al cargar la página
  loader.style.display = 'flex';

  // Deshabilitar el scroll
  document.body.style.overflow = 'hidden';

  // Esperar a que todos los archivos se carguen
  window.onload = function () {
    setTimeout(function () {
      // Ocultar el loader después de 3 segundos
      loader.style.display = 'none';

      // Habilitar el scroll nuevamente
      document.body.style.overflow = 'auto';

      // Desplazar hasta el principio de la página
      window.scrollTo(0, 0);
    }, 3000);
  };
});

//descargar
const download = document.querySelector('.download-btn');
const countdown = document.querySelector('.countdown');

download.addEventListener('click', () => {
  let fileName = 'Reporte de actividades 2022 Fundación Érick Muro.pdf';
  let timeLeft = 5; // Duración del contador en segundos

  download.style.display = 'none';
  countdown.style.display = 'block';
  countdown.innerHTML = `La descarga comenzará automáticamente en ${timeLeft} segundos`;

  const countdownTimer = setInterval(() => {
    timeLeft--;
    countdown.innerHTML = `La descarga comenzará automáticamente en ${timeLeft} segundos`;

    if (timeLeft <= 0) {
      clearInterval(countdownTimer);
      initiateDownload(fileName);
      countdown.style.display = 'none';
      download.style.display = 'block';
    }
  }, 1000);
});

function initiateDownload(fileName) {
  const link = document.createElement('a');
  link.href = fileName;
  link.download = fileName;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


//principios
document.addEventListener("DOMContentLoaded", function () {
  const imgElements = document.querySelectorAll("section img");

  for (const imgElement of imgElements) {
    imgElement.addEventListener("click", function () {
      imgElement.classList.toggle("ampliada");
    });
  }
});

//vaciar campos de comentarios despues de enviar el comentario
  // Obtener los elementos de los campos del formulario
var nombreInput = document.querySelector('input[name="nombre"]');
var emailInput = document.querySelector('input[name="email"]');
var asuntoInput = document.querySelector('input[name="asunto"]');
var mensajeInput = document.querySelector('textarea[name="mensaje"]');

  // Vaciar los valores de los campos
nombreInput.value = "";
emailInput.value = "";
asuntoInput.value = "";
mensajeInput.value = "";
