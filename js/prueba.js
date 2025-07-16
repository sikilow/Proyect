document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");

  const checkMenuState = () => {
    // Detecta si el hash de la URL es "#menu"
    if (window.location.hash === "#menu") {
      footer.style.display = "none";
    } else {
      footer.style.display = "";
    }
  };

  // Detectar cambios en el hash
  window.addEventListener("hashchange", checkMenuState);

  // Verificar estado inicial por si ya está en #menu
  checkMenuState();
});