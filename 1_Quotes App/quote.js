window.onload = ()=>{
    var quotebtn = document.getElementById("quote");
    var langbtn = document.getElementById("lang");
    var catbtn = document.getElementById("cat");

    quotebtn.addEventListener("click", quotePage);
    langbtn.addEventListener("click", langPage);
    catbtn.addEventListener("click", catPage);
}

var quotePage = ()=>{
    location.href = "quoteofDay.html"
}

var langPage = ()=>{
    location.href = "languages.html"
}
var catPage = ()=>{
    location.href = "category.html"
}