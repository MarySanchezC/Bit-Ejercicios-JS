const dia = () => {
    let semana = prompt(
      "Ingrese un día de la semana"
    ).toLowerCase();
  
    switch (semana) {
      case "lunes":
        alert("Pasear al perro (semana)");
        break;
  
      case "martes":
        alert("Ir al Gym (semana)");
        break;
  
      case "miercoles":
        alert("Cita con el medico (semana)");
        break;
  
      case "jueves":
        alert("Comprar viveres (semana)");
        break;

      case "viernes":
        alert("Ir de fiesta (semana)");
        break;

      case "sabado":
        alert("Ir a almorzar con mis amigos (fin de semana)");
        break;

      case "domingo":
        alert(" Ir a la vereda (fin de semana) ");
        break;
  
      default:
        alert("Por favor ingresar un día de la semana");
        break;
    }
  };
  
  btn3.onclick = function () {
    dia();
  };
  