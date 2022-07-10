var getData = async ()=> {
    var data = await fetch ("https://quotes.rest/qod/languages")
    // console.log("abc")

    var response = await data.json()
    console.log(response.contents.languages)
    var recData = response.contents.languages;

    var getlang = recData[0]
    // console.log(getlang)

    var dataDiv = document.getElementById("dataDiv")
    var ele = document.createElement("p");
    ele.innerHTML = getlang

    dataDiv.append(ele)

}
getData();