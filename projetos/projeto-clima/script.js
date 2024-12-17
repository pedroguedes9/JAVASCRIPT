document.querySelector(".busca").addEventListener("submit", async (event)=> {
    event.preventDefault()
    
    let input = document.querySelector("#searchInput").value
    if(input !== "") {
        showWarning("Carregando...")

        let url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURI(input)}&appid=16ebc083bbcbbf4319764d16c8d1c52a&units=metric&lang=pt_br`
        
        let results1 = await fetch(url1)
        let json1 = await results1.json()
        console.log(json1)
        let url2 = `https://api.open-meteo.com/v1/forecast?latitude=${json1.lat}&longitude=${json1.lon}&hourly=temperature_2m`
        let results2 = await fetch(url2)
        let json2 = await results2.json()
        console.log(json2)
    }

    function showWarning (msg) {
        document.querySelector(".aviso").innerHTML = msg
    }
} )