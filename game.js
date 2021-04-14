import { getClue as getClueFromPromise } from "./promise-version.js";
import { getClue as getClueFromAsyncFunction } from "./async-await-version.js";
import { getClue as getClueFromCallback } from "./callback-version.js"


const checkRepBtn = document.getElementById("check-response")
const textArea = document.getElementById("player-response")
const score = document.getElementById("score")
const answer = document.getElementById("answer");
const value1 = document.getElementById("value");
let scoreCount = 0;

function setHTML(clue) {
  const question1 = document.getElementById("question");
  const answer1 = document.getElementById("answer");
  const value1 = document.getElementById("value");
  const categoryTitle1 = document.getElementById("category-title");
  const invalidCount1 = document.getElementById("invalid-count");

  question1.innerHTML = clue[0].question;
  answer1.innerHTML = clue[0].answer;
  value1.innerHTML = clue[0].value;
  categoryTitle1.innerHTML = clue[0].category.title;

  if (clue[0].invalid_count && clue[0].invalid_count > 0) {
    invalidCount1.innerHTML = "invalid";
  } else {
    invalidCount1.innerHTML = "valid";
  }

  answer1.classList.add("is-hidden")
  checkRepBtn.classList.remove("is-hidden")
}

const usePromBtn = document.getElementById("use-promise");
const useAsyncBtn =  document.getElementById("use-async-await");
const useCallbackBtn = document.getElementById("use-callback")

usePromBtn.addEventListener("click", (event) => {
  getClueFromPromise()
    .then((clue)=> {setHTML(clue)
        console.log(clue)})
    .catch((error) => console.error(error.message));
});

useAsyncBtn.addEventListener("click", async (event) => {
    try{
        const clue = await getClueFromAsyncFunction()
        setHTML(clue)
    } catch (error) {
        console.error(error.message)
    }
})

useCallbackBtn.addEventListener("click", (event) => {
    getClueFromCallback((error, clue) => {
        if (error !== null) return console.error(error)
        setHTML(clue)
    })
})



checkRepBtn.addEventListener("click", (event) => {
    score.innerHTML = scoreCount;
    if (textArea.value.trim() === answer.innerHTML.trim()) {
        scoreCount += Number.parseInt(value1.innerHTML)
        score.innerHTML = scoreCount;
    }
    textArea.value = ''
    answer.classList.remove("is-hidden")
    checkRepBtn.classList.add("is-hidden")
})
