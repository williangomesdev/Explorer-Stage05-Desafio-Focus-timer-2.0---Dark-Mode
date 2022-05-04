import { elements } from "./htmlElements.js";
import Controls from "./controls.js";
import Timer from "./timer.js";
import SoundCards from "./soundCards.js";
import Events from "./events.js";

const {
  body,
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  addButton,
  subtractButton,
  volumeBar,
  standardMinutes,
  standardSeconds,
  buttonLightDarkMode,
  boxInsideBall,
  count,
} = elements;

const controls = Controls({
  playButton,
  pauseButton,
  addButton,
  subtractButton,
  count,
  minutesDisplay,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const soundCards = SoundCards();

//Evento Dark/Light Mode
buttonLightDarkMode.addEventListener("click", function () {
  if (body.classList.contains("darkMode")) {
    boxInsideBall.setAttribute("style", "transform:translateX(0%)");
    body.classList.remove("darkMode");
  } else {
    boxInsideBall.setAttribute("style", "transform:translateX(-100%)");
    body.classList.toggle("darkMode");
  }
});

//Evento volumeBar
const audioCards = [
  soundCards.forestSound,
  soundCards.rainSound,
  soundCards.coffeShopSound,
  soundCards.firePlaceSound,
];
volumeBar.forEach((progressBar) => {
  progressBar.addEventListener("mousemove", () => {
    for (let audioCard of audioCards) {
      audioCard.volume = progressBar.value / 100;
    }
  });
});

Events({
  controls,
  timer,
  soundCards,
  standardMinutes,
  standardSeconds,
});
