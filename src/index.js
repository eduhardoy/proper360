import React from "react";
import { render } from "react-dom";
import GlobalStyles from "./globalStyles";

import Routes from "./routes";

const App = () => (
  <div>
    <GlobalStyles />
    <Routes />
  </div>
);

render(<App />, document.getElementById("root"));
