const themes = [
  {
    name: "light",
    message: "Light theme activated. Bright and clean!"
  },
  {
    name: "dark",
    message: "Dark theme activated. Easy on the eyes!"
  },
  {
    name: "ocean",
    message: "Ocean theme activated. Calm deep-sea vibes!"
  }
];

const themeButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const statusEl = document.getElementById("status");
const menuItems = document.querySelectorAll('[role="menuitem"]');

themeButton.addEventListener("click", () => {
  const isHidden = themeDropdown.hasAttribute("hidden");

  if (isHidden) {
    themeDropdown.removeAttribute("hidden");
    themeButton.setAttribute("aria-expanded", "true");
  } else {
    themeDropdown.setAttribute("hidden", "");
    themeButton.setAttribute("aria-expanded", "false");
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedName = item.textContent.trim().toLowerCase();
    const matchedTheme = themes.find((theme) => theme.name === selectedName);

    // Remove any existing theme-* classes before adding the new one
    themes.forEach((theme) => {
      document.body.classList.remove(`theme-${theme.name}`);
    });

    if (matchedTheme) {
      document.body.classList.add(`theme-${matchedTheme.name}`);
      statusEl.textContent = matchedTheme.message;
    }

    // Close the dropdown after selecting a theme
    themeDropdown.setAttribute("hidden", "");
    themeButton.setAttribute("aria-expanded", "false");
  });
});
