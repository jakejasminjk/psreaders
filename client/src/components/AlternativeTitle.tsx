import { Typography } from "@material-tailwind/react";
import React from "react";
import { useRoot } from "../context/RootProvider";

const AlternativeTitle = () => {
  const { data, loading } = useRoot();

  return (
    <div className="flex items-center gap-2 py-2">
      <Typography variant="paragraph">Alternative Title:</Typography>
      {loading ? (
        <div className="max-w-full animate-pulse w-32">
          <Typography
            as="div"
            variant="paragraph"
            className="h-5 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        </div>
      ) : (
        <Typography variant="small" className="my-0">
          {data["Course Title"] || "--"}
        </Typography>
      )}
    </div>
  );
};

export default AlternativeTitle;
