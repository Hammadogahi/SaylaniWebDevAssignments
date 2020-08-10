const dataObj = JSON.parse(data);
const quizData = dataObj[0].questions;

//Selectors
const startQuizBtn = document.querySelector("#start");
const quiz = document.querySelector(".quiz");
const quizQuestion = document.querySelector(".question");
const nextBtn = document.querySelector("#nextBtn");
const options = document.querySelectorAll(".option");
const OptionsDiv = document.querySelector(".options");

//Initial State variables
let questionNo = 0;
let checkmyAns = 0;
let correct = 0;

//Define Functions

const start = () => {
  startQuizBtn.addEventListener("click", () => {
    startQuizBtn.classList.add("hide");
    quiz.classList.remove("hide");
    quizQuestion.textContent = quizData[questionNo].question;
    updateOptions();
  });
};

//Update the options with the live data
const updateOptions = () => {
  for (let i = 0; i < options.length; i++) {
    options[i].textContent = quizData[questionNo].answers[i];
  }
};

const checkCorrectAns = () => {
  let correctAns = quizData[questionNo].correctIndex;
  // if ((submittedAns = correctAns)) {
  //   console.log(correct);
  return correctAns;
  // }
};
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", (e) => {
    let submittedAns = e.target.id.split("-")[1];
    console.log(submittedAns);
    if (submittedAns == checkCorrectAns()) {
      console.log("correct!");
      e.target.classList.add("correct");
      options.forEach((btns) => {
        btns.classList.add("disabled");
      });
      correct++;
    } else {
      e.target.classList.add("wrong");
      options.forEach((btns) => {
        btns.classList.add("disabled");
      });
    }
  });
}

const nextQuestionBtn = () => {
  questionNo++;
  if (questionNo < quizData.length) {
    quizQuestion.textContent = quizData[questionNo].question;
    updateOptions();
    checkCorrectAns();

    options.forEach((option) => {
      option.classList.remove("correct");
      option.classList.remove("wrong");
      option.classList.remove("disabled");
    });
  } else {
    quizQuestion.textContent = `Correct Answers: ${correct}`;
    nextBtn.classList.add("hide");
    OptionsDiv.classList.add("hide");
    question.classList.add("hide");
  }
};

//Event listeners

nextBtn.addEventListener("click", nextQuestionBtn);

//Execute functions
start();
