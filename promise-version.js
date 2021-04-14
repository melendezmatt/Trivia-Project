export function getClue () {
    return fetch("http://jservice.io/api/random?")
        .then((goodURL) => {
            if (!goodURL.ok) {
               throw new Error(goodURL.status)
            }
            return goodURL.json();
        });
    }
