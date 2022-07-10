var form = document.querySelector("form");
form.addEventListener("submit", handleData);

function handleData(e){
    e.preventDefault();
    let yName = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    var data = {
        name : yName,
        mobile: mobile,
        email: email,
        password: password
    }

    data = JSON.stringify(data);
    console.log(data)


    localStorage.setItem("userData", data)
}