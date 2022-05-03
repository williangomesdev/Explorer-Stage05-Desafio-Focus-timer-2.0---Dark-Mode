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
  forestCard,
  forestSound,
  rainSound,
  coffeShopSound,
  firePlaceSound,
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

const soundCards = SoundCards({
  forestCard,
  forestSound,
  rainSound,
  coffeShopSound,
  firePlaceSound,
});

Events({
  controls,
  timer,
  soundCards,
  standardMinutes,
  standardSeconds,
});

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
