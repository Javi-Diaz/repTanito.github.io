/* SLIDER DESTACADO | NUEVOS INGRESOS |LIQUIDACION*/ 
let body = document.querySelector('body');
let widthWindow = body.clientWidth;
if (widthWindow < 900) {
  let swiper = new Swiper('.swiper',{

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
}
