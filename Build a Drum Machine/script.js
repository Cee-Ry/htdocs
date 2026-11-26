const display = document.getElementById("display");
const drumPads = document.querySelectorAll(".drum-pad");

function triggerPad(pad) {
  const audio = pad.querySelector(".clip");
  if (!audio) return;

  audio.currentTime = 0;
  audio.play().catch(() => {});

  display.innerText = pad.dataset.label;

  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 120);
}

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => triggerPad(pad));
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const audio = document.querySelector(`audio.clip#${key}`);
  if (audio && audio.parentElement.classList.contains("drum-pad")) {
    triggerPad(audio.parentElement);
  }
});
