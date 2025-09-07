import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// Styles
import "./index.css";
// Fonts
import "@fontsource/great-vibes";
import "@fontsource/space-grotesk";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
