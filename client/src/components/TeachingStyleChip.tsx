import { Chip, Tooltip } from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/chip";
import React from "react";

const determineStyle = (value: string) => {
  const possibleStyles = [
    "Lecturer",
    "Demonstrator",
    "Hybrid",
    "Facilitator",
    "Delegator",
  ];

  for (let style of possibleStyles) {
    if (value.toLowerCase().indexOf(style.toLowerCase()) !== -1) {
      return style;
    }
  }

  return "--";
};

interface chipProp {
  value: string;
  color?: color;
}

const TeachingStyleChip = ({ value, color }: chipProp) => {
  const chipTitle = determineStyle(value);
  return (
    <Tooltip content={value}>
      <Chip className="normal-case" value={chipTitle} color={color} />
    </Tooltip>
  );
};

export default TeachingStyleChip;
