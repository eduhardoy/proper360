import React from "react";
import { render } from "react-dom";
import { GlobalStyle } from "./globalStyles";
import ReactGA from "react-ga";

//REDUX
import { Provider } from "react-redux";
import store from "./store";

import Routes from "./routes";

const App = () => {
  React.useEffect(() => {
    ReactGA.initialize('G-TQNB5J3LQ0')
    ReactGA.pageview('/')
  }, [])

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
