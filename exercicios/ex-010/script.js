let title = ""
function clicou() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            title = data[0].title
            document.querySelector("h1").innerText = title
        })
        
}
document.querySelector("#button").addEventListener("click", clicou)