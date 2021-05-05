import React from "react";
import { render } from "react-dom";
import { GlobalStyle } from "./globalStyles";

//REDUX
import { Provider } from "react-redux";
import store from "./store";

import Routes from "./routes";

const App = () => {

  return (
    <div>
      <GlobalStyle />
      <Routes />
    </div>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
