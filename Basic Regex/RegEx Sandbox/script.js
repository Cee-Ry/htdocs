const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }
  if (globalFlag.checked) {
    flags += "g";
  }
  return flags;
}

testButton.addEventListener("click", () => {
  const patternValue = regexPattern.value;
  const flags = getFlags();
  const textContent = stringToTest.textContent;

  const regex = new RegExp(patternValue, flags);
  const matches = textContent.match(regex);

  if (matches) {
    stringToTest.innerHTML = textContent.replace(
      regex,
      '<span class="highlight">$&</span>'
    );
    testResult.innerText = matches.join(", ");
  } else {
    testResult.innerText = "no match";
  }
});
