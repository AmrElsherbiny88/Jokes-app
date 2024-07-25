export const load = async () => ({
  joke: await fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .catch((error) => console.log(error)),
});
