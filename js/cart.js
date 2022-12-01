//defincion de variables
const carritourl = "https://japceibal.github.io/emercado-api/user_cart/25801.json"
let contenedor = document.getElementById("container")
let subtotal = [15200];
let opcion = document.getElementById("pro_sele_car")
let total = 15200;
let valor = [];
const TC = 40;
let envio = 0
const withCard = document.getElementById("credCard");
const withAccount = document.getElementById("trsnfbank");
let form = document.getElementById("form");
let divaAlert = document.getElementById("successAlert");


//defincion de funciones
function sub(i, j) {
  let k = (i * j);
  subtotal.push(k)
  return subtotal.pop()
}

function subUSD(subtotal, TC) {
  let subtotalUSD = subtotal / TC;
  return subtotalUSD
}

function env(subtotal) {
  if (document.getElementById("envio15").checked) {
    envio = subtotal * 0.15;
    return envio
  } if (document.getElementById("envio10").checked) {
    envio = subtotal * 0.10;
    return envio
  } if (document.getElementById("envio5").checked) {
    envio = subtotal * 0.05;
    return envio;
  }
};

console.log(document.getElementById("envio5").checked)

function costTotal(a, b) {
  c = a + b;
  return c
}

function disableModal() {
  if (withAccount.checked === true) {
    document.getElementById("NumCard").disabled = true;
    document.getElementById("segNum").disabled = true;
    document.getElementById("fechaVenc").disabled = true;
    document.getElementById("account").disabled = false;

  } else if (withCard.checked === true) {
    document.getElementById("account").disabled = true;

    document.getElementById("NumCard").disabled = false;
    document.getElementById("segNum").disabled = false;
    document.getElementById("fechaVenc").disabled = false;

  }
}

document.addEventListener('DOMContentLoaded', function () {


  fetch(carritourl)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      let carrito = data;
      let htmltoappend = ""
      htmltoappend = `

    <div class="body1">
     
    <h1><img id="fotocarr"src="img/carrito.png">Carrito de Compras</h1>     
    <h2 >Articulos en el carrito</h2>
    </div>
    <div class="lineadiv">
    <div class="body2">
  
           <table>
            <tr>
              <th></th>
              <th><p>Nombre</p></th>
              <th><p>Precio Unitario</p></th>
              <th><p>Cantidad</p></th>
              <th><p>Sub-Total</p></th>
            
            </tr>
            <tbody>
          <tr>
          <td><img id="fotosele"src="${carrito.articles[0].image}" alt="${carrito.articles[0].name}"></td>
          <td><p>${carrito.articles[0].name}</p></td>
          <td><p>${carrito.articles[0].unitCost} ${carrito.articles[0].currency}</p></td>
          <td>
        <input type="text" name="pro_sele_carr" id="pro_sele_car" min="1" size= 1px value="1" required>
        </p></td>
        <td id="total"><p><b>${total} ${carrito.articles[0].currency}</b></p></td>
   
        </div> 
        <td> 
        <form action="" method="" id="formBtn"> 
       <button type="submit" id="eliminarBtn"><img id="eliminarImg" src="img/eliminar.png" alt="x"></button>
        </form>
        </td>
        `



      contenedor.innerHTML += htmltoappend;
      let formBtn = document.getElementById("formBtn")
      formBtn.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log("se carga")
      
      


      document.addEventListener('input', function () {
        opcion = document.getElementById("pro_sele_car").value
        console.log(opcion)
        valor = sub(opcion, carrito.articles[0].unitCost)
        document.getElementById("total").innerHTML = `<p><b> ${valor} U$</b></p> `
        document.getElementById("subtotal").innerHTML = `<p><b> ${subUSD(valor, TC)} USD </b></p> `
        document.getElementById("envio").innerHTML = `<p><b>${env(subUSD(valor, TC))} USD</b></p> `
        document.getElementById("costTot").innerHTML = `<p><b>${costTotal(env(subUSD(valor, TC)), subUSD(valor, TC))} USD</b></p> `
        console.log(valor)
        console.log(env(valor))
      });

      htmltoappend =
        `
      
    </tr>
    </tbody>    
    </table>
    </div>
    
      
    <div class="body4">
    </form>
    <h2>Costos</h2>
    <table>
        <tr>
    <td> <h3>Subtotal</h3>
    <br>
    <p>Costo unitario del producto por cantidad </p>
    </td></th>
    <td id="subtotal"> <b>${total / 40} USD </b></tc>
    </tr>

    <tr>
    <td><h3>Envio</h3>
    <br>
    <p>Según el tiempo de envio</p>
    </td></th>
    <td id="envio"> 0 USD</td>
    </tr>
   
    <tr>
    <td><h3>Costo Total</h3></td></th>
    <td id="costTot"> 0 USD</td>
    </tr>
    
    </table>
  </div>
    </form>`
      contenedor.innerHTML += htmltoappend;

    });


  document.getElementById("modal-container").addEventListener("click", function () {
    console.log("se carga")
    disableModal();
  })


  form.addEventListener("submit", function (e) {
    e.preventDefault()
    form.classList.add("was-validated")
    if (form.checkValidity()) {
      console.log(form.checkValidity())
      htmltoappend = `<div  id="successAlert" class="alert alert-success" role="alert" >
    Felicitaciones! Compra exitosa
  </div>`

      contenedor.innerHTML += htmltoappend

    }

  })


});
});



