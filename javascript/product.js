restApiFunction()

function onJsonReady(data){
    let i = 0;
    console.log(data)
    for(let item of data.albums.items)
    {
        console.log(item.name);
        let cart = document.getElementsByClassName("product-box")[i];
        console.log(cart)
        let image = cart.getElementsByTagName("img")[0];
        image.src = item.images[1].url;

        let price = cart.getElementsByClassName("price")
        price[0].innerHTML = item.total_tracks

        // let total = cart.getElementsByClassName("total")
        // total[0].innerHTML = item.name
        // let link = block.getElementsByClassName("url")[0];
        // link.getElementsByTagName("a")[0].href = item.external_urls.spotify;
        // link.getElementsByTagName("a")[0].innerHTML = item.name;

        // let date = block.getElementsByClassName("date")[0];
        // date.getElementsByTagName("span")[0].innerHTML = item.release_date;

        // let num = block.getElementsByClassName("number")[0];
        // num.getElementsByTagName("span")[0].innerHTML = item.total_tracks;
        // console.log(i)
        i++;
        // console.log(i)

    }
}

function onResponse(response){
    return response.json();
}


function restApiFunction(){
    //let keyW = document.getElementById("key-word").value;
    //let name = keyW.replace(" ",'%20');
    fetch('https://api.spotify.com/v1/search?q=Taylor%20swift&type=album&limit=10',
        {
            method: 'GET',
            headers: { 'Content-type':
                    'application/json; charset=UTF-8' ,
                'Accept': 'application/json',
                'Authorization': 'Bearer  BQAhiJgP5PQEzivEJdmZ1HdE4Q6A-yUeXt9xfH2QKpO_b0xQR_OlCxgpm3FiDNtYwREJSTLyugMMBm8HZdbsnCYB6RwQsGMoiTaerIiYTtTo2-SweoK6t5eL_xm3i4Mhayd1mvmtStNa8xCamL6HQ1UQJ2tyDRYLys5KagCi'
            }
        }).then(onResponse)
        .then(onJsonReady);
}



