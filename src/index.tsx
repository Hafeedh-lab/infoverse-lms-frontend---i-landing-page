import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IiiLoginPage } from "./screens/IiiLoginPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <IiiLoginPage />
  </StrictMode>,
);
