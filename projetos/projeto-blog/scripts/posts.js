document.querySelector("#insertButton").addEventListener("click", () => {
    let title = document.querySelector("#titleField").value;
    let body = document.querySelector("#bodyField").value;
    if (title && body ) {
        addNewPost(title, body)
    } else {
        alert("Preencha os campos")
    }
})
async function addNewPost(title, body) {
    await fetch("https://jsonplaceholder.typicode.com/posts", 
        {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify ({
                title,
                body,
                userId: 2,
            }),
        }
    )
    document.querySelector("#titleField").value = ""
    document.querySelector("#bodyField").value = ""
    readPosts()
}