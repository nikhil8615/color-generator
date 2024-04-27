const hexbutton = document.querySelector(".hex-button");
const hexcolorValue = document.querySelector(".hex-color-value");
const generator = document.querySelector(".hex-color-generator");
const hexcopybutton = document.querySelector(".hex-copy-color");
hexbutton.addEventListener("click", () => {
  let hexColorOutput = "";
  let characterSet = "0123456789ABCDEF";

  for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }
  hexcolorValue.innerHTML = `#${hexColorOutput}`;
  generator.style.background = `#${hexColorOutput}`;
  hexbutton.style.color = `#${hexColorOutput}`;
});

const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbcolorcontainer = document.querySelector(".rgb-color-container");
const rgbcolorvalue = document.querySelector(".rgb-color-value");
const rgbcopybutton = document.querySelector(".rgb-copy-color");

rgbBtn.addEventListener("click", () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;
  rgbcolorcontainer.style.background = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  rgbcolorvalue.innerHTML = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  rgbBtn.style.color = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
});

hexcopybutton.addEventListener("click", () => {
  console.log(hexcolorValue.textContent);
  navigator.clipboard.writeText(hexcolorValue.textContent);
  console.log("hexcoloriscopied");
});
rgbcopybutton.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbcolorvalue.textContent);
});
