export default function getClue () {
    return fetch("https://jservice.xyz/api/random-clue")
        .then((goodURL) => {
            if (!goodURL.ok) {
               throw new Error(goodURL.status)
            }
            return goodURL.json();
        });
    }
