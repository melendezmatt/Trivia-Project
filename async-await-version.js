export default async function getClue() {
  const answer = await fetch("https://jservice.xyz/api/random-clue");

  if (!answer.ok) {
    throw new Error(answer.status);
  }
  return await answer.json();
}
