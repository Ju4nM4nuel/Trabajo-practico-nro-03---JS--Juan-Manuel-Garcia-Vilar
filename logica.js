
const btnInicio = document.getElementById("btn-inicio")
const btnAcerca = document.getElementById("btn-acerca")
const btnAyuda = document.getElementById("btn-ayuda")

btnInicio.addEventListener("click", function(){
    window.scrollTo ({top: 0, behavior: "smooth"});
    console.log("Navegando al Inicio");
});

btnAcerca.addEventListener("click", function() {
    // Busca la sección "Sobre mí" y se desplaza suavemente
    document.getElementById("seccion-acerca").scrollIntoView({ behavior: 'smooth' });
});

btnAyuda.addEventListener("click", function() {
    alert("¿Necesitas ayuda? Soy Juan Manuel");
});