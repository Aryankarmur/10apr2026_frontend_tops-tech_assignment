import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import App from "./App.jsx";
import { ToggleContextProvider } from "./component/ReactRouter/ToggleContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToggleContextProvider>
      <App />
    </ToggleContextProvider>
  </StrictMode>,
);
