import {getClue as getClueFromPromise } from "./promise-version.js"

const usePromBtn = document.getElementById("use-promise")

usePromBtn.addEventListener("click", (event) => {
    getClueFromPromise()
        .then((clue) => {
            const question = document.getElementById("question")
            const answer = document.getElementById("answer")
            const value = document.getElementById("value")
            const categoryTitle = document.getElementById("category-title")
            const invalidCount = document.getElementById("invalid-count")

            question.innerHTML = clue.question
            answer.innerHTML = clue.answer
            value.innerHTML = clue.value
            categoryTitle.innerHTML = clue.category.title

            if (clue.invalid_count && clue.invalid_count > 0) {
                invalidCount.innerHTML = 'invalid'
            } else {
                invalidCount.innerHTML = 'valid'
            }
    }).catch((error) => console.error(clue.message))
});
