const input = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

let charCounter = parseInt(charCount.textContent.slice(17));


input.addEventListener("input", () => {
  charCounter = input.value.length;
  if (charCounter >= 50) {
    charCount.style.color = "red";
    charCounter = 50;
    let trimmed = input.value.slice(0, 50);
    input.value = trimmed;
  }
  charCount.textContent = `Character Count: ${charCounter}/50`;
});
