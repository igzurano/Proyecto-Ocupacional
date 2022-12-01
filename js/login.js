document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault()
window.location.href="index.html"

let userList=document.getElementById("email").value
        // defino el objeto

      
    localStorage.setItem("usuario", JSON.stringify(userList));

let Password={
    password:document.getElementById("pwd").value
        }// defino el objeto

        console.log(Password.password)// cargo bien el objeto
    localStorage.setItem("Password", JSON.stringify(Password));


});

 