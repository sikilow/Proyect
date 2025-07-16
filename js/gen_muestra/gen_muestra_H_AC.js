// --- Generador de muestras dinámicas --- 
function renderMuestras(muestras) {
    const main = document.querySelector('div.muestras_menu');
    main.innerHTML = ''; // Limpia el contenido anterior

    muestras.forEach(muestra => {
        const div = document.createElement('div');
        div.className = 'muestras_menu';
        div.innerHTML = `
            <div class="img_product" style="background-image: url('${muestra.imagen}');"></div>
            <div class="text_description" style="margin-bottom:20px;">
                <p style="font-size:30px;">${muestra.nombre}</p>
                <br>
                <p style="font-size:18px;">${muestra.ingredientes}</p>
                <br>
                <strong><p style="font-size:22px; ">${muestra.precio}</p></strong>
            </div>`;
        main.appendChild(div);
    });
}

const productos = [
    {
        imagen: '../../img/Hamburguesas/AlCarbon/clasica al carbón.jpg',
        nombre: 'Hamburguesa Sencilla',
        ingredientes: 'Camarón a la plancha, queso asadero, cebolla caramelizada, lechuga, jitomate, cebolla y pepinillos.',
        precio: '$119'
    },
    {
        imagen: '../../img/Hamburguesas/AlCarbon/3 quesos.jpg',
        nombre: 'Tres Quesos',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
    ,
    {
        imagen: '../../img/Hamburguesas/AlCarbon/golden cheese.jpg',
        nombre: 'Golden Cheese',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
    ,
    {
        imagen: '../../img/Hamburguesas/AlCarbon/suprema.jpg',
        nombre: 'SUPREMA',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
    ,
    {
        imagen: '../../img/Hamburguesas/AlCarbon/boluda.jpg',
        nombre: 'Boluda',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
    ,
    {
        imagen: '../../img/Hamburguesas/AlCarbon/don bolo.jpg',
        nombre: 'Don Bolo',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    },
    {
        imagen: '../../img/Hamburguesas/AlCarbon/cielo, mar y tierra.jpg',
        nombre: 'Cielo,Mar y Tierra',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    },
    {
        imagen: '../../img/Hamburguesas/AlCarbon/cowboy.jpg',
        nombre: 'COWBOY',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
  
];


renderMuestras(productos);