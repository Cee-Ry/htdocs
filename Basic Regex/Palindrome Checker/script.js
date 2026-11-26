const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function checkPalindrome() {
  const originalText = textInput.value;

  if (originalText === "") {
    alert("Please input a value");
    return;
  }

  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedText = originalText.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversedText = cleanedText.split("").reverse().join("");

  if (cleanedText === reversedText) {
    resultDiv.textContent = `${originalText} is a palindrome.`;
    resultDiv.style.color = "#155724";
  } else {
    resultDiv.textContent = `${originalText} is not a palindrome.`;
    resultDiv.style.color = "#721c24";
  }
}

checkBtn.addEventListener("click", checkPalindrome);

textInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkPalindrome();
  }
});
