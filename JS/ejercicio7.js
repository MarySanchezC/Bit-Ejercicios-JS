var cont = 0;

function crear() {
  var creardiv = document.createElement("div");
  cont++;
  creardiv.innerHTML = cont;
  document.getElementById("container").appendChild(creardiv);
}

function cambiarColor(container) {
  x = document.getElementById(container);
  if (x.style.color == "rgb(183, 15, 209)") {
    x.style.color = "rgb(255, 0, 0)";
  } else {
    x.style.color = "rgb(183, 15, 209)";
  }
}