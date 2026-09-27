// Centralized Theme Configuration with Semantic Keys
const themeRegistry = {
  slate: {
    name: "Default Slate",
    variables: {
      "--bg-dark": "#0f172a",
      "--card-bg": "#1e293b",
      "--card-border": "#334155",
      "--accent-purple": "#6366f1",
      "--accent-neon": "#10b981",
      "--text-main": "#f8fafc",
      "--text-muted": "#94a3b8",
    },
    heroGradient: "radial-gradient(circle at top, #1e1b4b 0%, #0f172a 80%)",
    btnGradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
    surfaceBackground: "#0b1120",
    accordionActiveBg: "#334155",
    accordionActiveText: "#818cf8",
  },
  cyberpunk: {
    name: "Cyberpunk Neon",
    variables: {
      "--bg-dark": "#0a0a0f",
      "--card-bg": "#12131c",
      "--card-border": "#2a2d3d",
      "--accent-purple": "#ff007f",
      "--accent-neon": "#00f0ff",
      "--text-main": "#ffffff",
      "--text-muted": "#a0a5c0",
    },
    heroGradient: "radial-gradient(circle at top, #2b002c 0%, #0a0a0f 80%)",
    btnGradient: "linear-gradient(135deg, #ff007f, #b000ff)",
    surfaceBackground: "#050508",
    accordionActiveBg: "#2a2d3d",
    accordionActiveText: "#00f0ff",
  },
  emerald: {
    name: "Midnight Emerald",
    variables: {
      "--bg-dark": "#061412",
      "--card-bg": "#0d221f",
      "--card-border": "#1a3d38",
      "--accent-purple": "#10b981",
      "--accent-neon": "#34d399",
      "--text-main": "#e6f4f1",
      "--text-muted": "#85b5ad",
    },
    heroGradient: "radial-gradient(circle at top, #0c332b 0%, #061412 80%)",
    btnGradient: "linear-gradient(135deg, #059669, #10b981)",
    surfaceBackground: "#030a09",
    accordionActiveBg: "#1a3d38",
    accordionActiveText: "#34d399",
  },
  sunset: {
    name: "Sunset Gold",
    variables: {
      "--bg-dark": "#120b18",
      "--card-bg": "#1c1326",
      "--card-border": "#352646",
      "--accent-purple": "#f59e0b",
      "--accent-neon": "#f97316",
      "--text-main": "#fdf8f6",
      "--text-muted": "#b39dbd",
    },
    heroGradient: "radial-gradient(circle at top, #361730 0%, #120b18 80%)",
    btnGradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    surfaceBackground: "#09050d",
    accordionActiveBg: "#352646",
    accordionActiveText: "#fbbf24",
  },
  ocean: {
    name: "Deep Ocean",
    variables: {
      "--bg-dark": "#090d16",
      "--card-bg": "#111827",
      "--card-border": "#1f2937",
      "--accent-purple": "#38bdf8",
      "--accent-neon": "#818cf8",
      "--text-main": "#f0f9ff",
      "--text-muted": "#93c5fd",
    },
    heroGradient: "radial-gradient(circle at top, #0f2342 0%, #090d16 80%)",
    btnGradient: "linear-gradient(135deg, #0284c7, #2563eb)",
    surfaceBackground: "#04060b",
    accordionActiveBg: "#1f2937",
    accordionActiveText: "#38bdf8",
  },
  dracula: {
    name: "Dracula / Pastel",
    variables: {
      "--bg-dark": "#181825",
      "--card-bg": "#1e1e2e",
      "--card-border": "#313244",
      "--accent-purple": "#cba6f7",
      "--accent-neon": "#a6e3a1",
      "--text-main": "#cdd6f4",
      "--text-muted": "#a6adc8",
    },
    heroGradient: "radial-gradient(circle at top, #312144 0%, #181825 80%)",
    btnGradient: "linear-gradient(135deg, #8839ef, #cba6f7)",
    surfaceBackground: "#0f0f18",
    accordionActiveBg: "#313244",
    accordionActiveText: "#cba6f7",
  },
};

function applyTheme(themeKey) {
  const theme = themeRegistry[themeKey.toLowerCase()];
  if (!theme) return;

  const root = document.documentElement;

  // Set CSS custom variables
  Object.entries(theme.variables).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });

  // Apply component styling hooks
  const heroSection = document.querySelector(".theme-hero-bg");
  if (heroSection) heroSection.style.background = theme.heroGradient;

  const footerSection = document.querySelector(".theme-footer-bg");
  if (footerSection)
    footerSection.style.backgroundColor = theme.surfaceBackground;

  document.querySelectorAll(".btn-gradient").forEach((btn) => {
    btn.style.background = theme.btnGradient;
  });

  window.activeThemeConfig = theme;
  localStorage.setItem("preferredTheme", themeKey.toLowerCase());
}

// Dynamically generate theme switcher dropdown list items
function buildThemeDropdown() {
  const menuContainer = document.getElementById("theme-dropdown-menu");
  if (!menuContainer) return;

  menuContainer.innerHTML = Object.entries(themeRegistry)
    .map(
      ([key, config]) => `
    <li>
      <a class="dropdown-item" href="#" onclick="applyTheme('${key}')">${config.name}</a>
    </li>
  `,
    )
    .join("");
}

// Global listener for Accordion states to honor theme selection dynamically
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("accordion-button") &&
    window.activeThemeConfig
  ) {
    setTimeout(() => {
      document.querySelectorAll(".accordion-button").forEach((btn) => {
        if (!btn.classList.contains("collapsed")) {
          btn.style.backgroundColor =
            window.activeThemeConfig.accordionActiveBg;
          btn.style.color = window.activeThemeConfig.accordionActiveText;
        } else {
          btn.style.backgroundColor = "var(--card-bg)";
          btn.style.color = "var(--text-main)";
        }
      });
    }, 150);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  buildThemeDropdown();
  const savedTheme = localStorage.getItem("preferredTheme") || "cyberpunk";
  applyTheme(savedTheme);
});
