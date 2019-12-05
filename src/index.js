import React from "react";
import ReactDOM from "react-dom";
import App from "./view/App";
import { GlobalProvider } from "./state/GlobalContext";
import { SoundProvider } from "./state/SoundContext";

ReactDOM.render(
  <SoundProvider>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </SoundProvider>,
  document.getElementById("root")
);
