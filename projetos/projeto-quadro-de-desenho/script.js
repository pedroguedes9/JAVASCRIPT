//inicial data
let currentColor = "black"
let screen = document.querySelector("#tela")
let context = screen.getContext("2d")
let canDraw = false


//events
document.querySelectorAll(".colorArea .color").forEach(item => {
    item.addEventListener("click", colorClickEvent)
})
screen.addEventListener("mousedown", mouseDownEvent)
screen.addEventListener("mousemove", mouseMoveEvent)
screen.addEventListener("mouseup", mouseUpEvent)

//functions
function colorClickEvent(e) {
    let color = e.target.getAttribute("data-color") 
    currentColor = color
    document.querySelector(".color.active").classList.remove("active")
    e.target.classList.add("active")
}
function mouseDownEvent () {
    canDraw = true
}
function mouseMoveEvent(e) {
    if(canDraw) {
        let pointX = e.pageX - screen.offsetLeft
        let pointY = e.pageY - screen.offsetB
        console.log(pointX, pointY)
    }
}
function mouseUpEvent() {
    canDraw = false
}