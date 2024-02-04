import { Typography } from "@material-tailwind/react";
import React from "react";
import { useRoot } from "../context/RootProvider";
import TeachingStyleChip from "./TeachingStyleChip";

const TeachingStyle = () => {
  const { data, loading } = useRoot();
  const teachingStyles = data["Teaching Style"] ? [data["Teaching Style"]] : [];

  return (
    <div className="flex flex-row gap-2 items-center">
      <Typography variant="lead">Teaching Style:</Typography>
      {teachingStyles.map((val, idx) => (
        <TeachingStyleChip key={`${val}-${idx}`} value={val} color="teal" />
      ))}
      {loading && (
        <div className="max-w-full animate-pulse">
          <Typography
            as="div"
            variant="h1"
            className="h-7 w-20 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        </div>
      )}
    </div>
  );
};

export default TeachingStyle;
