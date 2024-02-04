import { Chip } from "@material-tailwind/react";
import React from "react";
import { useRoot } from "../context/RootProvider";

const ProsConsChipSection = () => {
  const { data, loading } = useRoot();

  return (
    <div className="grid grid-cols-2 gap-1 mb-4">
      {data["Pros"].map((proValue, idx) => (
        <Chip
          key={`${proValue}-${idx}`}
          variant="ghost"
          color="green"
          size="sm"
          value={proValue}
          icon={
            <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
          }
        />
      ))}
      {data["Cons"].map((conValue, idx) => (
        <Chip
          key={`${conValue}-${idx}`}
          variant="ghost"
          color="red"
          size="sm"
          value={conValue}
          icon={
            <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']" />
          }
        />
      ))}
    </div>
  );
};

export default ProsConsChipSection;
