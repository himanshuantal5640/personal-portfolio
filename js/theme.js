const THEME_KEY = "theme-preference";

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.dataset.theme = isLight ? "light" : "";
  updateThemeButton(isLight ? "light" : "dark");
}

function updateThemeButton(mode) {
  const btn = document.querySelector(".theme-btn");
  if (!btn) return;

  if (mode === "light") {
    btn.textContent = "🌙";
    btn.setAttribute("aria-label", "Switch to dark mode");
  } else {
    btn.textContent = "☀️";
    btn.setAttribute("aria-label", "Switch to light mode");
  }
}

function toggleTheme() {
  const isCurrentlyLight = document.body.dataset.theme === "light";
  const nextTheme = isCurrentlyLight ? "dark" : "light";
  applyTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
}

(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const preferred =
    saved ||
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark");
  applyTheme(preferred);
})();
