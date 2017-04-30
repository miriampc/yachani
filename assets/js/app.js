<<<<<<< HEAD
<<<<<<< HEAD

var preguntas=[{question:"¿Que podía curar al rey?",type:"factual",alternatives:["Nada podía curarlo.","El agua.","El agua de la vida."]},
               {question:"¿Por qué crees que el duendecillo no se molestó por su indeferencia, ya que el príncipe se disculpó?",type:"factual",alternatives:["El duendecillo tenía una maldición que no podía molestarse si escuchaba la palabra disculpa.","La disculpa es símbolo de respeto y buenos modales.","No puedes molestarte con nadie si te pide disculpas."]},
               {question:"¿Que debió haber hecho el príncipe?",type:"factual",alternatives:["Llevar ayuda.","Preguntar ¿qué hay en el castillo?","Ambas."]},
               {question:"En el texto la palabra “garganta”, ¿qué significado tiene?",type:"léxica",alternatives:["Parte frontal del cuello.","Paso estrecho entre montañas.","Joya típica de la orfebrería precolombina."]},
               {question:"¿De qué manera el príncipe insultó al duende?",type:"inferencial",alternatives:["Molesto","Enano","Tonto"]},
               {question:"¿Cómo llegó el principe al castillo?",type:"factual",alternatives:["Con un hechizo del duende.","A pie.","Cabalgando."]},
               {question:"¿Qué hubiera pasado si el príncipe no hubiera salido antes de las 12 del castillo?",type:"inferencial",alternatives:["Hubiera llegado tarde a ver a su padre","Se quedaría una semana más en el castillo","Se quedaría por siempre en el castillo"]}
               ];

{question:"Qué haces ante la pregunta del pequeño duendecillo?",alternatives:["Te disculpas por no poder escucharlo, le dices que estás apurado por una urgencia familiar.","Le  dices que no te importa, que estás apurado.","Le explicas lo que ha pasado , tu misión y pides su ayuda."]},
=======
=======
var slideIndex = 1;
>>>>>>> c16c08d7a32d10192a4722d02f1611db9fa2ca93
var contenedor = document.getElementById('galeria');
var docFragment=document.createDocumentFragment();
var option = document.getElementById('literal').addEventListener('click',function(e){
  e.preventDefault();
  showSlide(1);
});

var url = "assets/img/img-";
var portada =[{src:"assets/img/portada-"}]
var images=[{src :url},{src :url},{src :url},{src :url},{src :url},{src :url},{src :url},{src :url},{src :url},{src :url},{src :url},
            {src :url},{src :url},{src :url},{src :url},{src :url}];
// var preguntas=[{question:"pregunta1?",type:"literal",alternatives:["Donde ","en la escuela",""]},{question:"pregunta2?",type:"literal",alternatives:["Donde ","en la escuela",""]},
//                {question:"pregunta3?",type:"literal",alternatives:["Donde ","en la escuela",""]},{question:"pregunta4?",type:"literal",alternatives:["Donde ","en la escuela",""]},
//                {question:"pregunta5?",type:"literal",alternatives:["Donde ","en la escuela",""]},{question:"pregunta6?",type:"literal",alternatives:["Donde ","en la escuela",""]},
//                {question:"pregunta7?",type:"literal",alternatives:["Donde ","en la escuela",""]}
//                ];

var preguntas=[{question:"¿Que podía curar al rey?",type:"factual",alternatives:["Nada podía curarlo.","El agua.","El agua de la vida."]},
              {question:"¿Por qué crees que el duendecillo no se molestó por su indeferencia, ya que el príncipe se disculpó?",type:"factual",alternatives:["El duendecillo tenía una maldición que no podía molestarse si escuchaba la palabra disculpa.","La disculpa es símbolo de respeto y buenos modales.","No puedes molestarte con nadie si te pide disculpas."]},
              {question:"¿Que debió haber hecho el príncipe?",type:"factual",alternatives:["Llevar ayuda.","Preguntar ¿qué hay en el castillo?","Ambas."]},
              {question:"En el texto la palabra “garganta”, ¿qué significado tiene?",type:"léxica",alternatives:["Parte frontal del cuello.","Paso estrecho entre montañas.","Joya típica de la orfebrería precolombina."]},
              {question:"¿De qué manera el príncipe insultó al duende?",type:"inferencial",alternatives:["Molesto","Enano","Tonto"]},
              {question:"¿Cómo llegó el principe al castillo?",type:"factual",alternatives:["Con un hechizo del duende.","A pie.","Cabalgando."]},
              {question:"¿Qué hubiera pasado si el príncipe no hubiera salido antes de las 12 del castillo?",type:"inferencial",alternatives:["Hubiera llegado tarde a ver a su padre","Se quedaría una semana más en el castillo","Se quedaría por siempre en el castillo"]}
              ];

var decision =[{decision:"Qué haces ante la pregunta del pequeño duendecillo?",alternatives:["Te disculpas por no poder escucharlo, le dices que estás apurado por una urgencia familiar.","Le  dices que no te importa, que estás apurado.","Le explicas lo que ha pasado , tu misión y pides su ayuda."]}];

docFragment.appendChild(crearImgs(portada[0],"p1"));
for (var i = 0; i < 2; i++) {
    docFragment.appendChild(crearImgs(images[i],i));
}
var div0 = document.createElement('div');
div0.setAttribute("class",'page-box');

div0.appendChild(crearPregunta(preguntas[0].question));
for (var i = 0; i < 3; i++) {
  div0.appendChild(crearAlternativas(preguntas[0].alternatives[i],"d1"));
}
docFragment.appendChild(div0);
for (var i = 2; i < 4; i++) {
    crearImgs(images[i],i);
    docFragment.appendChild(crearImgs(images[i],i));
}
var divDe = document.createElement('div');
divDe.classList.add('page-box');
divDe.appendChild(crearPregunta(decision[0].decision));
for (var i = 0; i < 3; i++) {
  var buton = document.createElement('button');
    buton.appendChild(document.createTextNode(decision[0].alternatives[i]));
    buton.setAttribute('id','d'+i);
    buton.addEventListener('click',function(e){
      e.preventDefault();
      console.log(slideIndex);
      if(this.id == "d0"){
        slideIndex +=7;
        plusSlide(slideIndex+1);
        console.log(slideIndex);
        for (var i = 4; i < 6; i++) {
            docFragment.appendChild(crearImgs(images[i],i));
            console.log(crearImgs(images[i],i));
        }

        var div = document.createElement('figure');
        div.classList.add('page-box');
        div.appendChild(crearPregunta(preguntas[1].question));
        // docFragment.appendChild(crearPregunta(preguntas[1].question));
        // var dfm = document.createDocumentFragment();
        for (var i = 0; i < 3; i++) {
          div.appendChild(crearAlternativas(preguntas[1].alternatives[i],"p1"));
        }
        docFragment.appendChild(div);
        for (var i = 6; i < 8; i++) {
            docFragment.appendChild(crearImgs(images[i],i));
        }
        var div2 = document.createElement('figure');
        div2.classList.add('page-box');
        div2.appendChild(crearPregunta(preguntas[2].question));
        for (var i = 0; i < 3; i++) {
          div2.appendChild(crearAlternativas(preguntas[2].alternatives[i],"p1"));
        }
        docFragment.appendChild(div2);
        alert("camino1"+this.id);
        contenedor.appendChild(docFragment);

      }
      ///END Camino 0
      if(this.id == "d1"){
        alert("camino2"+this.id);

        docFragment.appendChild(crearImgs(images[8],8));

        var div = document.createElement('div');
        div.appendChild(crearPregunta(preguntas[3].question));
        div.classList.add('page-box');
        for (var i = 0; i < 3; i++) {
          div.appendChild(crearAlternativas(preguntas[3].alternatives[i],"p1"));
        }
        docFragment.appendChild(div);

        docFragment.appendChild(crearImgs(images[9],9));
        var div2 = document.createElement('div');
        div.classList.add('page-box');
        div2.appendChild(crearPregunta(preguntas[4].question));
        for (var i = 0; i < 3; i++) {
          div2.appendChild(crearAlternativas(preguntas[4].alternatives[i],"p1"));
        }
        docFragment.appendChild(div2);

        docFragment.appendChild(crearImgs(images[10],10));
        contenedor.appendChild(docFragment);

      }
      //endn Camino 1
      if(this.id == "d2"){
        alert("camino3"+this.id);

        for (var i = 11; i < 14; i++) {
            docFragment.appendChild(crearImgs(images[i],i));
        }
        var div = document.createElement('div');
        div.classList.add('page-box');
        div.appendChild(crearPregunta(preguntas[5].question));
        for (var i = 0; i < 3; i++) {
          div.appendChild(crearAlternativas(preguntas[5].alternatives[i],"p1"));
        }
        docFragment.appendChild(div);
        for (var i = 14; i < 16; i++) {
            docFragment.appendChild(crearImgs(images[i],i));
        }
        var div2 = document.createElement('div');
        div.classList.add('page-box');
        div2.appendChild(crearPregunta(preguntas[6].question));
        for (var i = 0; i < 3; i++) {
          div2.appendChild(crearAlternativas(preguntas[6].alternatives[i],"p1"));
        }
        docFragment.appendChild(div2);

        docFragment.appendChild(crearImgs(images[16],16));
      }
      contenedor.appendChild(docFragment);

    });
    divDe.appendChild(buton);
    docFragment.appendChild(divDe);
  }
contenedor.appendChild(docFragment);

  function crearImgs(e,id){
    var figure=document.createElement('figure');
    var image=document.createElement('img');
    var spanPrevious=document.createElement('span');
    var spanNext=document.createElement('span');

    figure.classList.add("page-box","js-figure");
    image.setAttribute("alt","lecturas");
    image.src=e.src+id+".svg";
    spanPrevious.setAttribute("class",'icon-before left');
    spanNext.setAttribute("class",'icon-next right');

    figure.appendChild(image);
    figure.appendChild(spanPrevious);
    figure.appendChild(spanNext);

    spanPrevious.addEventListener('click',function(e){
        e.preventDefault();
        plusSlide(-1);
    });
    spanNext.addEventListener('click',function(e){
      e.preventDefault();
        plusSlide(1);
    });

    return figure;
}
function crearPregunta(parrafo){
  var pregunta = document.createElement('h2');
  pregunta.innerHTML = parrafo;
  var spanPrevious=document.createElement('span');
  var spanNext=document.createElement('span');
  spanPrevious.setAttribute("class",'icon-before left');
  spanNext.setAttribute("class",'icon-next right');
  spanPrevious.addEventListener('click',function(e){
      e.preventDefault();
      plusSlide(-1);
  });
  spanNext.addEventListener('click',function(e){
    e.preventDefault();
      plusSlide(1);
  });
  pregunta.appendChild(spanPrevious);
  pregunta.appendChild(spanNext);
  return pregunta;
}
function crearAlternativas(alternativa,id){
  var div = document.createElement('div');
  // div.classList.add('page-box');
  var input = document.createElement('input');
  input.setAttribute('type','radio');
  input.setAttribute('name','p'+id);
  div.appendChild(input);
  div.appendChild(document.createTextNode(alternativa));

  return div;
}
<<<<<<< HEAD
>>>>>>> f5a4206751eb9b84d7d42e26d70b7f80eaa4b086
=======

function plusSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(index){
   var slide = document.getElementsByClassName("page-box");
   if (index > slide.length) {slideIndex = 1}
   if (index < 1) {slideIndex = slide.length}
   for (var i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
   }
   slide[slideIndex-1].style.display = "block";
   //setTimeout(showSlide, 2000);
}

  // document.getElementById('previus').addEventListener('click',function(e){
  //     e.preventDefault();
  //     plusSlide(-1);
  // });
  // document.getElementById('next').addEventListener('click',function(e){
  //   e.preventDefault();
  //     plusSlide(1);
  // });
>>>>>>> c16c08d7a32d10192a4722d02f1611db9fa2ca93
