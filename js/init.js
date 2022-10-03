const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";


let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
if (localStorage.getItem("usuario") !== null) {
  console.log("guarda")
}else{console.log("no guarda!")};// no se porque no me esta guardando desde login.html.

document.addEventListener("DOMContentLoaded",function() {
  let userList= JSON.parse(localStorage.getItem("usuario"))
  console.log(userList.mail);
  document.getElementById("usu").innerHTML +=`
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
   ${userList.mail}
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a id="micarrito" class="dropdown-item active" href="#">Mi Carrito</a></li>
    <li><a id="miperfil"class="dropdown-item" href="#">Mi Perfil</a></li>
    <li><a id="cerrarsesion"class="dropdown-item" href="#">Cerrar Sesion</a></li>
    <li><hr class="dropdown-divider"></li>
      </ul>
</div>`
  document.getElementById("usu").style.color= "white"
  document.getElementById("cerrarsesion").addEventListener('click',function(){
    localStorage.clear("usuario");
    window.location.href="login.html"
  })
  document.getElementById("miperfil").addEventListener('click',function(){
    window.location.href="miperfil.html"
  })
  document.getElementById("micarrito").addEventListener('click',function(){
    window.location.href="micarrito.html"
  })  
});


//console.log(JSON.parse(localStorage.getItem("usuario"));// chequeo el usuario

