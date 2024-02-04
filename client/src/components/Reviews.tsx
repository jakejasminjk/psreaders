import React, { useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import ParagraphSkeleton from "./ParagraphSkeleton";
import ProsConsChipSection from "./ProsConsChipSection";
import { useReviews } from "../context/ReviewsProvider";

const Reviews = () => {
  const { data, loading } = useReviews();
  const [didReadMore, setDidReadMore] = useState(false);

  let displayText = "";
  if (data["Summary"]) {
    displayText = data["Summary"];
    if (displayText.length > 130 && !didReadMore) {
      displayText = `${displayText.slice(0, 130)}...`;
    }
  }

  return (
    <Card color="transparent" shadow={false}>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 -mt-5">
          Reviews Highlights
        </Typography>
        <Typography className="my-0 font-bold">Students say</Typography>
        {loading ? (
          <>
            <ParagraphSkeleton />
            <div className="max-w-full animate-pulse flex gap-1">
              <Typography
                as="div"
                variant="h1"
                className="h-4 w-20 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="h1"
                className="h-4 w-20 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
            </div>
          </>
        ) : (
          <>
            <Typography className="my-0" aria-label={data["Summary"]}>
              {displayText}
            </Typography>
            <Typography variant="small" className="mt-0 mb-2 italic">
              AI-generated from the text of student reviews
            </Typography>
            <ProsConsChipSection />
          </>
        )}
        {!loading && displayText.length > 130 && (
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
      </CardBody>
    </Card>
  );
};

export default Reviews;
