const produAutos = `https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`;
const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
//let currentCategoriesArray = []; aca va autoArray
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;
let contenedor = document.getElementById("cat-list-container");
let filtro = document.getElementById("search")
let autoArray = [];
// solo defino una variable que toma vaores de el html
//console.log("antes del fetch y then");



function mostrarLista() {
    let htmlToAppend ="";
    for (let autos of autoArray) {

        if (((minCount == undefined) || (minCount != undefined && parseInt(autos.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(autos.cost) <= maxCount))) {


            htmlToAppend += `
           <div id=${autos.id} onclick="setCatID(${autos.name})" class="list-group-item list-group-item-action cursor-active">
               <div class="row">
                   <div class="col-3">
                       <img src="${autos.image}" alt="${autos.description}" class="img-thumbnail">
                   </div>
                   <div class="col">
                       <div class="d-flex w-100 justify-content-between">
                           <h4 class="mb-1">${autos.name}-${autos.cost}</h4>
                           <small class="text-muted">${autos.soldCount} artículos vendidos</small>
                       </div>
                       <p class="mb-1">${autos.description}</p>
                   </div>
               </div>
           </div>
            `

        }
       contenedor.innerHTML = htmlToAppend;
    };
       filtro.addEventListener("input", function () {
        let htmlToAppend=""
       for (let autos of autoArray) {
            if (autos.name.toLowerCase().includes(filtro.value.toLowerCase()) ||
                autos.description.toLowerCase().includes(filtro.value.toLowerCase())) {
                console.log(autos.name.toLowerCase())
                console.log(filtro.value.toLowerCase().length)

                
                htmlToAppend += `
        <div id=${autos.id}  class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${autos.image}" alt="${autos.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${autos.name}-${autos.cost}</h4>
                        <small class="text-muted">${autos.soldCount} artículos vendidos</small>
                    </div>
                    <p class="mb-1">${autos.description}</p>
                </div>
            </div>
        </div>
         `
            }
          
            
}
contenedor.innerHTML = htmlToAppend;

for (let autos of autoArray) {// luego de cargada toda la lista recorro de neuvo autoarray y cuando se clikea uno hago que me guarde la ID y luego redireccione.
    console.log(autos)
    if (autos.name.toLowerCase().includes(filtro.value.toLowerCase()) ||
    autos.description.toLowerCase().includes(filtro.value.toLowerCase())){
    
        document.getElementById(`${autos.id}`).addEventListener("click", function () {
            localStorage.setItem("prodSelect", autos.id)
            window.location.href = "product-info.html"
        });
    }

    }


});
            for (let autos of autoArray) {// luego de cargada toda la lista recorro de neuvo autoarray y cuando se clikea uno hago que me guarde la ID y luego redireccione.
                console.log(autos)
                document.getElementById(`${autos.id}`).addEventListener("click", function () {
                    localStorage.setItem("prodSelect", autos.id)
                    window.location.href = "product-info.html"
                })}
    };

    


//for 
//document add event litener
//locals
//wlhref

// ver de usar autos.id para el segundo for.

fetch(produAutos).then(function (respuesta) {
    // console.log("dentro del primer then")
    return respuesta.json()
})
    .then(function (datos) {
        autoArray = datos.products;
        console.log(autoArray);
        mostrarLista()

    });


//console.log(htmlToAppend)
// si pongo el += aparecen varias veces los mismos elementos por que va iterando en el vector 
//y actulizando con valores que saca del fetch, entonces no queda igual. Tengo que guardar la ultima versión de la iteración. Que es cuando pongo =





//PARA ORDENAR

function sortCategories(criteria, array) {// DEFINI LA FUNCIÓN QUE HACE QUE SE ORDENE
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME) {
        result = array.sort(function (a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_DESC_BY_NAME) {
        result = array.sort(function (a, b) {
            if (a.name > b.name) { return -1; }
            if (a.name < b.name) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_BY_PROD_COUNT) {
        result = array.sort(function (a, b) {
            let aCount = parseInt(a.productCount);
            let bCount = parseInt(b.productCount);

            if (aCount > bCount) { return -1; }
            if (aCount < bCount) { return 1; }
            return 0;
        });
    }

    return result;
}

// ESTA FUNCIPN DE VUELVE ORDENADA LA LISTA

function sortAndShowCategories(sortCriteria, categoriesArray) {
    currentSortCriteria = sortCriteria;

    if (categoriesArray != undefined) {
        autoArray = categoriesArray;
    }

    autoArray = sortCategories(currentSortCriteria, autoArray);

    //Muestro las categorías ordenadas
    mostrarLista();
    console.log(autoArray);
};
// DEFINO EL EVENTO QUE HACE QUE SE ME ORDENE LA LISTA EN FUNCIÓN DE SORTCATEGORIES
document.getElementById("sortAsc").addEventListener("click", function () {
    sortAndShowCategories(ORDER_ASC_BY_NAME);

});

document.getElementById("sortDesc").addEventListener("click", function () {
    sortAndShowCategories(ORDER_DESC_BY_NAME);
});

document.getElementById("sortByCount").addEventListener("click", function () {
    sortAndShowCategories(ORDER_BY_PROD_COUNT);
});

document.getElementById("rangeFilterCount").addEventListener("click", function () {
    //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
    //de productos por categoría.
    minCount = document.getElementById("rangeFilterCountMin").value;
    maxCount = document.getElementById("rangeFilterCountMax").value;
    console.log(minCount)
    console.log(maxCount)

    if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0) {
        minCount = parseInt(minCount);
    }
    else {
        minCount = undefined;
    }

    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0) {
        maxCount = parseInt(maxCount);
    }
    else {
        maxCount = undefined;
    }

    mostrarLista();
    //console.log("funciona button")
});

