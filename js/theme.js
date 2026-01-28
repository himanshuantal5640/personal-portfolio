const toggleBtn = document.querySelector(".toggle-btn");

function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "🌞";
  } else {
    document.body.classList.remove("dark");
    toggleBtn.textContent = "🌙";
  }
  localStorage.setItem("theme", mode);
}

// Load saved theme
const saved = localStorage.getItem("theme") || "light";
setTheme(saved);

// Toggle on click
toggleBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  setTheme(newTheme);
});
