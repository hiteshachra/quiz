const quesDB =[
{
    question:"1.HTML stands for",
    a:"HighText Machine Language",
    b:"HyperText and links Markup Language",
    c:"HyperText Markup Language",
    d:"None of these",
    ans:"ans3"
},
{
    question:"2.The correct sequence of HTML tags for starting a webpage is",
    a:"Head, Title, HTML, body",
    b:"HTML, Body, Title, Head",
    c:"HTML, Head, Title, Body",
    d:"None of these",
    ans:"ans3"
},
{
    question:"3.Which of the following tag is used to insert a line-break in HTML?",
    a:"<br>",
    b:"<a>",
    c:"<pre>",
    d:"<b></b>",
    ans:"ans1"
},
{
    question:"4.Which character is used to represent the closing of a tag in HTML?",
    a:"backslash",
    b:"!",
    c:"/",
    d:".",
    ans:"ans3"
}
];
const question= document.querySelector('.question');
const option1= document.querySelector("#option1");
const option2= document.querySelector("#option2");
const option3= document.querySelector("#option3");
const option4= document.querySelector("#option4");
const submit= document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showscore = document.querySelector('#showscore');

let quesnum=0;
let score=0;
const loadQuestion = () => {
 question.innerText = quesDB[quesnum].question;
 option1.innerText = quesDB[quesnum].a;
 option2.innerText = quesDB[quesnum].b;
 option3.innerText = quesDB[quesnum].c;
 option4.innerText = quesDB[quesnum].d;
}

loadQuestion();

const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;

}
const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === (quesDB[quesnum].ans)){
        score++;
    };
    quesnum++;
    deselectAll();
    if(quesnum < quesDB.length)
    {
        loadQuestion();
    }
    else{
showscore.innerHTML = 
`
<h3>You Scored ${score}/${quesDB.length} :) </h3>
<button class="btn" onclick="location.reload()">Play Again</button>

`;
showscore.classList.remove('scorearea');
    }
});



