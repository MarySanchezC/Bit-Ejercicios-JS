var prod1 = 1000;
var prod2 = 800;
var prod3 = 500;
var fondos = 750;
const cuenta = () => {
  let saldo = prompt("Desea saber su saldo: si o no");

  switch (saldo) {
    case "si":
      alert("Su saldo es" + fondos);
      break;

    case "no":
      alert("Siga con la operacion");
      break;

    default:
      alert("Por favor ingresa si o no");
      break;
  }

  let producto = prompt("Que producto desea llevar: 1, 2, 3");

  switch (producto) {
    case "1":
      alert("Producto 1 = $1000");
      if (fondos >= prod1) {
        alert("Se agrego al carrito");
      } else {
        alert("Regrese cuando haya mas saldo");
      }
      break;

    case "2":
      alert("Producto 2 = $800");
      if (fondos >= prod2) {
        alert("Se agrego al carrito");
      } else {
        alert("Regrese cuando haya mas saldo");
      }
      break;

    case "3":
      alert("Producto 3 = $500");
      if (fondos >= prod3) {
        alert("Se agrego al carrito");
      } else {
        alert("Regrese cuando haya mas saldo");
      }
      break;
    default:
      alert("Por favor ingresa el numero de uno de los productos en venta");
      break;
  }
};

boton7.onclick = function () {
  cuenta();
};
