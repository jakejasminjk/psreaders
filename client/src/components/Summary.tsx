import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const Summary = () => {
  return (
    <Card className="">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Summary
        </Typography>
        <Typography>
          The instructor discusses the importance of having a standard template
          for defining test cases in software projects. They emphasize...
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default Summary;
