import React from "react";
import "./style.css";
import { Typography } from "@material-tailwind/react";
import TeachingStyle from "./components/TeachingStyle";
import Summary from "./components/Summary";
import SPEED from "./components/SPEED";

const App = () => {
  return (
    <div className="container udemy-container">
      <div className="flex items-center gap-5">
        <Typography variant="h2">PS Reader</Typography>
        <TeachingStyle />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Summary />
        <SPEED />
        <Summary />
      </div>
    </div>
  );
};

export default App;
