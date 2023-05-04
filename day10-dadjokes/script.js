//naming elements
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke)

//calling function
generateJoke();

// //fetching joke with .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   }
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }

//fetching again, but using async/await
async function generateJoke() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    }
    //await bc you have to wait for the fetch to occur
    //when using await you have to write "async" to the beginning of the function it is being used in
    const res = await fetch("https://icanhazdadjoke.com", config)
      
    //await bc it also returns a promise
    const data =  await res.json()
    jokeEl.innerHTML = data.joke
  }