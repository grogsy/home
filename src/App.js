import React from "react";
import logo from "./logo.svg";
// import "./App.css";

import Header from "./components/header";
import Landing from "./components/Landing";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
