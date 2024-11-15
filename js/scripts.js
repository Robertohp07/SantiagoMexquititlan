
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".carousel-image");
  let currentIndex = 0;

  setInterval(() => {
      // Oculta la imagen actual
      images[currentIndex].style.opacity = 0.0;

      // Actualiza el índice para mostrar la siguiente imagen
      currentIndex = (currentIndex + 1) % images.length;

      // Muestra la siguiente imagen
      images[currentIndex].style.opacity = 1;
  }, 5000); // Cambia de imagen cada 5 segundos
});