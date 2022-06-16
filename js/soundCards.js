export default function SoundCards() {
  const forestSound = new Audio(
    "https://github.com/williangomesdev/SoundsRepositories/blob/main/Floresta.wav?raw=true"
  );

  const rainSound = new Audio(
    "https://github.com/williangomesdev/SoundsRepositories/blob/main/Chuva.wav?raw=true"
  );

  const coffeShopSound = new Audio(
    "https://github.com/williangomesdev/SoundsRepositories/blob/main/Cafeteria.wav?raw=true"
  );

  const firePlaceSound = new Audio(
    "https://github.com/williangomesdev/SoundsRepositories/blob/main/Lareira.wav?raw=true"
  );

  function forestCardSound() {
    if (forestCard.classList.contains("activeCard")) {
      forestSound.play();
      rainSound.pause();
      coffeShopSound.pause();
      firePlaceSound.pause();
    } /* else {
      forestSound.pause();
    } */
  }
  function rainCardSound() {
    if (rainCard.classList.contains("activeCard")) {
      forestSound.pause();
      rainSound.play();
      coffeShopSound.pause();
      firePlaceSound.pause();
    } /* else {
      rainSound.pause();
    } */
  }
  function coffeShopCardSound() {
    if (coffeShopCard.classList.contains("activeCard")) {
      forestSound.pause();
      rainSound.pause();
      coffeShopSound.play();
      firePlaceSound.pause();
    } /* else {
      coffeShopSound.pause();
    } */
  }
  function firePlaceCardSound() {
    if (firePlaceCard.classList.contains("activeCard")) {
      forestSound.pause();
      rainSound.pause();
      coffeShopSound.pause();
      firePlaceSound.play();
    } /* else {
      firePlaceSound.pause();
    } */
  }

  return {
    forestSound,
    rainSound,
    coffeShopSound,
    firePlaceSound,
    forestCardSound,
    rainCardSound,
    coffeShopCardSound,
    firePlaceCardSound,
  };
}
