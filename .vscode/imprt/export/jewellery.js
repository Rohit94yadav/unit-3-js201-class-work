import navbar from  "../component/navbar.js"

document.getElementById("navbar").innerHTML= navbar();

const url = `https://fakestoreapi.com/products/category/jewelery`;
let main = document.getElementById("main");

import {getdata, append} from "../component/fetch.js"

getdata(url).then((res)=>{

    let data =res
    console.log(data)

    append(data, main)
})
