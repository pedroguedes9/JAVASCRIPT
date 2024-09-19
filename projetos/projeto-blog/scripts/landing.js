async function readPosts () {
    let postArea = document.querySelector("#posts")
    postArea.innerHTML = "Carregando..."
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let json = await response.json()
    if (json.length > 0 ) {
        postArea.innerHTML = ""
        for(let i in json) {
            let postHTML = `<div><h2>${json[i].title}</h2><p>${json[i].body}</p><hr></hr></div>`
            postArea.innerHTML += postHTML
        }
    } else {
        postArea.innerHTML = "Nenhum post para exibir"
    }
}

readPosts()