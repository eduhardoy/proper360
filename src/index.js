import React from "react";
import { render } from "react-dom";
import GlobalStyles from "./globalStyles";

//REDUX
import { Provider } from "react-redux";
import store from "./store";

import Routes from "./routes";

const App = () => (
  <div>
    <GlobalStyles />
    <Routes />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
