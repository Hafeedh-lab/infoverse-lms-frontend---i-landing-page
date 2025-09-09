import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ILandingPage } from "./screens/ILandingPage/ILandingPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ILandingPage />
  </StrictMode>,
);
