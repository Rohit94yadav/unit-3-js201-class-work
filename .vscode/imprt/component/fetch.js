let getdata = async (url) =>{
    let res =await fetch(url);
    let data = await res.json();

    data = data.sort((a,b)=>{
        return a.price - b.price;
    })

    data = data.sort((a,b)=>{
        return a.title > b.title ? 1: a.title < b.title ? -1  : 0;
    })

    return data;
};



let append = (data, main)=>{

    data.forEach(({image,title,price})=>{


   

    
        let main = document.getElementById("main")

        let img = document.createElement("img");
        img.src = image;

        

        let h2 = document.createElement("h2");
        h2.innerText= title;

        let p = document.createElement("h2");
        p.innerText= price;

        let div= document.createElement("div");

        div.append(img,h2,p);
        main.append(div);
    
    })
}

export  {getdata, append};