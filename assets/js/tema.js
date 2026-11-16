const themeButton = document.querySelector("[data-theme-toggle]");
const savedTheme = localStorage.getItem("conexoes-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");

function updateThemeButton(theme) {
  const darkModeEnabled = theme === "dark";
  themeButton.setAttribute("aria-pressed", String(darkModeEnabled));
  themeButton.textContent = isEnglish
    ? (darkModeEnabled ? "Turn light mode on" : "Turn dark mode on")
    : (darkModeEnabled ? "Ativar modo claro" : "Ativar modo escuro");
}

document.documentElement.dataset.theme = savedTheme || preferredTheme;
updateThemeButton(document.documentElement.dataset.theme);

themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("conexoes-theme", nextTheme);
  updateThemeButton(nextTheme);
});
