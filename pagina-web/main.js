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
