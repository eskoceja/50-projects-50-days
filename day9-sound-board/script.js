const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  //add event listener to each btn
  btn.addEventListener("click", () => {
    //stop sounds if another btn is clicked
    btn.addEventListener("click", () => {
      stopSongs();
      //.play() makes the sounds play
      document.getElementById(sound).play();
    });
  });

  //calling the div#buttons and appending the buttons to the div
  document.getElementById("buttons").appendChild(btn);
});

//stopSongs function 
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
