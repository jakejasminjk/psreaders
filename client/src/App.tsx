import React from "react";
import Example from "./components/Example";
import "./style.css";

const App = () => {
  return (
    <div className="container udemy-container bg-gray-700">
      <h1 className="text-3xl font-bold">PS Reader</h1>
      <div className="grid-cols-3"></div>
      <Example />
    </div>
  );
};

export default App;