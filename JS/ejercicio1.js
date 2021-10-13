
const nombretext = document.getElementById("nombretext");
const sueldotext = document.getElementById("sueldotext");
const nombre1 = "Mary from the sea";
const sueldo2 = 6000000;
const btn = document.getElementById("btn");
const write2 = () => {
  if (nombretext.innerHTML == "") {
    nombretext.innerHTML = nombre1;
  } else if (nombretext.innerHTML == nombre1) {
    sueldotext.innerHTML = sueldo2;
  } else {
    alert("Completo");
  }
};

btn.onclick = function () {
  write2();
};
