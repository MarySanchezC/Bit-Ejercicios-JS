const personal = document.getElementById("personal");
const mediana = document.getElementById("mediana");
const familiar = document.getElementById("familiar");

const pizzapersonal = () => {
  let personalpizza = prompt("1-Pollo y Champiñones.  2-Hawaiana.  3-Carnes");

  switch (personalpizza) {
    case "1":
      let queso = prompt(" ¿Con queso  o  Sin queso?");
      if (queso == "no") {
        alert("pedido cancelado");
        break;
      }

      let salsa = prompt(" ¿Con Salsa o Sin Salsa?");
      if (salsa == "no") {
        alert("pedido cancelado");
        break;
      }
      let borde = prompt(" ¿Con borde de Bocadillo o sin borde de Bocadillo?");
      if (borde == "no") {
        alert("pedido cancelado");
        break;
      }

      pedido.innerHTML =
        "Una pizza personal de pollo y champiñones " +
        " " +
        queso +
        " " +
        salsa +
        " " +
        borde;

      break;

    case "2":
      let pina = prompt("¿Con piña o Sin piña?");
      if (pina == "no") {
        alert("Pedido Cancelado");
        break;
      }
      let jamon = prompt("¿Con jamón o Sin jamón?");
      if (jamon == "no") {
        alert("Pedido Cancelado");
        break;
      }

      pedido.innerHTML =
        "Una pizza personal Hawaiana " + " " + pina + " " + jamon;

      break;

    case "3":
      let cabano = prompt("¿Con cabano o sin cabano?");
      if (cabano == "no") {
        alert("Pedido Cancelado");
        break;
      }
      let salami = prompt("¿Con salami o sin Salami?");
      if (salami == "no") {
        alert("Pedido Cancelado");
        break;
      }

      pedido.innerHTML =
        "Una pizza personal de caners " + " " + cabno + " " + salami;

      break;

    default:
      alert("Ingrese una opción válida");

      break;
  }
};

personal.onclick = function () {
  pizzapersonal();
};

const pizzamediana = () => {
  let medianapizza = prompt("1-Mexicana.  2-Criolla.");

  switch (medianapizza) {
    case "1":
      let nachos = prompt("¿Con nachos o sin nachos?");
      if (nachos == "no") {
        alert("Pedido Cancelado");
        break;
      }

      let mole = prompt("¿Con Guacamole extra o sin guacamole extra?");
      if (mole == "no") {
        alert("Pedido Cancelado");
        break;
      }

      pedido.innerHTML =
        "Una pizza mediana Mexicana " + " " + nachos + " " + mole;

      break;

    case "2":
      let maiz = prompt("¿Con maiz o sin maiz?");
      if (maiz == "no") {
        alert("Pedido Cancelado");
        break;
      }

      let carne = prompt("¿Con carne molida Extra o sin carne molida Extra?");
      if (carne == "no") {
        alert("Pedido Cancelado");
        break;
      }

      let queso = prompt("¿Con queso o sin queso?");
      if (queso == "no") {
        alert("Pedido Cancelado");
        break;
      }

      pedido.innerHTML =
        "Una pizza mediana Criolla " + " " + carne + " " + queso;

      break;

    default:
      alert("Ingrese una opción válida");
      break;
  }
};

mediana.onclick = function () {
  pizzamediana();
};

const pizzafamiliar = () => {
  let familiarpizza = prompt("1-Vegetariana.  2-Carne y Pollo");

  switch (familiarpizza) {
    case "1":
      let queso = prompt("¿Con queso o sin queso?");
      if (queso == "no") {
        alert("Pedido Cancelado");
        break;
      }

      pedido.innerHTML = "Una pizza familar Vegetariana " + " " + queso;

      break;

    case "2":
      let salchicha = prompt("¿Con salchicha o sin salchicha?");
      if (salchicha == "no") {
        alert("Pedido Cancelado");
        break;
      }

      let champ = prompt("¿Con champiñones o sin champiñones?");
      if (champ == "no") {
        alert("Pedido Cancelado");
        break;
      }

      pedido.innerHTML =
        "Una pizza familiar de Carne y Pollo " + " " + salchicha + " " + champ;

      break;

    default:
      break;
  }
};

familiar.onclick = function () {
  pizzafamiliar();
};
