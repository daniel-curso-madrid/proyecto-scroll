let contenedor = document.querySelector(".contenedor-imagen");
let palabras2 = document.querySelector(".palabras2");
let palabras = document.querySelector(".palabras");
let contenedor2 = document.querySelector(".contenedor-imagen2");
document.body.addEventListener("wheel", e => {
  contenedor.style.transition = "all 1s ease-in-out";
  palabras2.style.transition = "all 1s ease-in-out";
  palabras.style.transition = "all 1s ease-in-out";
  contenedor2.style.transition = "all 1s ease-in-out";
  //   contenedor.style.top = "900px";
  //   palabras2.style.overflow = "hidden";
  //   palabras2.style.bottom = "0px";
  let y = e.deltaY;
  if (y > 0) {
    contenedor.style.top = "900px";
    palabras2.style.overflow = "hidden";
    palabras2.style.bottom = "0px";
    palabras.style.bottom = "900px";
    contenedor2.style.top = "0px";
  } else if (y < 100) {
    contenedor.style.top = "0px";
    palabras2.style.overflow = "hidden";
    palabras2.style.bottom = "900px";
    palabras.style.bottom = "0px";
    contenedor2.style.top = "900px";
  }
});

console.log(contenedor);
