/* EFECTO ACTIVE */
/* let links = document.querySelectorAll(".header-nav-ul-li-a")

links.forEach(link=>{
    link.addEventListener("click",()=>{
        document.querySelector(".header-nav-ul-li-a-active").classList.remove(".header-nav-ul-li-a-active")
        link.classList.add("header-nav-ul-li-a-active")
    })  
}) */



/* PROPAGANDA CELULAR*/
/* let body = document.querySelector('body');
let slide = document.querySelector('#caja-ropa');
let widthWindow = body.clientWidth;
let widthBox = slide.clientWidth;
let widDif = widthWindow - widthBox;
let width = slide.clientWidth + widDif;
let slider = document.querySelector('#slider-propaganda').animate([
   // keyframes
   { transform: 'translateX(0px)' },
   { transform: 'translateX(' + -(width * 2) + 'px)' }
 ], {
   // timing options
   duration: 4000,
   iterations: Infinity
 }); */

const slider = document.querySelector("#slider")
let sliderSection = document.querySelectorAll(".slider-section")
let sliderSectionLast = sliderSection[sliderSection.length-1]

slider.insertAdjacentElement("afterbegin",sliderSectionLast)

function next(){
  let sliderSectionFirst = document.querySelectorAll(".slider-section")[0]
  slider.style.marginLeft = "-200%"
  slider.style.transition = "all .5s"
  setTimeout(function(){
    slider.style.transition = "none"
    slider.insertAdjacentElement("beforeend",sliderSectionFirst)
    slider.style.marginLeft = "-100%"
  },500)
}

setInterval(function(){
  next()
},3000)













































