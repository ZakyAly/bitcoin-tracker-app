import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Homepage from "./Pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" component={Homepage} exact />
      </div>
    </BrowserRouter>
  );
};

export default App;
