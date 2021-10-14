let boton = document.getElementById("boton");

const pedidoCliente = () => {
  let nombre = prompt("Ingrese su nombre");
  alert("Bienvenido " + nombre + " realiza tu pedido");
  alert("Asegurate de escribir todo bien (sin mayusculas y sin acentos)");
  let tamaño = prompt(
    "Ingresa el tamaño de tu pizza: Personal, Mediana o Familiar"
  );

  if (tamaño == "personal") {
  } else if (tamaño == "mediana") {
  } else if (tamaño == "familiar") {
  } else if (tamaño == "no") {
    alert("Vuelva pronto!");
  }

  if (tamaño == "personal") {
    var tipo = prompt(
      "Eliga el tipo de pizza: Pollo y Champiñones, Hawaiana, Carnes"
    );
  }

  if (tamaño == "personal" && tipo == "pollo y champiñones") {
    var acompPC = prompt("eliga un acompañamiento: -Con Queso -Sin Queso");
  } else if (tamaño == "personal" && tipo == "hawaiana") {
    var acompH = prompt("eliga un acompañamiento: -Sin piña -Sin jamón");
  } else if (tamaño == "personal" && tipo == "carnes") {
    var acompC = prompt("eliga un acompañamiento: -Sin salami -Con Queso");
  } else if (tamaño == "personal" && tipo == "no") {
    alert("Su pedido es: Pizza personal");
  }

  if (tipo == "pollo y champiñones" && acompPC == "con queso") {
    alert("Su pedido es: Pizza de pollo y champiñones con queso");
  } else if (tipo == "pollo y champiñones" && acompPC == "sin queso") {
    var acompPC1 = prompt(
      "desea su pizza: Con salsa o Con borde de bocadillos? "
    );
  } else if (tipo == "pollo y champiñones" && acompPC == "no") {
    alert("Su pedido es: Pizza personal con pollo y champiñones");
  }

  switch (acompPC1) {
    case "con salsa":
      alert("Su pedido es: Pizza personal de pollo y champiñones con salsa");
      break;

    case "con borde de bocadillos":
      alert(
        "Su pedido es: Pizza personal de pollo y champiñones con borde de bocadillos"
      );
      break;

    case "no":
      alert("Su pedido es: Pizza personal con pollo y champiñones");
      break;
  }

  if (tipo == "hawaiana" && acompH == "sin piña") {
    alert("Su pedido es: Pizza personal hawaiana sin piña");
  } else if (tipo == "hawaiana" && acompH == "sin jamon") {
    var acompH1 = prompt("Desea su pizza con salami? (s/n)");
  } else if (tipo == "hawaiana" && acompH == "no") {
    alert("Su pedido es: Pizza personal hawaina");
  }

  switch (acompH1) {
    case "s":
      alert("Su pedido es: Pizza personal hawaina con salami");
      break;

    case "n":
      alert("Su pedido es: Pizza personal hawaina");
      break;

    case "no":
      alert("Su pedido es: Pizza personal hawaina");
      break;
  }
  if (tipo == "carnes" && acompC == "sin salami") {
    var acompC1 = prompt("Desea su pizza con Cabano? (s/n)");
  } else if (tipo == "pollo y champiñones" && acompC == "con queso") {
    alert("Su pedido es: Pizza de carnes con queso");
  } else if (tipo == "carne" && acompC == "no") {
    alert("Su pedido es: Pizza personal de carnes");
  }

  switch (acompC1) {
    case "s":
      alert("Su pedido es: Pizza personal de carnes con cabano ");
      break;

    case "n":
      alert("Su pedido es: Pizza personal de carnes ");
      break;

    case "no":
      alert("Su pedido es: Pizza personal de carnes");
      break;
  }

  if (tamaño == "mediana") {
    var tipo1 = prompt("Eliga el tipo de pizza: Mexicana, Criolla");
  }

  if (tamaño == "mediana" && tipo1 == "mexicana") {
    var acompM = prompt("eliga un acompañamiento: -Con nachos - Sin nachos");
  } else if (tamaño == "mediana" && tipo1 == "criolla") {
    var acompCR = prompt("eliga un acompañamiento:   -Con Maíz -Sin Maíz");
  } else if (tamaño == "mediana" && tipo11 == "no") {
    alert("Su pedido es: Pizza mediana");
  }

  if (tipo1 == "mexicana" && acompM == "con nachos") {
    alert("Su pedido es: Pizza mediana mexicana con nachos");
  } else if (tipo1 == "mexicana" && acompM == "sin nachos") {
    var acompM1 = prompt("Desea su pizza con extra guacamole? (s/n)");
  } else if (tipo == "mexicana" && acompM == "no") {
    alert("Su pedido es: Pizza mediana mexicana");
  }

  switch (acompM1) {
    case "s":
      alert("Su pedido es: Pizza mediana mexicana con extra guacamole ");
      break;

    case "n":
      alert("Su pedido es: Pizza mediana mexicana");
      break;

    case "no":
      alert("Su pedido es: Pizza mediana mexicana");
      break;
  }

  if (tipo1 == "criolla" && acompCR == "con maiz") {
    alert("Su pedido es: Pizza mediana criolla con maiz");
  } else if (tipo1 == "mexicana" && acompCR == "sin maiz") {
    var acompCR1 = prompt(
      "Desea su pizza con -Extra carne molida o con -Queso? "
    );
  } else if (tipo == "mexicana" && acompCR == "no") {
    alert("Su pedido es: Pizza mediana criolla");
  }
  switch (acompCR1) {
    case "extra carne molida":
      alert("Su pedido es: Pizza mediana criolla con extra carne molida ");
      break;

    case "queso":
      alert("Su pedido es: Pizza mediana criolla con queso");
      break;

    case "no":
      alert("Su pedido es: Pizza mediana criolla");
      break;
  }

  if (tamaño == "familiar") {
    var tipo2 = prompt("Eliga el tipo de pizza: -Vegetariana  -Carne y pollo");
  }

  if (tamaño == "familiar" && tipo2 == "vegetariana") {
    var acompV = prompt("eliga un acompañamiento: -Con queso - Sin queso");
  } else if (tamaño == "familiar" && tipo2 == "carne y pollo") {
    var acompCP = prompt(
      "eliga un acompañamiento:   -Adición de Salchicha  -Adición de Champiñones"
    );
  } else if (tamaño == "familiar" && tipo2 == "no") {
    alert("Su pedido es: Pizza familiar");
  }

  if (tipo2 == "vegetariana" && acompV == "Con queso") {
    alert("Su pedido es: Pizza familiar vegetariana con queso");
  } else if (tipo2 == "vegetariana" && acompV == "sin queso") {
    alert("Su pedido es: Pizza familiar vegetariana sin queso");
  } else if (tipo == "vegetariana" && acompV == "no") {
    alert("Su pedido es: Pizza familiar vegetariana");
  }

  switch (acompCP) {
    case "adicion de salchicha":
      alert(
        "Su pedido es: Pizza familiar de carne y pollo con adición de salchica"
      );
      break;

    case "adicion de champiñones":
      alert(
        "Su pedido es: Pizza familiar de carne y pollo con adicón de champiñones"
      );
      break;

    case "no":
      alert("Su pedido es: Pizza familiar de carne y pollo");
      break;
  }
};

boton.onclick = function () {
  pedidoCliente();
};