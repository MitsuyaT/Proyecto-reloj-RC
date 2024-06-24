const divCards = document.getElementById("cards");

const productoReloj = [
  {
    id: 1,
    nombre: "RELOJ VINTAGE A-159W-N1",
    descripcion: "Iluminación por LED. Cronómetro de 1/100 segundos.",
    precio: 149.99,
    imagen:
      "https://acdn.mitiendanube.com/stores/004/215/620/products/a-159w-n1-2-ee3aacd4fdb7336e3d17121614064922-640-0.webp",
  },
  {
    id: 2,
    nombre: "RELOJ VINTAGE F-91WM-3A",
    descripcion:
      "Resistente al agua. Luz LED. Alarma. Cronómetro de 1/100 segundos.",
    precio: 89.99,
    imagen:
      "https://acdn.mitiendanube.com/stores/004/215/620/products/f-91wm-3a-ffcf73226c1b8708a417121614349516-480-0.webp",
  },
  {
    id: 3,
    nombre: "RELOJ VINTAGE F-91WM-7A",
    descripcion: "Resistente al agua. Luz LED. Alarma",
    precio: 249.99,
    imagen:
      "https://acdn.mitiendanube.com/stores/004/215/620/products/f-91wm-7a-b9516c549a90acfd0317121614350222-480-0.webp",
  },
  {
    id: 4,
    nombre: "RELOJ CASIO W-800H-5A",
    descripcion:
      "Duración de la batería de 10 años. Resistente al agua 100m. Retroiluminación LED. ",
    precio: 199.99,
    imagen:
      "https://acdn.mitiendanube.com/stores/004/215/620/products/w-800h-5a-6e40eef9cc411f52c517150220471206-480-0.webp",
  },
  {
    id: 5,
    nombre: "RELOJ CASIO MTP-VT01B-1B",
    descripcion:
      "Caja y malla de acero anodizado en negro. Malla de triple pliegue. Resistente al agua. ",
    precio: 129.99,
    imagen:
      "https://acdn.mitiendanube.com/stores/004/215/620/products/mtp-vt01b-1b-c6ce75598de3dca5a317121616498505-480-0.webp",
  },
  {
    id: 6,
    nombre: "RELOJ CASIO W-59-1V",
    descripcion:
      "Alarma. Luz LED. Cronómetro de 1/100 segundos. Resistente al agua",
    precio: 159.99,
    imagen:
      "https://acdn.mitiendanube.com/stores/004/215/620/products/w-59-1v-951887c6a02b40c50217121614758309-480-0.webp",
  },
  {
    id: 7,
    nombre: "RELOJ VINTAGE F-91WC-2A",
    descripcion:
      "Resistencia al agua, luz LED, cronómetro de 1/100 seg, alarma diaria, señal horaria.",
    precio: 179.99,
    imagen:
      "https://acdn.mitiendanube.com/stores/004/215/620/products/f-91wc-2a-654e650a54cb8d12b317138974758617-480-0.webp",
  },
  {
    id: 8,
    nombre: "RELOJ VINTAGE A-700WMG-9A",
    descripcion:
      "Caja ultra delgada. Iluminación por LED. Cronómetro de 1/100 segundos.",
    precio: 189.99,
    imagen:
      "https://acdn.mitiendanube.com/stores/004/215/620/products/a-700wemg-9a-fed72f44b3207af5c417121614905712-480-0.webp",
  },
  {
    id: 9,
    nombre: "RELOJ VINTAGE LA-680WGA-1B",
    descripcion:
      "Luz Led. Cronómetro de 1/100 segundos. Alarma diaria. Señal de hora. Calendario automático (fijado en 28 días para febrero).",
    precio: 139.99,
    imagen:
      "https://acdn.mitiendanube.com/stores/004/215/620/products/la-680wga-1b-96c1ecc65989347cab17121614420116-480-0.webp",
  },
  {
    id: 10,
    nombre: "RELOJ CASIO W-217H-9A",
    descripcion:
      "Alarma. Luz LED. Cronómetro de 1/100 segundos. Resistente al agua",
    precio: 299.99,
    imagen:
      "https://acdn.mitiendanube.com/stores/004/215/620/products/w-217h-9a-6e11b40d8aa4d90d8b17121614688176-480-0.webp",
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
