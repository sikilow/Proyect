document.addEventListener("DOMContentLoaded", () => {
  // Cargar header
  fetch('../../header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      // Aquí puedes inicializar menú, etc.
    });

  
});
