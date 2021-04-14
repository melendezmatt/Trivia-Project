export async function getClue() {
  const answer = await fetch("http://jservice.io/api/random?");

  if (!answer.ok) {
    throw new Error(answer.status);
  }
  return await answer.json();
}
