const saldoUsuario = () => {
  alert("Bienvenido para ingresar continue");
  let edad = prompt("Ingresa tu edad");

  let sexo = prompt("Ingresa tu sexo: Hombre o Mujer");

  let boton6 = document.getElementById("boton6");
  console.log(sexo);
  if (sexo == "mujer") {
    if (edad < "18") {
      alert("Debes ser mayor de edad para ingresar");
    } else if (edad >= "25") {
      alert("El valor de la entrada es: 25.000");
    } else if (edad > "18" || edad < "25") {
      alert("El valor de la entrada es: 20.000");
    }
  } else {
    if (sexo == "hombre") {
      if (edad < "18") {
        alert("Debes ser mayor de edad para ingresar");
      } else if (edad >= "24") {
        alert("El valor de la entrada es: 30.000");
      } else if (edad > "18" || edad < "24") {
        alert("El valor de la entrada es h: 25.000");
      }
    }
  }
};

boton6.onclick = function () {
  saldoUsuario();
};
