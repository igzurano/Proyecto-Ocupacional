const produAutos= "https://japceibal.github.io/emercado-api/cats_products/101.json";

let autoArray=[];
//console.log("antes del fetch y then");

fetch(produAutos).then(function(respuesta){
    //console.log("dentro del primer then")
   return respuesta.json()

})

.then(function(datos){
autoArray=datos.products;
console.log(autoArray);
let divListaAutos=document.getElementById('products');// solo defino una variable que toma vaores de el html

let htmlToAppend="";
for(let autos of autoArray){
     htmlToAppend += `
            <div onclick="setCatID(${autos.name})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${autos.image}" alt="${autos.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${autos.name}</h4>
                            <small class="text-muted">${autos.soldCount} artículos vendidos</small>
                        </div>
                        <p class="mb-1">${autos.description}</p>
                    </div>
                </div>
            </div>
            `
}
console.log(htmlToAppend)
divListaAutos.innerHTML+=htmlToAppend;

})
