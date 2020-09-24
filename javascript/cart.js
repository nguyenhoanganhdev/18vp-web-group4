mySearchFunction()

function onJsonReady(data){
    let i = 0;
    console.log(data)
    for(let item of data.albums.items)
    {
        console.log(item.name);
        let cart = document.getElementsByClassName("cart")[i];
        console.log(cart)
        let image = cart.getElementsByTagName("img")[0];
        image.src = item.images[1].url;

        let unitPrice = cart.getElementsByClassName("unitPrice")
        unitPrice[0].innerHTML = item.total_tracks

        let total = cart.getElementsByClassName("total")
        total[0].innerHTML = item.name
        // let link = block.getElementsByClassName("url")[0];
        // link.getElementsByTagName("a")[0].href = item.external_urls.spotify;
        // link.getElementsByTagName("a")[0].innerHTML = item.name;

        // let date = block.getElementsByClassName("date")[0];
        // date.getElementsByTagName("span")[0].innerHTML = item.release_date;

        // let num = block.getElementsByClassName("number")[0];
        // num.getElementsByTagName("span")[0].innerHTML = item.total_tracks;
        i++;
    }
}

function onResponse(response){
    return response.json();
}


function mySearchFunction(){
    //let keyW = document.getElementById("key-word").value;
    //let name = keyW.replace(" ",'%20');
    fetch('https://api.spotify.com/v1/search?q=Taylor%20swift&type=album&limit=10',
        {
            method: 'GET',
            headers: { 'Content-type':
                    'application/json; charset=UTF-8' ,
                'Accept': 'application/json',
                'Authorization': 'Bearer  BQBJDzJ90BaOlcExqUwuYtB9qsxzda9vFNr3zhigF4pphm6kUTlyDT-cEv76r2UxKOKoF8P47LXx5GY2jH7q5ddVj9InDU7lBSA7tUJIZXUrhg4nTtjKghCsGHgCpP-CsxhlnMLhH52Yl2Q1viAtBK55xFFdJrbLNXPq7p6e'
            }
        }).then(onResponse)
        .then(onJsonReady);
}



