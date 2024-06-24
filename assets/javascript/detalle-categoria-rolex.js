const divCards = document.getElementById("cards");

const productoReloj = [
  {
    id: 1,
    nombre: "Rolex 76080",
    descripcion:
      "En estuche Rolex, con papeles, factura de compra y garantía de servicio por un año de cuerda.",
    precio: 149.99,
    imagen:
      "https://d28hi93gr697ol.cloudfront.net/57f0dd93-7e22-7738-ef65-bbb21545dbf4/img/Producto/76d7c1ec-b8b2-98ea-4b5f-bc867c7c505c/Reloj7-a-1-64231bde77016.webp",
  },
  {
    id: 2,
    nombre: "Rolex Caballero",
    descripcion:
      "Materia del bisél: Oro amarillo, Material de la correa: Cuero",
    precio: 89.99,
    imagen:
      "https://d28hi93gr697ol.cloudfront.net/57f0dd93-7e22-7738-ef65-bbb21545dbf4/img/Producto/286/9da1924fa9c0fd7ed42cc963d691dd56-632130cff4215.webp",
  },
  {
    id: 3,
    nombre: "Rolex 69173",
    descripcion: "Genero: Dama Movimiento: Automático",
    precio: 249.99,
    imagen:
      "https://d28hi93gr697ol.cloudfront.net/57f0dd93-7e22-7738-ef65-bbb21545dbf4/img/Producto/288/cacc002e9ca5bb3d6e935c7f5b87b940-632130d5735e4.webp",
  },
  {
    id: 4,
    nombre: "Rolex 69173",
    descripcion:
      "Duración de la batería de 10 años. Resistente al agua 100m. Retroiluminación LED. ",
    precio: 199.99,
    imagen:
      "https://d28hi93gr697ol.cloudfront.net/57f0dd93-7e22-7738-ef65-bbb21545dbf4/img/Producto/de5e6624-403a-c4c0-2d17-ebcffdeb561b/Reloj2-a-7-6401eacd756b0.webp",
  },
  {
    id: 5,
    nombre: "Rolex 79160 ",
    descripcion:
      "Vidrio : Cristal de zafiro Cuadrante: Azul, calendario c/pase rápido",
    precio: 129.99,
    imagen:
      "https://d28hi93gr697ol.cloudfront.net/57f0dd93-7e22-7738-ef65-bbb21545dbf4/img/Producto/57b04c4c-bea6-243e-31e2-2b2be7a5cc5b/Reloj10-a-6419d527ce9b9.webp",
  },
  {
    id: 6,
    nombre: "Rolex 1038",
    descripcion:
      "Cuadrante : Champagne, números romanos. Cierre: Broche plegable",
    precio: 159.99,
    imagen:
      "https://d28hi93gr697ol.cloudfront.net/57f0dd93-7e22-7738-ef65-bbb21545dbf4/img/Producto/3a231d68-8ea4-16c1-c3d7-03b0ecebdc87/Reloj1-a-1-63483939576ed.webp",
  },
  {
    id: 7,
    nombre: "Rolex  177200",
    descripcion: "Material de la correa: Acero. Vidrio: Cristal de Zafiro",
    precio: 179.99,
    imagen:
      "https://d28hi93gr697ol.cloudfront.net/57f0dd93-7e22-7738-ef65-bbb21545dbf4/img/Producto/bec7178b-fd69-c0fc-58e0-bc8437b7edd0/Reloj2-a-13-654a4da5544a8.webp",
  },
  {
    id: 8,
    nombre: "Rolex 17013",
    descripcion: "Movimiento: Quartz. Material: Acero/Oro",
    precio: 189.99,
    imagen:
      "https://d28hi93gr697ol.cloudfront.net/57f0dd93-7e22-7738-ef65-bbb21545dbf4/img/Producto/e8a33d44-7230-9a70-ea5a-3d9cd395287e/Reloj2-a-9-6422ee80b1a65.webp",
  },
  {
    id: 9,
    nombre: "Rolex 116000 ",
    descripcion: "idrio : Cristal de zafiro. Cuadrante: Champagne",
    precio: 139.99,
    imagen:
      "https://d28hi93gr697ol.cloudfront.net/57f0dd93-7e22-7738-ef65-bbb21545dbf4/img/Producto/b25c5300-5344-5948-d887-e45fc1f7229f/Reloj2-a-6-6401e705ac87a.webp",
  },
  {
    id: 10,
    nombre: "Rolex 16570",
    descripcion: "Movimiento: automático Calibre: 3185",
    precio: 299.99,
    imagen:
      "https://d28hi93gr697ol.cloudfront.net/57f0dd93-7e22-7738-ef65-bbb21545dbf4/img/Producto/227/b3a092b772c28b4d656a285fd62fbf07-6321303080ad6.webp",
  },
];
localStorage.setItem("productos", JSON.stringify(productoReloj));

divCards.innerHTML = productoReloj
  .map(
    (producto) => `
  <div class="col-12 col-md-6 col-lg-4 my-3">
<div class="card card-style" style="width: 18rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-light">${producto.nombre}</h5>
    <h5 class="card-title text-light">${producto.descripcion}</h5>
    <p class="card-text text-light">$${producto.precio}</p>
    <div class="d-flex justify-content-center">
    <a href="../pages/detalle-producto.html?id=${producto.id}" class="btn btn-secondary">ver mas</a>
    </div>
  </div>
</div>
  </div>`
  )
  .join("");
