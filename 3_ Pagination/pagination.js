var btn = document.querySelector("button");
btn.addEventListener("click", handleData);

function handleData(){
    var btnDiv = document.getElementById("btnDiv");
    btnDiv.innerHTML = null;

    var range = document.getElementById("range").value;
    // console.log(range)

    var totButtons = range/20;
    // console.log(totButtons)

    for (var i = 1; i <= totButtons; i++){
        var btn = document.createElement("button");
        btn.innerHTML = i;
        btnDiv.append(btn)
        btn.setAttribute("id", `button${i}`)
        btn.addEventListener("click", function(event){
            // console.log(event.target.id)
            showData(event)
        });
    }

    async function showData(event) {
        var dataDiv = document.getElementById("dataDiv");
        dataDiv.innerHTML = null;

        var currentBtn = event.target.id
        // console.log(currentBtn)
        
        var data = await fetch("https://jsonplaceholder.typicode.com/comments")
        // console.log(data)

        var response = await data.json();
        // console.log(response);

        var start;
        var end;

        if(currentBtn == "button1"){
            start = 0;
            end = 20
        }
        
        if(currentBtn == "button2"){
            start = 20;
            end = 40
        }
        
        if(currentBtn == "button3"){
            start = 40;
            end = 60
        }
        
        if(currentBtn == "button4"){
            start = 60;
            end = 80
        }
        
        if(currentBtn == "button5"){
            start = 80;
            end = 100;
        }
        
        for(var i = start; i < end; i++){
            var p = document.createElement("p")

            p.innerHTML = response[i].id + " | " + response[i].name + " | " + response[i].email + " | " + response[i].body

            dataDiv.append(p);
        }

    }
}