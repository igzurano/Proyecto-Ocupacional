
//primero quiero obtener el objeto que he guardado de la pagina anterior
const prod_seleccionado = localStorage.getItem("prodSelect");
console.log(prod_seleccionado)
let url_prod = `https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`;
console.log(url_prod);
const url_comen = `https://japceibal.github.io/emercado-api/products_comments/${localStorage.getItem("prodSelect")}.json`
console.log(url_comen)
let prod_rel_sel = [];
let contenedor = document.getElementById("container");
let comentario_agregar = ""
//const contenedor 
// segundo que cuando se cargue la pagina, aparesca automaticamente la información que quiero.
//para esto: primero cargar la pagina y que pase 
// que se lea todo el objeto hacemos un for
// que se lea lo que se quiere poner
// que se cargue como lista



function cargarprod(pro) {
  for (let elementos of pro) {
    let htmlToAppend = "";
    //console.log(elementos);
    if (elementos.id == prod_seleccionado) {
      //  console.log("true")

      htmlToAppend += `<div>
    <h1>${elementos.name}</h1>
    </div>
    <div>
    <p><b>Precio</b></p>
    ${elementos.cost} ${elementos.currency}
    </div>  
    <div>
    <p><b>Descripsción</b></p>
    ${elementos.description} 
    </div>  
    <div>
    <p><b>Cantidad Vendida</b></p>
    ${elementos.soldCount}
    </div>   
    <div>
    <p><b>Imagenes Relacionadas</b></p>
    <br>
    <img src="${elementos.image}" alt="${elementos.name}" style="centered">
    </div>
    <div>
    <h2>Comentarios</h2>
    </div>  
    `
      contenedor.innerHTML += htmlToAppend;
    }

  }
};
function cargarcomentarios(coment) {
  for (let elements of coment) {
    let htmlAppendeable = ""
    if (elements.id == prod_seleccionado.product) {
      //  console.log(elements.description)
      htmlAppendeable += `
<div><b>${elements.user}</b>-<i>${elements.dateTime}</i>`
      console.log(elements.score)
      if (elements.score == 0) {
        htmlAppendeable += `<span class="fa fa-star"></span></div> `
      } else {
        for (let i = 0; i < elements.score; i++) {
          htmlAppendeable += `<span class="fa fa-star checked"></span>`

        }
      }
      htmlAppendeable += `<div><p>${elements.description}</p></div>`
      document.getElementById("container").innerHTML += htmlAppendeable;
    }
  }

  htmlAppendeable = `
  <div id="comentariosNuevos">
  </div>  
  <div>
  <h2>Comentar</h2>
</div>       
<div>
 <p><b>Tu comentario</b></p>
</div>       
<div>
  <form action="" method="get" id="form">
    <div>
      <textarea id="comentarios" name="comentarios" size= 100px></textarea>
    </div>
    <br>
    <div>
      <button id="btn-comentar" type="submit">Comentar</button>
    </div>
  </form>
</div>
<div>
  <p><b>Tú puntuación<b></p>
</div>
<div>
  <select name="punt" id="punt">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
</div>
<button id="btn-enviar" type="submit">Enviar</button>
<div>

</div>
<div><h2>Productos Relacionados</h2></div>

`
  contenedor.innerHTML += htmlAppendeable;



  let formComentar = document.getElementById("form");
  let divComentar = document.getElementById("comentariosNuevos")
  let usuario = JSON.parse(localStorage.getItem("usuario"))


  formComentar.addEventListener('submit', function (e) {
    e.preventDefault();

    let newComent = document.getElementById("comentarios").value
    let nivel = document.getElementById("punt").value
    
    var date = new Date();
 
    var dia = date.toDateString();

    var hora = date.toLocaleTimeString();




    if (newComent !== null) {
      htmlAppendeable = `<b> ${usuario}</b>-<it>${dia} ${hora}</it>`
      for (let i = 0; i < nivel; i++) {
        htmlAppendeable += `<span class="fa fa-star checked"></span>`
      }

      htmlAppendeable += `<br>${newComent}`




      divComentar.innerHTML = htmlAppendeable
    }
  })

};


function prodrel(prod_rel) {
  
    let div = document.createElement('div');
    for (let elem of prod_rel) {

  
      if (elem.id != prod_seleccionado) {
        console.log(elem.id !== prod_seleccionado)
        console.log(prod_seleccionado)
        var imagene=[elem.image]
        console.log(imagene)
    

      div.innerHTML +=
      
      `
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-50" src="${imagen}" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-50" src="" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-50" src="" alt="Third slide">
    </div>
    <div class="carousel-item">
    <img class="d-block w-50" src="" alt="Third slide">
  </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
   


      <ul class="list-group list-group-horizontal"-sm>
        <li class="list-group-item"><img class="d-block w-100" src="${elem.image}" ></li>
   
      </ul>  
 
`

     contenedor.appendChild(div);
      div.addEventListener('click', function () {

        console.log(elem.id)
        localStorage.setItem("prodSelect", elem.id)
        window.location.href = "product-info.html"

      })

    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  fetch(url_prod)
    .then(respuesta => respuesta.json())
    .then(datos => {
      let producto = datos;
      console.log(producto.products)
      cargarprod(producto.products)
      





      // parte 3

      fetch(url_comen)
        .then(resp => resp.json())
        .then(data => {
          let comentarios = data;
          console.log(comentarios);
          cargarcomentarios(comentarios)



          fetch(url_prod)
            .then(respuesta => respuesta.json())
            .then(info => {
              let prod_rel = info.products;
              console.log(prod_rel);
              prodrel(prod_rel)
            })
        });
    });
});