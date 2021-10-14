window.onload = function () {
  var img = document.getElementById("img");
  img.addEventListener("mouseover", cambiarImagen);
  img.addEventListener("mouseout", imagenInicial);

  function cambiarImagen() {
    this.setAttribute(
      "src",
      "https://i.pinimg.com/564x/85/b5/8c/85b58cbab38f1bff46e1c8a212c55875.jpg"
    );
  }

  function imagenInicial() {
    this.setAttribute(
      "src",
      "https://i.pinimg.com/564x/1b/4c/74/1b4c74106567b5a8000f44190e7c0b53.jpg"
    );
  }
};