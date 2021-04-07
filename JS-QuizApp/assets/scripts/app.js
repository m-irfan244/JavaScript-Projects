
const quizData = [
    {
        Question: "Wakhan a narrow strip of afghanistan separates pakistan from _____?",
        a: "Azerbaijan",
        b: "Kazakistan",
        c: "Tajikistan",
        d: "Turkamanistan",
        correct: "c",
    },
    {
        Question: "Gorakh Hill station is in District",
        a: "Dadu",
        b: "Chagai",
        c: "Abbotabad",
        d: "Skardu",
        correct: "a",
    },
    {
        Question:" In which city of Sindh the famous hathi dar is located?",
        a: "Sukkur",
        b: "Shikarpur",
        c: "Kotdij",
        d: "Sehwan",
        correct: "b",
    },
    {
        Question: "What is covered area of Sindh in Square Kilometers?",
        a: "139424",
        b: "138320",
        c: "140914",
        d: "None of these",
        correct: "c",
    },
    {
        Question: "The SWAN river flows near ?",
        a: "Swat",
        b: "Rawalpindi",
        c: "Gilgit",
        d: "Sehwan",
        correct: "b",
    },
    {
        Question: "Diamer-Basha Dam is to be constructed on?",
        a: "River Sutluj",
        b: "River Gilgit",
        c: "River Chinab",
        d: "River Jehlum",
        correct: "b",
    },
    {
        Question: "Nanga Parbat is in which mountain range in Pakistan?",
        a: "Karakoram",
        b: "Himalayas",
        c: "Hindu kush",
        d: "None of these",
        correct:"b",
    },
    {
        Question:" Tirich Mir is the highest mountain in ___ mountain range in Pakistan?",
        a: "Himalayas",
        b: "KhirThar",
        c: "Hindu kush",
        d: "None",
        correct: "c",
    },
    {
        Question: "Which city is famous for its Hiran Minar?",
        a: "Sheikhupura",
        b: "Kasur",
        c: "Sailkot",
        d: "Lahore",
        correct: "a",
    },
    {
        Question: "The city famous for its surgical instruments is?",
        a: "Karachi",
        b: "Sailkot",
        c: "Jehlum",
        d: "Lahore",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0 

loadQuiz()

function loadQuiz() {
    deSelectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.Question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deSelectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer 

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        }
        else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           
            <button onclick = "location.reload()" >Reload</button>
            `

        }
    }
})