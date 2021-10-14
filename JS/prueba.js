alert("Bienvenido para ingresar continue");

const saldoUsuario = () => {
  let edad = prompt("Ingresa tu edad");

  let sexo = prompt("Ingresa tu sexo: Hombre o Mujer");

  let boton = document.getElementById("boton");

  if (sexo == "mujer" && edad == "18") {
    alert("El valor de la entrada es:20.000");
  } else if (sexo == "mujer" && edad == 19) {
    alert("El valor de la entrada es:20.000");
  } else if (sexo == "mujer" && edad == 20) {
    alert("El valor de la entrada es:20.000");
  } else if (sexo == "mujer" && edad == 21) {
    alert("El valor de la entrada es:20.000");
  } else if (sexo == "mujer" && edad == 22) {
    alert("El valor de la entrada es:20.000");
  } else if (sexo == "mujer" && edad == 23) {
    alert("El valor de la entrada es:20.000");
  } else if (sexo == "mujer" && edad == 24) {
    alert("El valor de la entrada es:20.000");
  } else if (sexo == "mujer" && edad == 25) {
    alert("El valor de la entrada es:20.000");
  } else if (sexo == "mujer" && edad >= 26) {
    alert("El valor de la entrada es:25.000");
  } else if (sexo == "mujer" && edad < 18) {
    alert("Tienes que ser mayor de edad para ingresar");
  }

  if (sexo == "hombre" && edad == "18") {
    alert("El valor de la entrada es:25.000");
  } else if (sexo == "hombre" && edad == 19) {
    alert("El valor de la entrada es:25.000");
  } else if (sexo == "hombre" && edad == 20) {
    alert("El valor de la entrada es:25.000");
  } else if (sexo == "hombre" && edad == 21) {
    alert("El valor de la entrada es:25.000");
  } else if (sexo == "hombre" && edad == 22) {
    alert("El valor de la entrada es:25.000");
  } else if (sexo == "hombre" && edad == 23) {
    alert("El valor de la entrada es:25.000");
  } else if (sexo == "hombre" && edad == 24) {
    alert("El valor de la entrada es:25.000");
  } else if (sexo == "hombre" && edad >= 25) {
    alert("El valor de entrada serÃ¡ es: 30.000");
  } else if (sexo == "hombre" && edad < 18) {
    alert("Tienes que ser mayor de edad para ingresar");
  }
};

boton.onclick = function () {
  saldoUsuario();
};
