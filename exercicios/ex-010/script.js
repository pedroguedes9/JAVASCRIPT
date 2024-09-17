
let clicou = async () => {
    let req = await fetch("https://jsonplaceholder.typicode.com/posts")
    let json = await req.json()
    alert(`titulo do primeiro post: ${json[0].title}`)
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