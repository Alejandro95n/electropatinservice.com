fetch('products.json')
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.getElementById('productos');
    productos.forEach(producto => {
      const div = document.createElement('div');
      div.className = 'border p-4 rounded shadow';
      div.innerHTML = `
        <img src="\${producto.imagen}" alt="\${producto.nombre}" class="w-full h-48 object-cover mb-2">
        <h3 class="text-lg font-semibold">\${producto.nombre}</h3>
        <p class="text-sm mb-2">\${producto.descripcion}</p>
        <p class="text-red-600 font-bold text-lg mb-2">€\${producto.precio}</p>
        <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Añadir al carrito</button>
      `;
      contenedor.appendChild(div);
    });
  });
