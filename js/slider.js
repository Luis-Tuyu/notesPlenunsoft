//creación de sliders con IMG
var fundamentosProg = [{
    id:1,
    title:"Lógica",
    content:"La lógica es una rama del conocimiento que trata los métodos de un razonamiento mediante reglas y técnicas, con el fin de determinar si un argumento es válido.",
    source:'src/logica.jpg'
},
{
    id:2,
    title:"conjunto",
    content:"Un conjunto es una agrupación o colección de cualquier tipo de objetos que tienen propiedades comunes, a estos objetos se le denominan elementos.",
    source:'src/conjunto.png'
},
{
    id:3,
    title:"tablas de verdad",
    content:"Las tablas de verdad son un arreglo que nos permite tener todos los posibles valores de verdad de una proposición compuesta",
    source:'src/tablas_verdad4.png'
},{
    id:4,
    title:"algoritmos",
    content:"Los algoritmos son secuencia de pasos lógicos y matemáticos que permite solucionar un problema o cumplir con objetivo.",
    source:'src/algoritmo.jpg'
}]

var indiceImg = 0;
function nextSlide(){
    let img_html = document.getElementById('img-fundamentos');
    let titulo_html = document.getElementById('titulo-fundamentos');
    let parrafo_html = document.getElementById('parrafo-fundamentos');

    indiceImg < fundamentosProg.length-1 ? indiceImg++ : indiceImg=0;
    
    img_html.src =fundamentosProg[indiceImg].source;
    titulo_html.innerText = fundamentosProg[indiceImg].title;
    parrafo_html.innerText = fundamentosProg[indiceImg].content;

}