const id = location.search.split("=")[1];

const productoReloj = JSON.parse(localStorage.getItem("productos") || []);

const divProducto = document.getElementById("divProducto");

const productoElejido = productoReloj.find(
  (producto) => producto.id === Number(id)
);

divProducto.innerHTML = `
      <div class="text-center mt-4 borde">
        <img src="${productoElejido.imagen}" alt="" width="300" />
        <p>${productoElejido.descripcion}</p>
        <p>$${productoElejido.precio}</p>
        <button class="btn btn-success">añadir al carrito</button>
      </div>
`;
