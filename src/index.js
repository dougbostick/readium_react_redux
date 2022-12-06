import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("app"));

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
