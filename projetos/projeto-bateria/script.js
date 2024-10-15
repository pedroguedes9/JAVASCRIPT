document.body.addEventListener("keyup", clicou)
document.querySelector(".composer button").addEventListener("click", playButton)


function playButton() { //recebe os botões clicados no imput para formar a composição
    let song = document.querySelector("#input").value
    if (song !== "") {
        let songArray = song.split("")
        playComposition(songArray)
    }
}
function playComposition(songArray) { //forma a composição tendo tempo entre cada toque
    let wait = 0
    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait)
        wait += 250
        
    }
}
function clicou(event) { 
    playSound(event.code.toLowerCase())
}
function playSound(sound) { //muda a cor da letra tocada e toca o som
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    if (audioElement) {
        audioElement.currentTime = 0
        audioElement.play() //toca a tag audio
    }
    if (keyElement) {
        keyElement.classList.add("active")
        setTimeout(() => {
            keyElement.classList.remove("active")
        }, 300)
    }
}
