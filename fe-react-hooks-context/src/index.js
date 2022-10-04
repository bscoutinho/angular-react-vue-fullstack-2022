import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { TutorialsContextProvider } from './context/TutorialsContext'

ReactDOM.render(
  <BrowserRouter>
    <TutorialsContextProvider>
        <App />
    </TutorialsContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();