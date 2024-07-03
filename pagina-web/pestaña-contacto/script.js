let formulario = document.querySelector("#formulario")
let texto = document.querySelector(".formulario-mensajeEnviado")

formulario.addEventListener("submit",()=>{
    setTimeout(function(){
        texto.style.display = "block"
      },1)
})