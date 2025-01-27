import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { GlobalStyled } from "./styles/GlobalStyled";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyled />
    <App />
  </StrictMode>
);
