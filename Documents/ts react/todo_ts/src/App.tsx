import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./Components/Todos/Todos";

const App: React.FC = () => {
  return (
    <div className="App">
      <Todos />
    </div>
  );
};

export default App;
