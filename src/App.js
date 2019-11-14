import React from "react";
import logo from "./logo.svg";
// import "./App.css";

import Header from "./components/Header";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Routes />
    </div>
  );
}

export default App;
