// Cierra otros submenús cuando uno se abre
document.querySelectorAll('.dropdown__check').forEach(function(check) {
    check.addEventListener('change', function() {
        if (this.checked) {
            document.querySelectorAll('.dropdown__check').forEach(function(other) {
                if (other !== check) other.checked = false;
            });
        }
    });
});

// Cierra todos los submenús cuando se cierra el menú principal
document.addEventListener('click', function(e) {
    // Si el menú principal se cierra (por ejemplo, haciendo click fuera)
    var menu = document.getElementById('menu');
    if (!menu.contains(e.target)) {
        document.querySelectorAll('.dropdown__check').forEach(function(check) {
            check.checked = false;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const openMenuBtn = document.querySelector('.nav__menu');
    const closeMenuBtn = document.querySelector('.nav__menu--second');
    const menu = document.getElementById('menu');
    const submenuChecks = document.querySelectorAll('.dropdown__check');

    // Cierra todos los submenús
    function closeAllSubmenus() {
        submenuChecks.forEach(check => check.checked = false);
    }

    // Al abrir el menú, cierra submenús
    if (openMenuBtn) {
        openMenuBtn.addEventListener('click', closeAllSubmenus);
    }

    // Al cerrar el menú, cierra submenús
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeAllSubmenus);
    }

    // Solo un submenú abierto a la vez
    submenuChecks.forEach(function(check) {
        check.addEventListener('change', function() {
            if (this.checked) {
                submenuChecks.forEach(function(other) {
                    if (other !== check) other.checked = false;
                });
            }
        });
    });

    // Cierra submenús al hacer clic fuera del menú
    document.addEventListener('click', function(e) {
        if (
            menu &&
            !menu.contains(e.target) &&
            (!openMenuBtn || !openMenuBtn.contains(e.target)) &&
            (!closeMenuBtn || !closeMenuBtn.contains(e.target))
        ) {
            closeAllSubmenus();
        }
    });
});