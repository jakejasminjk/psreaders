import React from "react";
import "./style.css";
import { Typography } from "@material-tailwind/react";
import TeachingStyle from "./components/TeachingStyle";
import Summary from "./components/Summary";
import SPEED from "./components/SPEED";
import Reviews from "./components/Reviews";
import { RootProvider } from "./context/RootProvider";
import AlternativeTitle from "./components/AlternativeTitle";

const App = () => {
  return (
    <RootProvider>
      <div className="container udemy-container">
        <div className="flex items-center gap-5">
          <Typography variant="h2">PS Reader</Typography>
          <TeachingStyle />
        </div>
        <AlternativeTitle />
        <div className="grid grid-cols-3 gap-3">
          <Summary />
          <SPEED />
          <Reviews />
        </div>
      </div>
    </RootProvider>
  );
};

export default App;
