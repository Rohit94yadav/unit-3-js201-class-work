var getData = async ()=> {
    var data = await fetch ("https://quotes.rest/qod/categories?language=en&detailed=false")
    // console.log(data)

    var response = await data.json()
    console.log(response.contents.categories)
    var recData = response.contents.categories;


    var dataDiv = document.getElementById("dataDiv")
    var inspire = document.createElement("p");
    inspire.innerHTML = recData.inspire

    dataDiv.append(inspire)

    var management = document.createElement("p");
    management.innerHTML = recData.management

    dataDiv.append(management)

    var sports = document.createElement("p");
    sports.innerHTML = recData.sports

    dataDiv.append(sports)

    var life = document.createElement("p");
    life.innerHTML = recData.life

    dataDiv.append(life)

    var funny = document.createElement("p");
    funny.innerHTML = recData.funny

    dataDiv.append(funny)

}
getData();