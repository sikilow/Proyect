// --- Generador de muestras dinámicas --- 
function renderMuestras(muestras) {
    const main = document.querySelector('div.muestras_menu');
    main.innerHTML = ''; // Limpia el contenido anterior

    muestras.forEach(muestra => {
        const div = document.createElement('div');
        div.className = 'muestras_menu';
        div.innerHTML = `
            <div class="img_product" style="background-image: url('${muestra.imagen}');"></div>
            <div class="text_description">
                <p style="font-size:20px;">${muestra.nombre}</p>
                <br>
                <p style="font-size:18px;">${muestra.ingredientes}</p>
                <br>
                <strong><p style="font-size:22px;">${muestra.precio}</p></strong>
            </div>`;
        main.appendChild(div);
    });
}

const productos = [
    {
        imagen: '../../img/Hamburguesas/DelMar/de camaron.jpg',
        nombre: 'BOLOBURGUER CAMARÓN',
        ingredientes: 'Camarón a la plancha, queso asadero, cebolla caramelizada, lechuga, jitomate, cebolla y pepinillos.',
        precio: '$119'
    },
    {
        imagen: '../../img/Hamburguesas/DelMar/posible bolofish.jpg',
        nombre: 'BOLOFISH',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
    ,
    {
        imagen: '../../img/Hamburguesas/DelMar/camarón crunchy.jpg',
        nombre: 'BOLOBURGUER CAMARÓN CRUNCHY',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
    ,
    {
        imagen: '../../img/Hamburguesas/DelMar/san blas.jpg',
        nombre: 'SAN BLAS',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }
    ,
    {
        imagen: '../../img/Hamburguesas/DelMar/mexcaltitan.jpg',
        nombre: 'MEXCALTITÁN',
        ingredientes: 'Doble carne, queso cheddar, lechuga, jitomate, cebolla.',
        precio: '$149'
    }

];


renderMuestras(productos);