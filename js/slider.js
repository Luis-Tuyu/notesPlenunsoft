//creación de sliders con IMG
window.addEventListener('load',()=>{
    console.log("El contenido ha cargado");
    document.slider.src = 'src/imagen1.jpg';
})

var indiceImg = 0;
function nextSlide(){
    const imagenes = ['src/imagen1.jpg','src/imagen2.jpeg', 'src/imagen3.jpg'];
    indiceImg < imagenes.length-1 ? indiceImg++ : indiceImg=0;
    document.slider.src = imagenes[indiceImg];
}