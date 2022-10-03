document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault()
window.location.href="index.html"

let Usuario={
    mail:document.getElementById("email").value
        }// defino el objeto

        console.log(Usuario)// cargo bien el objeto
    localStorage.setItem("usuario", JSON.stringify(Usuario));
});
