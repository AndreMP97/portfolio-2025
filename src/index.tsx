import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Styles
import "./index.css";
// Fonts
import "@fontsource/great-vibes";
import "@fontsource/space-grotesk";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
