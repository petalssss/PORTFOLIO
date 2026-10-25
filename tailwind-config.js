/* ==========================================================
   tailwind-config.js — theme settings for the Tailwind CDN
   Must load right AFTER the Tailwind script in index.html.
   Edit the colors below to change the look of the whole site.
   ========================================================== */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#0037b0",        // main blue (buttons, highlights)
        background: "#f7f9fb",
        "on-surface": "#0f172a",   // main text color
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      fontFamily: {
        "headline-xl": ["Space Grotesk", "sans-serif"],
        "headline-md": ["Space Grotesk", "sans-serif"],
        "headline-sm": ["Space Grotesk", "sans-serif"],
        "label-sm": ["JetBrains Mono", "monospace"],
        "label-xs": ["JetBrains Mono", "monospace"],
        "body-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
      },
    },
  },
};
