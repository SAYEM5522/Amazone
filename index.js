import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,

  document.querySelector("#root")
);
