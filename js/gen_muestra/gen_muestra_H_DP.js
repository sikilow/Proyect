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
        imagen: '../../img/Hamburguesas/DePollo/chiken_pollo.jpg',
        nombre: 'Boloburger de Pollo',
        ingredientes: 'Camarón a la plancha, queso asadero, cebolla caramelizada, lechuga, jitomate, cebolla y pepinillos.',
        precio: '$119'
    },
    {
        imagen: '../../img/Hamburguesas/DePollo/chiken_cheese.jpg',
        nombre: 'Boloburger Chiken Chesse',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
    ,
    {
        imagen: '../../img/Hamburguesas/DePollo/chiken_asadera.jpg',
        nombre: 'Boloburger Chiken Asadera',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
    ,
    {
        imagen: '../../img/Hamburguesas/DePollo/chiken_dip.jpg',
        nombre: 'Boloburger Chiken Dip',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
    ,
    {
        imagen: '../../img/Hamburguesas/DePollo/chiken_nacho.jpg',
        nombre: 'Boloburger Chiken Nacho',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
    ,
    {
        imagen: '../../img/Hamburguesas/DePollo/champi_chiken.jpg',
        nombre: 'Champi Chicken',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    },
    {
        imagen: '../../img/Hamburguesas/DePollo/country_chiken.jpg',
        nombre: 'Country Chicken',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    },
    {
        imagen: '../../img/Hamburguesas/DePollo/porto_bello.jpg',
        nombre: 'Porto Bello',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    },
    {
        imagen: '../../img/Hamburguesas/DePollo/light.jpg',
        nombre: 'Boloburger Light',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
  
];


renderMuestras(productos);