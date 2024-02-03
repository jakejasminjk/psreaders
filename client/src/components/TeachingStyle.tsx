import { Typography } from "@material-tailwind/react";
import React from "react";
import TeachingStyleChip from "./TeachingStyleChip";

const TeachingStyle = () => {
  const teachingStyles = ["Blue", "Red", "Green"];

  return (
    <div className="flex flex-row gap-2">
      <Typography variant="lead">Teaching Style:</Typography>
      {teachingStyles.map((val) => (
        <TeachingStyleChip value={val} color="teal" />
      ))}
    </div>
  );
};

export default TeachingStyle;
