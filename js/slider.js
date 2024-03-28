//Variable de imagen actual en slider
let sliderIndex = 1;
const pasarAnteriorYSiguiente = (n) => {
    verElementoSlider(sliderIndex += n);
}

//Verificación de cambio de imagen
const verElementoSlider = (n) =>{
    let indice;
    let elementosSlider = document.getElementsByClassName("elementoSlider");
    if (n > elementosSlider.length) {sliderIndex = 1}
    if (n < 1) {sliderIndex = elementosSlider.length}
    for (indice = 0; indice < elementosSlider.length; indice++) {
        elementosSlider[indice].style.display = "none";
    }
    console.log(elementosSlider.length);
    elementosSlider[sliderIndex-1].style.display = "block";
}

//Carga de imagen la primera vez cuando se inicializa la página
document.addEventListener("DOMContentLoaded", function() {
    verElementoSlider(sliderIndex);
});