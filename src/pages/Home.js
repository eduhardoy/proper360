import React from "react";

const Home = () => {
  return (
    <div>
      <h1>HOLAA</h1>
      <app></app>
    </div>
  );
};

export default Home;

const app1 = ({ children }) => <div>{children}</div>;

const app2 = () => <h1>app2</h1>;

const app = () => (
  <app1>
    <app2></app2>
  </app1>
);
