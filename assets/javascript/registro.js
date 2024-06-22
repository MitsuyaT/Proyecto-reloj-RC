const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];

const ingreseUsuario = document.getElementById("idIngreseUsuario");
const ingreseEmail = document.getElementById("idIngreseEmail");
const ingreseContrasenia = document.getElementById("idIngreseContrasenia");
const ingreseRepetirContrasenia = document.getElementById(
  "idIngreseRepetirContrasenia"
);
const botonRegistro = document.getElementById("idBotonRegistro");
const divErrorUsuario = document.getElementById("idErrorUsuario");
const divErrorEmailUsuario = document.getElementById("idErrorEmailUsuario");
const divErrorContrasenia = document.getElementById("idErrorContrasenia");
const divErrorRepetirContrasenia = document.getElementById(
  "idErrorRepetirContrasenia"
);

divErrorUsuario.classList.add("d-none");
divErrorEmailUsuario.classList.add("d-none");
divErrorContrasenia.classList.add("d-none");
divErrorRepetirContrasenia.classList.add("d-none");

const enviarFormulario = (event) => {
  event.preventDefault();
  if (!ingreseUsuario.value) {
    divErrorUsuario.classList.remove("d-none");
    ingreseUsuario.classList.add("is-invalid");
  }
  if (!ingreseEmail.value) {
    divErrorEmailUsuario.classList.remove("d-none");
    ingreseEmail.classList.add("is-invalid");
  }

  if (!ingreseContrasenia.value) {
    divErrorContrasenia.classList.remove("d-none");
    ingreseContrasenia.classList.add("is-invalid");
  }

  if (!ingreseRepetirContrasenia.value) {
    divErrorRepetirContrasenia.classList.remove("d-none");
    ingreseRepetirContrasenia.classList.add("is-invalid");
  }

  if (ingreseRepetirContrasenia.value === ingreseContrasenia.value) {
    if (
      !ingreseContrasenia.value.length &&
      !ingreseRepetirContrasenia.value.length
    ) {
      return alert("ERROR: Campo vacio Contraseña y/o Repetir contraseña");
    }

    if (!ingreseEmail.value) {
      return alert("ERROR: Campo de email vacío");
    }

    if (usuariosLocalStorage.length) {
      const usuarioExiste = usuariosLocalStorage.find(
        (usuario) => usuario.nombreDeUsuario === ingreseUsuario.value
      );

      if (usuarioExiste) {
        return alert("Usuario no disponible");
      }
      const nuevoUsuario = {
        id: usuariosLocalStorage[usuariosLocalStorage.length - 1].id + 1,
        nombreDeUsuario: ingreseUsuario.value,
        contrasenia: ingreseContrasenia.value,
      };

      usuariosLocalStorage.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
      alert("Usuario creado con éxito");
    } else {
      const nuevoUsuario = {
        id: 1,
        nombreDeUsuario: ingreseUsuario.value,
        contrasenia: ingreseContrasenia.value,
      };

      usuariosLocalStorage.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
      alert("Usuario creado con éxito");
    }
  } else {
    alert("Las contraseñas no son iguales");
  }
};

botonRegistro.addEventListener("click", enviarFormulario);
