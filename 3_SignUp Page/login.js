var form = document.querySelector("form");
form.addEventListener("submit", loginMe);

function loginMe(e){
    e.preventDefault();
    var data = localStorage.getItem("userData");
    
    data = JSON.parse(data);
    console.log(data)

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (email == data.email && password == data.password){
        alert("Login Successful")
    }
}