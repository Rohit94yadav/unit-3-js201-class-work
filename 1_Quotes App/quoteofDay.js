var getData = async ()=> {
    var data = await fetch ("https://quotes.rest/qod?language=en")
    console.log(data)

    var response = await data.json()
    // console.log(response.contents.quotes)
    var recData = response.contents.quotes;

    var getquote = recData[0]
    console.log(getquote)

    var dataDiv = document.getElementById("dataDiv")
    var ele = document.createElement("p");
    ele.innerHTML = getquote.quote

    dataDiv.append(ele)

}
getData();