//scroll
const scrollTop = document.getElementById('scrolltop');

// Cuando la pagina carga, muestra el scroll
window.onload = () => {
  scrollTop.style.visibility = "hidden";
  scrollTop.style.opacity = 0;
};

// Si la pagina baja, el scroll sube automaticamente
window.onscroll = () => {
  if (window.scrollY > 200) {
    scrollTop.style.visibility = "visible";
    scrollTop.style.opacity = 1;
  } else {
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
  }
};
//
window.addEventListener('DOMContentLoaded', function() {
  var loader = document.getElementById('loader');
  
  // Mostrar el loader al cargar la página
  loader.style.display = 'flex';
  
  // Deshabilitar el scroll
  document.body.style.overflow = 'hidden';
  
  setTimeout(function() {
    // Ocultar el loader después de 3 segundos
    loader.style.display = 'none';
    
    // Habilitar el scroll nuevamente
    document.body.style.overflow = 'auto';
    
    // Scroll hasta el principio de la página
    window.scrollTo(0, 0);
  }, 3000);
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
