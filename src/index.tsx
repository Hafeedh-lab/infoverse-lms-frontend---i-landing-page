import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./screens/Auth/Login";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Login />
  </StrictMode>,
);
