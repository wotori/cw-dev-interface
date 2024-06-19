import { createRoot } from "react-dom/client";
import App from "./App";
import chainInfo from "./wallets/keplr/cahiInfo";
import { SigningCosmWasmProvider } from "./wallets/keplr";

document.body.innerHTML = '<div style="height: 100%" id="app"></div>';
const root = createRoot(document.getElementById("app"));
root.render(
  <>
    <SigningCosmWasmProvider networkConfig={chainInfo}>
      <App />
    </SigningCosmWasmProvider>
  </>
);
