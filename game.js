import { getClue as getClueFromPromise } from "./promise-version.js";
import { getClue as getClueFromAsyncFunction } from "./async-await-version.js";
function setHTML(clue) {
  const question = document.getElementById("question");
  const answer = document.getElementById("answer");
  const value = document.getElementById("value");
  const categoryTitle = document.getElementById("category-title");
  const invalidCount = document.getElementById("invalid-count");

  question.innerHTML = clue.question;
  answer.innerHTML = clue.answer;
  value.innerHTML = clue.value;
  categoryTitle.innerHTML = clue.category.title;

  if (clue.invalid_count && clue.invalid_count > 0) {
    invalidCount.innerHTML = "invalid";
  } else {
    invalidCount.innerHTML = "valid";
  }
}
const usePromBtn = document.getElementById("use-promise");
const useAsyncBtn =  document.getElementById("use-async-await");
usePromBtn.addEventListener("click", (event) => {
  getClueFromPromise()
    .then((clue) => setHTML(clue))
    .catch((error) => console.error(clue.message));
});

useAsyncBtn.addEventListener('click', async event => {
    try{
        const clue = await getClueFromAsyncFunction()
        setHTML(clue)
    } catch (error) {
        console.error(error.message)
    }
})
