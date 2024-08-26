let playerName = "Pedro"
let player = createKnight(playerName)
let monster = createLittleMonster()
document.querySelector("#switch-player").addEventListener("click", () => switchPlayer())
document.querySelector("#switch-monster").addEventListener("click", () => switchMonster())
document.querySelector("#Log-Reset").addEventListener("click", () => logReset())
stage.start(
    player,
    monster,
    document.querySelector("#player"),
    document.querySelector("#monster")
)

