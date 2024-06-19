import { createRoot } from "react-dom/client";
import App from "./App";

document.body.innerHTML = '<div style="height: 100%" id="app"></div>';
const root = createRoot(document.getElementById("app"));
root.render(
  <>
    <App />
  </>
);
