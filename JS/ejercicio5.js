const contra =document.getElementById("contraseña");


const password = () => {
  let usuario = prompt("Por favor ingresar contraseña");
  let password = "contraseña123";

  if (usuario == password) {
    alert("Bienvenido querido usuario!");
  } else {
    alert("Contraseña incorrecta, intente nuevamente");
    password();
  }
};

contra.onclick = function() {
    password() 
};
