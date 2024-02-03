import React from "react";
import Example from "./components/Example";
import "./style.css";
import { Typography } from "@material-tailwind/react";
import TeachingStyle from "./components/TeachingStyle";

const App = () => {
  return (
    <div className="container udemy-container">
      <div className="flex items-center gap-5">
        <Typography variant="h2">PS Reader</Typography>
        <TeachingStyle />
      </div>
      <div className="grid grid-cols-3">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <Example />
    </div>
  );
};

export default App;
