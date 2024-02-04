import React from "react";
import { Typography } from "@material-tailwind/react";

const ParagraphSkeleton = () => {
  return (
    <div className="max-w-full animate-pulse">
      <Typography
        as="div"
        variant="paragraph"
        className="mb-3 h-4 w-9/12 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-3 h-4 w-12/12 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-3 h-4 w-11/12 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-3 h-4 w-8/12 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
    </div>
  );
};

export default ParagraphSkeleton;
