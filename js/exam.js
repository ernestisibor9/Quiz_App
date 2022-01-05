const examData = [
    {
        question: 'Convert 10001<sub>two</sub> to decimal.',
        A: '17<sub>ten</sub>',
        B: '16<sub>ten</sub>',
        C: '18<sub>ten</sub>',
        D: '15<sub>ten</sub>',
        correct: 'A'
    },
    {
        question: 'What does a thermometer measure?',
        A: 'Rainfall',
        B: 'Pressure',
        C: 'Heart Beat',
        D: 'Temperature',
        correct: 'D'
    },
    {
        question: 'Who is the President of Nigeria?',
        A: 'Bola Tinubu',
        B: 'Muhammadu buhari',
        C: 'Olusegun Obasanjo',
        D: 'Goodluck Jonathan',
        correct: 'B'
    },
    {
        question: 'What do you call animals that live on the land and the water?',
        A: 'Amphibians',
        B: 'Arachnids',
        C: 'Mammals',
        D: 'Insects',
        correct: 'A'
    },
    {
        question: 'What is a baby goat called?',
        A: 'Kitten',
        B: 'Stallion',
        C: 'Kid',
        D: 'Eaglet',
        correct: 'C'
    },
    {
        question: 'What figure of speech is this?  "We played well but we lost."',
        A: 'Metaphor',
        B: 'Paradox',
        C: 'Irony',
        D: 'Onomatopoeia',
        correct: 'C'
    },
    {
        question: 'What figure of speech is this? "It is raining cats and dogs."',
        A: 'Metaphor',
        B: 'Simile',
        C: 'Paradox',
        D: 'Onomatopoeia',
        correct: 'A'
    },
    {
        question: '________ is not a Logic gate.',
        A: 'SOUTH',
        B: 'NOT',
        C: 'AND',
        D: 'NOR',
        correct: 'A'
    },
    {
        question: 'What is the full meaning of HTML?',
        A: 'HyperText MarkUp Line',
        B: 'HyperText Transfer Machine Language',
        C: 'High Transfer MarkUp Language',
        D: 'HyperText MarkUp Language',
        correct: 'D'
    },
    {
        question: 'Where is the Eiffel Tower?',
        A: 'New York, USA',
        B: 'Paris, France',
        C: 'London, England',
        D: 'Cairo, Egypt',
        correct: 'B'
    },
    {
        question: 'How many colours are there in a rainbow?',
        A: '5',
        B: '6',
        C: '7',
        D: '8',
        correct: 'C'
    },
    {
        question: 'What\'s the longest book in the bible?',
        A: 'Psalms',
        B: 'Genesis',
        C: 'Revelation',
        D: 'Proverbs',
        correct: 'A'
    },
    {
        question: '11 = 13 - X. What is the value of X?',
        A: '1',
        B: '3',
        C: '2',
        D: '24',
        correct: 'C',
    },
    {
        question: 'If a = 2, b = 3, and c = 4. Find the value of a-b/(b-c).',
        A: '0',
        B: '-1',
        C: '2',
        D: '1',
        correct: 'D'
    },
    {
        question: 'Lack of vitamin D causes ______',
        A: 'Scurvy',
        B: 'Infertility',
        C: 'Rickets',
        D: 'Beriberi',
        correct: 'C'
    },
    {
        question: 'What is the name of Simba\'s mother?',
        A: 'Rose',
        B: 'Martha',
        C: 'Sarabi',
        D: 'Debby',
        correct: 'C'
    },
    {
        question: 'Who is the Governor of Lagos state?',
        A: 'Bola Tinubu',
        B: 'Babatunde Fashola',
        C: 'Akinwunmi Ambode',
        D: 'Sanwo Olu',
        correct: 'D'
    },
    {
        question: 'Who was the first man to step onto the moon?',
        A: 'Neil Armstrong',
        B: 'Jeff Bezos',
        C: 'Elon Musk',
        D: 'Galileo Galilei',
        correct: 'A'
    },
    {
        question: 'Which club has the highest number of UEFA Champions League title won?',
        A: 'Manchester United',
        B: 'Barcelona',
        C: 'Liverpool',
        D: 'Real Madrid',
        correct: 'D'
    },
    {
        question: '______ is a name of any person, animal, place or things',
        A: 'Pronoun',
        B: 'Noun',
        C: 'Verb',
        D: 'Adjective',
        correct: 'B'
    }
]
const questions = document.getElementById('questions')
const a_test = document.getElementById('a_test')
const b_test = document.getElementById('b_test')
const c_test = document.getElementById('c_test')
const d_test = document.getElementById('d_test')
const submitBtn = document.getElementById('btnMe')
const reload = document.getElementById('reloadBtn')
const headOne = document.getElementById('headerOne')
const resOne = document.getElementById('res')
const myResult = document.getElementById('myResult')
const myScore = document.getElementById('scores')
const examContainer = document.getElementById('exam-container')
const myTimer = document.getElementById('ms')
console.log(myTimer);

reload.style.display = 'none';
resOne.style.display = 'none'
myResult.style.display = 'none'


function optionAns() {
    const examRadio =document.querySelector('input[type = radio]:checked')
    if(!examRadio){
        alert('Not checked')
    }

}


//Timer
let totalTime = 1000;
let min = 0;
let secs = 0;
let counter = 0;
let newMin;
let newSecs;

function setTime() {
    let timer = setInterval(function () {
        counter++;
        min = Math.floor((totalTime - counter)/60); //calculate mins
        secs = totalTime - min * 60 - counter;
        // console.log("mins " + min);
        // console.log("secs " + secs);
        // if(min < 10 ){
        //     newMin = `0${min}`;
        //    // newSecs = `${secs}`
        // }
        let html = '';
        if(secs < 5){
           html += `<h2>${secs}</h2>`
           console.log(html);
        }
        if(counter == totalTime){
            clearInterval(timer)
            window.location.href = 'index2.html';
        }
        myTimer.innerHTML = `${min} ${secs}`
    }, 1000)
}



//Add Event Listener to your submit button
 submitBtn.addEventListener('click', subBtn)



let currentExam = 0;
let score = 0

// Answers
// function getSelected() {
//     const answerElement = document.querySelectorAll('.answer')
    
//     answerElement.forEach((ans)=>{
//         console.log(ans.checked);
//     })
// }
// getSelected()

loadExams();

function loadExams() {
    const recordExam = examData[currentExam]
    questions.innerHTML = recordExam.question;
    a_test.innerHTML = recordExam.A;
    b_test.innerHTML = recordExam.B;
    c_test.innerHTML = recordExam.C;
    d_test.innerHTML = recordExam.D;

}

//let selectedMan = 0;

 function subBtn() {
    //optionAns()
    setTime(); 
    const examRadio =document.querySelector('input[type = radio]:checked')
    if(!examRadio){
        alert('Please select an option')
    }
    // else if (examRadio){
    //     console.log('the answer');
    // }
    else{
        if(examRadio.value == examData[currentExam].correct){
           // alert('correct score')
            score += 5
           // console.log(score);
        }
        // else{
        //     alert ('fail')
        // }
       
       // console.log(examRadio.value)   
        console.log(examData[0].correct);

    currentExam++
    if(currentExam < examData.length){
        myScore.innerHTML = `Score : <span class="badge bg-success">${score}  </span> `;
        console.log(myScore);
        loadExams();
    }
    else{
       // console.log(examData['length']);

        const displayScore = `Score = ${score} / ${examData['length'] * 5}`;
        myResult.textContent = displayScore;
        submitBtn.style.display = 'none';
        reload.style.display = 'block';
        headOne.style.display = 'none'
        examContainer.style.display = 'none'
        resOne.style.display = 'block'
        myResult.style.display = 'block'
        myScore.style.display = 'none'
        //alert('You have finished!')
    }
}

 }
 