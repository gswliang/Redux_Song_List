import React from "react";
import ReactDom from "react-dom";
//It's a component that inside react-redux library
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import reducers from "./reducers";

ReactDom.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
