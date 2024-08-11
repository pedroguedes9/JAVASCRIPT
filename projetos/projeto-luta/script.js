let log = new Log(document.querySelector("#log"))
let player = new Sorcerer("Pedro")
let monster = new BigMonster()
const stage = new Stage(
    player,
    monster, 
    document.querySelector("#player"), 
    document.querySelector("#monster"),
    log
)
stage.start()


function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
