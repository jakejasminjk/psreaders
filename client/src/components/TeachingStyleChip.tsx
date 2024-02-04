import { Chip } from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/chip";
import React from "react";

interface chipProp {
  value: string;
  color?: color;
}

const TeachingStyleChip = ({ value, color }: chipProp) => {
  return <Chip className="normal-case" value={value} color={color} />;
};

export default TeachingStyleChip;
