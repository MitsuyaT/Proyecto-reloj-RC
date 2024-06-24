const ingreseEmail = document.getElementById("idIngreseEmail");
const ingreseContrasenia = document.getElementById("idIngreseContrasenia");

const botonIniciarSesion = document.getElementById("idBotonIniciarSesion");
const divErrorEmailUsuario = document.getElementById("idErrorEmailUsuario");
const divErrorContrasenia = document.getElementById("idErrorContrasenia");

divErrorEmailUsuario.classList.add("d-none");
divErrorContrasenia.classList.add("d-none");

const enviarFormulario = (event) => {
  event.preventDefault();

  if (!ingreseEmail.value) {
    divErrorEmailUsuario.classList.remove("d-none");
    ingreseEmail.classList.add("is-invalid");
  }

  if (!ingreseContrasenia.value) {
    divErrorContrasenia.classList.remove("d-none");
    ingreseContrasenia.classList.add("is-invalid");
  }
};

botonIniciarSesion.addEventListener("click", enviarFormulario);