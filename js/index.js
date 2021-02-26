/*Agregamos la información de la API*/
let apiTopics = [
  {
    id: 1,
    title: "Arquitectura cliente/servidor",
    content:
      "Es un modelo en la cual las tareas se dividen entre los proveedores del servicio y los clientes, quienes consumen dichos recursos",
    recurso: "src/IngSoftware.jpg",
  },
  {
    id: 2,
    title: "http",
    content:
      "Es el protocolo de comunicación que permite las transferencias de información a través de archivos html en la WEB",
    recurso: "src/http.jpg",
  },
  {
    id: 3,
    title: "WebService",
    content:
      "Podemos afirmar que no todas las API son en sí mismas son un Servicio Web pero todos los Servicios Web sí son APIS",
    recurso: "src/arquitectura.png",
  },
  {
    id: 4,
    title: "API-REST",
    content:
      "Es una transferencia de estado representacional, este representa un enfoque de comunicación simple y estandarizada.",
    recurso: "src/API.png",
  },
];

window.onload = () => {
  /* alert("bienvenido"); */
  let apiSection = document.getElementById("apiSection");
  apiTopics.forEach((topic) => {
    apiSection.innerHTML += `<div class="pl-2">
        <img src="${topic.recurso}" alt="Ing software" height="130px" width="130"
            class="br-10 center-img">
        <h3 class="my-0  pt-3 text-center subtitulo-2">${topic.title}</h3>
    </div>`;
  });
  /* console.log(apiSection); */
};

function showTextApi() {
  //parrafo text-center my-0
  let apiHtml = document.getElementById("apiSection");

  for (let i = 0; i < apiHtml.childElementCount; i++) {
    let text = document.createElement("p");
    //crear el texto de parrafo y las clases
    text.appendChild(document.createTextNode(apiTopics[i].content));
    text.classList.add("parrafo", "text-center", "my-0");
    text.setAttribute('name', 'text-api');
    apiHtml.children[i].appendChild(text);
  }
  //ocultar btn y desocultar
  let btnShow = document.getElementById('btnShow');
  btnShow.classList.add('ocultar');
  let btnHide = document.getElementById('btnHide');
  btnHide.classList.remove('ocultar');
}

function hideTextApi(){
  console.log("HideText");
  let apiText = document.getElementsByName('text-api');
  //considerar que el arreglo disminuye
  while(apiText.length !== 0){
    apiText[0].parentNode.removeChild(apiText[0]);
  }
  /* let hijo= apiText[0];
  console.log(apiText[0].parentNode.removeChild(hijo)); */
  let btnHide = document.getElementById('btnHide');
  btnHide.classList.add('ocultar');
  let btnShow = document.getElementById('btnShow');
  btnShow.classList.remove('ocultar');
  
}
//Referencias: http://www.codexexempla.org/curso/curso_4_3_d.php#aCh 