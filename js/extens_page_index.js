document.addEventListener("DOMContentLoaded", () => {
  // Cargar header
  fetch('pag_ext_bs/header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      // Aquí puedes inicializar menú, etc.
    });
  
});
