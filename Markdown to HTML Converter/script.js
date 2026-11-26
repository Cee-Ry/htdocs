const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let text = markdownInput.value;

  // Headings (h3 -> h2 -> h1) and Blockquotes at the start of a line
  text = text.replace(/^\s*###\s+(.+)$/gm, "<h3>$1</h3>");
  text = text.replace(/^\s*##\s+(.+)$/gm, "<h2>$1</h2>");
  text = text.replace(/^\s*#\s+(.+)$/gm, "<h1>$1</h1>");
  text = text.replace(/^\s*>\s+(.+)$/gm, "<blockquote>$1</blockquote>");

  // Images before Links
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Bold before Italic
  text = text.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>");
  text = text.replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");

  // Join adjacent tags across newlines
  text = text.replace(/>\n+</g, "><");

  return text;
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();
  htmlOutput.textContent = html;
  preview.innerHTML = html;
});
