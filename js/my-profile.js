
document.addEventListener("DOMContentLoaded", function () {
  // cargo los valores desde el LS
  let userList = JSON.parse(localStorage.getItem("usuario"))
  let userListMail = userList.mail
  let divContainer = document.getElementById("container")
  console.log(userList)
  let photoLoad = document.getElementById("customFileLang")
  let divFoto = document.getElementById("fotoDiv")
  let nombre1Usu = JSON.parse(localStorage.getItem("nombre1"))
  let nombre2Usu = JSON.parse(localStorage.getItem("nombre2"))
  let apellido1Usu = JSON.parse(localStorage.getItem("apellido1"))
  let apellido2Usu = JSON.parse(localStorage.getItem("apellido2"))
  let telefono1 = JSON.parse(localStorage.getItem("telefono"))
  let fotoCarg=localStorage.getItem("fotoPerfil")
  
  if (userListMail !== null && nombre1Usu !== null && nombre2Usu !== null && apellido1Usu !== null &&
    apellido2Usu !== null && telefono1 !== null) {
    console.log("carga")
    divContainer.innerHTML = ` 
    <form id="form" action="" novalidate>
          <fieldset>
            <legend>Perfil</legend>
            <table id="tableMyProf">
              <tr>
                <td>
                  <div class="col-md-50">
                    <label for="nombre1">Primer Nombre</label>
                    <input type="text" class="form-control" id="nombre1" aria-describedby="name"
                      placeholder="Primer Nombre" value="${nombre1Usu}" required>
                  </div>
                  <div class="valid-feedback">
                    ¡Se ve bien!
                  </div>
                  <div class="invalid-feedback">
                    Rellenar campos
                 </div>
                </td>
                <td>
                  <div class="col-md-50">
                    <label for="nombre2">Segundo Nombre</label>
                    <input type="text" class="input-group-text" id="nombre2" aria-describedby="name"
                      placeholder="Segundo Nombre" value="${nombre2Usu}">  
                </td>
              </tr>
      </div>
      <tr>
        <td>
          <div class="col-md-50">
            <label for="apellido1">Primer Apellido</label>
            <input type="text" class="form-control" id="apellido1" aria-describedby="emailHelp"
              placeholder="Primer Apellido" value="${apellido1Usu}" required>
            <div class="valid-feedback">
              ¡Se ve bien!
            </div>
            <div class="invalid-feedback">
              Rellenar campos
            </div>
        </td>
        <td>
          <div class="col-md-50">
            <label for="apellido2">Segundo Apellido</label>
            <input type="text" class="input-group-text" id="apellido2" placeholder="Segundo Apellido" value="${apellido2Usu}">
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="col-md-12" id="email">
    <label for="email1">Correo Electronico</label>
      <input type="email" class="form-control" id="email1" aria-describedby="emailHelp" value="${userList}" required>
      <div class="valid-feedback">
      ¡Se ve bien!
    </div>
    <div class="invalid-feedback">
      Rellenar campos
    </div>
    </div>
    </td>
  
    <td>
      <div class="col-md-12">
        <label for="tel1">Telefono de contacto</label>
        <input type="text" class="input-group-text" id="tel1" aria-describedby="" placeholder="+598 099 123 456" value="${telefono1}">
      </div>
      
    </td>
  </tr>
  </table>
  </fieldset>
  </br>
  <div>
          <button type="submit" id="btnSave" class="btn btn-primary">Guardar Cambios</button>
        </div>
  </form>
  `

    console.log(userList);
    console.log(nombre1Usu);
    console.log(nombre2Usu);
    console.log(apellido1Usu);
    console.log(apellido2Usu);
    console.log(telefono1);
    //genero variables para poder sacar los values

  } else if (userListMail === null || nombre1Usu === null || nombre2Usu === null ||
    apellido1Usu === null || apellido2Usu === null || telefono1 == null) {

    console.log("no cumple")
    divContainer.innerHTML = ` 
    <form id="form" action="" novalidate>
          <fieldset>
            <legend>Perfil</legend>
            <table id="tableMyProf">
              <tr>
                <td>
                  <div class="col-md-50">
                    <label for="nombre1">Primer Nombre</label>
                    <input type="text" class="form-control" id="nombre1" aria-describedby="name"
                      placeholder="Primer Nombre" value="" required>
                  </div>
                  <div class="valid-feedback">
                    ¡Se ve bien!
                  </div>
                  <div class="invalid-feedback">
                    Rellenar campos
                 </div>
                </td>
                <td>
                  <div class="col-md-50">
                    <label for="nombre2">Segundo Nombre</label>
                    <input type="text" class="input-group-text" id="nombre2" aria-describedby="name"
                      placeholder="Segundo Nombre" value="">  
                </td>
              </tr>
      </div>
      <tr>
        <td>
          <div class="col-md-50">
            <label for="apellido1">Primer Apellido</label>
            <input type="text" class="form-control" id="apellido1" aria-describedby="emailHelp"
              placeholder="Primer Apellido" value="" required>
            <div class="valid-feedback">
              ¡Se ve bien!
            </div>
            <div class="invalid-feedback">
              Rellenar campos
            </div>
        </td>
        <td>
          <div class="col-md-50">
            <label for="apellido2">Segundo Apellido</label>
            <input type="text" class="input-group-text" id="apellido2" placeholder="Segundo Apellido" value="">
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="col-md-12" id="email">
    <label for="email1">Correo Electronico</label>
      <input type="email" class="form-control" id="email1" aria-describedby="emailHelp" value="${userList}" required>
      <div class="valid-feedback">
      ¡Se ve bien!
    </div>
    <div class="invalid-feedback">
      Rellenar campos
    </div>
    </div>
    </td>
  
    <td>
      <div class="col-md-12">
        <label for="tel1">Telefono de contacto</label>
        <input type="text" class="input-group-text" id="tel1" aria-describedby="" placeholder="+598 099 123 456" value="">
      </div>
      
    </td>
  </tr>
  </table>
  </fieldset>
  </br>
  <div>
          <button type="submit" id="btnSave" class="btn btn-primary">Guardar Cambios</button>
        </div>
  </form>
  `
  }
  let btnSave = document.getElementById("btnSave");
  let form = document.getElementById("form");
  btnSave.addEventListener('click', function (e) {
    e.preventDefault();
    form.classList.add("was-validated")

    let userListMail = document.getElementById("email1").value
    let primerNombre = document.getElementById("nombre1").value
    let primerApellido = document.getElementById("apellido1").value
    let segundoNombre = document.getElementById("nombre2").value
    let segundoApellido = document.getElementById("apellido2").value
    let tlf = document.getElementById("tel1").value;

    userList = localStorage.setItem("usuario", JSON.stringify(userListMail));

    nombre1Usu = localStorage.setItem("nombre1", JSON.stringify(primerNombre));
    nombre2Usu = localStorage.setItem("nombre2", JSON.stringify(segundoNombre));
    apellido1Usu = localStorage.setItem("apellido1", JSON.stringify(primerApellido));
    apellido2Usu = localStorage.setItem("apellido2", JSON.stringify(segundoApellido));
    tel1 = localStorage.setItem("telefono", JSON.stringify(tlf));

    
  })
  console.log(localStorage.getItem("fotoPerfil"))

if(fotoCarg!==""){
  document.querySelector("#fotoid").removeAttribute("src")
  document.querySelector("#fotoid").setAttribute("src",fotoCarg)  
} 
  
  document.querySelector("#customFileLang").addEventListener("change", function () {
         //console.log(this.files)
    let reader = new FileReader();// convierte la informacion del objeto que genera el query selector a un data URL
   
    reader.addEventListener("load",function(){
      fotoCarg=reader.result
      console.log(fotoCarg);
      document.querySelector("#fotoid").removeAttribute("src")
      document.querySelector("#fotoid").setAttribute("src",fotoCarg)  
      fotoCarg=localStorage.setItem("fotoPerfil",fotoCarg)
      
      
      
    })
    reader.readAsDataURL(this.files[0]); //le digo que lea el elemento 0, por que solo tengo 1, si tuviese mas, hago un loop.
  
  })  
  console.log( localStorage.getItem("fotoPerfil"))
    });
