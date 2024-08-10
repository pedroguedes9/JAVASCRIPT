let player = new Knight("Pedro")
let monster = new BigMonster()
const stage = new Stage(
    player,
    monster, 
    document.querySelector("#player"), 
    document.querySelector("#monster")
)
stage.start()
