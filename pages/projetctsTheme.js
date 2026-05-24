document.addEventListener("DOMContentLoaded", () => {
    
    const themes = {

        dark: {
        bg: "#000000",
        fg: "#ffffff",
        muted: "#8f8f8f",
        muted2: "#6f6f6f",
        accent: "#00ff88",
        link: "#4f83ff",
        border: "#161616"
        },

        gray: {
        bg: "#1e1e1e",
        fg: "#ffffff",
        muted: "#a0a0a0",
        muted2: "#7a7a7a",
        accent: "#00ff88",
        link: "#7aa2ff",
        border: "#2a2a2a"
        },

        blue: {
        bg: "#0b1220",
        fg: "#e6e6e6",
        muted: "#8aa0b3",
        muted2: "#5f7488",
        accent: "#4da3ff",
        link: "#4da3ff",
        border: "#1b2a3a"
        },

        purple: {
        bg: "#120a1f",
        fg: "#f1e9ff",
        muted: "#b9a7d6",
        muted2: "#8d79b3",
        accent: "#b36bff",
        link: "#c08bff",
        border: "#2a1b3d"
        },

        cyber: {
        bg: "#050505",
        fg: "#ffffff",
        muted: "#9cffd1",
        muted2: "#4fd6a5",
        accent: "#00ff88",
        link: "#00e5ff",
        border: "#0f0f0f"
        },

        caffee: {
        bg: "#352815",
        fg: "#f1e9d2",
        muted: "#c9a66b",
        muted2: "#8d6b3f",
        accent: "#ffb36b",
        link: "#ffb36b",
        border: "#3d2a0f",
        }
    };
    
  const buttons = document.querySelectorAll(".color-option");

  function applyTheme(name) {
    const t = themes[name];

    Object.keys(t).forEach(key => {
      document.documentElement.style.setProperty(`--${key}`, t[key]);
    });

    localStorage.setItem("theme", name);

    buttons.forEach(b => b.classList.remove("active"));
    document.querySelector(`[data-theme="${name}"]`)?.classList.add("active");
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      applyTheme(btn.dataset.theme);
    });
  });

  const saved = localStorage.getItem("theme") || "dark";
  applyTheme(saved);
});