import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useRoot } from "../context/RootProvider";
import ParagraphSkeleton from "./ParagraphSkeleton";

const SPEED = () => {
  const { data, loading } = useRoot();
  const [didReadMore, setDidReadMore] = useState(false);

  let displayText = "";
  if (data["How it relates to SPEED"]) {
    displayText = data["How it relates to SPEED"];
    if (displayText.length > 130 && !didReadMore) {
      displayText = `${displayText.slice(0, 130)}...`;
    }
  }

  return (
    <Card className="">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          SPEED
        </Typography>
        <Typography>{displayText || ""}</Typography>
        {loading && <ParagraphSkeleton />}
      </CardBody>
      {displayText.length > 130 && (
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

export default SPEED;
