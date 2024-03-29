import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useRoot } from "../context/RootProvider";
import { MAX_CHAR_LENGTH } from "../utils/constant";
import ParagraphSkeleton from "./ParagraphSkeleton";

const Summary = () => {
  const { data, loading } = useRoot();
  const [didReadMore, setDidReadMore] = useState(false);

  let displayText = "";
  if (data["Summary Points"]) {
    displayText = data["Summary Points"];
    if (displayText.length > MAX_CHAR_LENGTH && !didReadMore) {
      displayText = `${displayText.slice(0, MAX_CHAR_LENGTH)}...`;
    }
  }

  return (
    <Card>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Summary
        </Typography>
        <Typography aria-label={data["Summary Points"]}>
          {displayText}
        </Typography>
        {loading && <ParagraphSkeleton />}
      </CardBody>
      {displayText.length > MAX_CHAR_LENGTH && (
        <CardFooter className="pt-0">
          <Button
            onClick={() => {
              setDidReadMore((prevBool) => !prevBool);
            }}
          >
            Read More
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default Summary;
