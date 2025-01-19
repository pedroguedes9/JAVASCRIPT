//initial data
let currentQuestion = 0
showQuestion()

//functions
function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion]
        console.log(q.question)
    } else {
        //acabaram as questões
    }
}