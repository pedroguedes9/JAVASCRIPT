const defaultCharacter = {
    name: "",
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

function createKnight(name) {
    return {
        ...defaultCharacter,
        class: "knight",
        name:`${name} (knight)`,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8,
    }
}

function createSorcerer(name) {
    return {
        ...defaultCharacter,
        class: "sorcerer",
        name:`${name} (sorcerer)`,
        life: 80,
        maxLife: 80,
        attack: 17,
        defense: 4,
    }
}

function createLittleMonster() {
    return {
        ...defaultCharacter,
        name: "Little Monster",
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 3,
    }
}

function createBigMonster() {
    return {
        ...defaultCharacter,
        name: "Big Monster",
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 5,
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1El = fighter1El
        this.fighter2El = fighter2El

        this.fighter1El.querySelector("#player-attack").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2)),
        this.fighter2El.querySelector("#monster-attack").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1)),
        this.update()
    },
    doAttack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage("Já está morto")
            return
        }

        const attackFactor = (Math.random() * 2).toFixed(2)
        const defenseFactor = (Math.random() * 2).toFixed(2)
        const actualAttack = attacking.attack * attackFactor
        const actualDefense = attacked.defense * defenseFactor
        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack
            attacked.life = attacked.life < 0 ? 0 : attacked.life
            log.addMessage(`${attacking.name} atacou ${attacked.name} com ${actualAttack.toFixed(2)} de dano`)
        }
        else {
            log.addMessage(`${attacked.name} defendeu o ataque de ${attacking.name}`)
        }
        this.update()
    },

    update() {
        this.fighter1El.querySelector("#player-name").textContent = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)}HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1El.querySelector("#player-life-bar").style.width = `${f1Pct}%`
        this.fighter2El.querySelector("#monster-name").textContent = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)}HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2El.querySelector("#monster-life-bar").style.width = `${f2Pct}%`
    }
} 

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg)
        this.render()
    },
    render() {
        const logEl = document.querySelector("#log")
        logEl.innerHTML = ""
        for(let i in this.list) {
            logEl.innerHTML += `<p>${this.list[i]}</p>`
        }
    }
}
function switchPlayer() {
    if (player.class === "knight" ) {
        player = createSorcerer(playerName)
    } else {
        player = createKnight(playerName)
    }
    log.addMessage(`${player.name} trocou para ${player.class}`)
    stage.fighter1 = player
    stage.update()
}
function switchMonster() {
    if (monster.name === "Big Monster") {
        monster = createLittleMonster()
    }
    else {
        monster = createBigMonster()
    }
    log.addMessage(`O monstro foi trocado`)
    stage.fighter2 = monster
    stage.update()
}
function logReset() {
    log.list = []
    document.querySelector("#log").innerHTML = ""
}




