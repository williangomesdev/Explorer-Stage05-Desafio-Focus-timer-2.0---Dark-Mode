export default function Controls({
  playButton,
  pauseButton,
  addButton,
  subtractButton,
  count,
  minutesDisplay,
}) {
  //Controls resetar controles para o padrão
  function reset() {
    pauseButton.classList.add("hide");
    playButton.classList.remove("hide");
    addButton.removeAttribute("disabled");
    subtractButton.removeAttribute("disabled");
  }

  function play() {
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    addButton.setAttribute("disabled", "disabled");
    subtractButton.setAttribute("disabled", "disabled");
  }
  function stop() {
    reset();
    count = 0;
  }
  function add() {
    if (count <= 90) {
      count = count + 5;
    }

    minutesDisplay.textContent = String(count).padStart(2, "0");
  }
  function subtract() {
    if (count <= 0) {
      subtractButton.disable = true;
    } else if (count >= 5) {
      subtractButton.disable = false;
      count = count - 5;
    }

    minutesDisplay.textContent = String(count).padStart(2, "0");
  }
  function forestCardActive() {
    forestCard.classList.toggle("activeCard");
    rainCard.classList.remove("activeCard");
    coffeShopCard.classList.remove("activeCard");
    firePlaceCard.classList.remove("activeCard");
  }
  function rainCardActive() {
    forestCard.classList.remove("activeCard");
    rainCard.classList.toggle("activeCard");
    coffeShopCard.classList.remove("activeCard");
    firePlaceCard.classList.remove("activeCard");
  }
  function coffeShopCardActive() {
    forestCard.classList.remove("activeCard");
    rainCard.classList.remove("activeCard");
    coffeShopCard.classList.toggle("activeCard");
    firePlaceCard.classList.remove("activeCard");
  }
  function firePlaceCardActive() {
    forestCard.classList.remove("activeCard");
    rainCard.classList.remove("activeCard");
    coffeShopCard.classList.remove("activeCard");
    firePlaceCard.classList.toggle("activeCard");
  }

  return {
    reset,
    play,
    stop,
    add,
    subtract,
    forestCardActive,
    rainCardActive,
    coffeShopCardActive,
    firePlaceCardActive,
  };
}
