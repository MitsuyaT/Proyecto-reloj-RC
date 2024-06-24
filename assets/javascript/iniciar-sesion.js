const ingreseUsuario = document.getElementById("idIngreseUsuario");
const ingreseContrasenia = document.getElementById("idIngreseContrasenia");

const botonIniciarSesion = document.getElementById("idBotonIniciarSesion");
const divErrorUsuario = document.getElementById("idErrorUsuario");
const divErrorContrasenia = document.getElementById("idErrorContrasenia");

const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];

divErrorUsuario.classList.add("d-none");
divErrorContrasenia.classList.add("d-none");

const enviarFormulario = (event) => {
  event.preventDefault();

  if (!ingreseUsuario.value) {
    divErrorUsuario.classList.remove("d-none");
    ingreseUsuario.classList.add("is-invalid");
  }

  if (!ingreseContrasenia.value) {
    divErrorContrasenia.classList.remove("d-none");
    ingreseContrasenia.classList.add("is-invalid");
  }

  if (ingreseUsuario.value.length && ingreseContrasenia.value.length) {
    const usuario = usuariosLocalStorage.find(
      (usuario) => usuario.nombreDeUsuario === ingreseUsuario.value
    );
    if (!usuario) {
      alert("Usuario o contraseña no coinciden.");
    }

    if (usuario.contrasenia === ingreseContrasenia.value) {
      const usuarioPosicion = localStorage.findIndex(
        (usuariosLocal) => usuariosLocal.id === usuario.id
      );

      usuariosLocalStorage[usuarioPosicion].login = true;
      sessionStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
      alert(`Bienvenido ${usuario.nombreDeUsuario} iniciaste sesión`);
    } else {
      alert("Usuario o contraseña no coinciden.");
    }
  }
};

botonIniciarSesion.addEventListener("click", enviarFormulario);
