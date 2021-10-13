const image = document.getElementById("image");

image.style.visibility = "visible";

const show = () => {
    if (image.style.visibility == "visible") {
      image.style.borderRadius = "100%";
    } else {
      image.style.visibility = "visible";
    }
  };
const show2 = () => {
    if (image.style.visibility == "visible") {
      image.style.borderRadius = "0%" ;
    } else {
      image.style.visibility = "visible";
    }
  };
  
  image.onmouseover= function(){
      show();
  }
  image.onmouseout= function(){
      show2();
  }