document.querySelector(".busca").addEventListener("submit", async (event)=> {
    event.preventDefault()
    
    let input = document.querySelector("#searchInput").value
    if(input !== "") {
        clearInfo()
        showWarning("Carregando...")

        let url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURI(input)}&appid=16ebc083bbcbbf4319764d16c8d1c52a&units=metric&lang=pt_br`
        let results1 = await fetch(url1)
        let json1 = await results1.json()
        console.log(json1)
        if(json1.length !== 0) {
        let url2 = `https://api.open-meteo.com/v1/forecast?latitude=${(json1[0].lat).toFixed(2)}&longitude=${(json1[0].lon).toFixed(2)}&current=temperature_2m,wind_speed_10m,wind_direction_10m&hourly=temperature_2m&forecast_days=1&models=icon_seamless`
        let results2 = await fetch(url2)
        let json2 = await results2.json()
        console.log(json2)
        showInfo({
            name: json1[0].name,
            country: json1[0].country,
            temp: json2.current.temperature_2m,
            windSpeed: json2.current.wind_speed_10m,
            windDirection: json2.current.wind_direction_10m
        })


        } else {
            clearInfo()
            showWarning("Localização não encontrada.")
        }
    } else {
        clearInfo()
    }

    function showInfo(json) {
        showWarning("")
        
        document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`
        document.querySelector(".tempInfo").innerHTML = `${json.temp} <sup>ºC</sup>`
        document.querySelector(".ventoInfo").innerHTML = `${json.windSpeed} <span>km/h</span>`
        document.querySelector(".ventoPonto").style.transform = `rotate(${json.windDirection-90}deg)`
        document.querySelector(".resultado").style.display = "block"
    }

    function clearInfo() {
        showInfo("")
        document.querySelector(".resultado").style.display = "none"
    }

    function showWarning (msg) {
        document.querySelector(".aviso").innerHTML = msg
    }
} )