let title = ""
function clicou() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if (response.status >= 400 & response.status < 500) {
                console.log("erro no cliente")
            }
            return response.json()
        })
        .then((data) => {
            title = data[0].title
            document.querySelector("h1").innerText = title
        })
        .catch((error) => {
            console.log("deu problema")
            console.log(error)
        })
        .finally(() => {
            alert("afdkfj")
        })
}
function inserir() {
    fetch("https://jsonplaceholder.typicode.com/posts",
        {
            method: "post",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title: "titulo de teste",
                body: "corpo de teste,",
                userId: 2
            })
        }
    )
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json)
    })
}
document.querySelector("#button").addEventListener("click", clicou)
document.querySelector("#inserir").addEventListener("click", inserir)