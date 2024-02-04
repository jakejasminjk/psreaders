import React from "react";
import { Typography, Avatar, Rating } from "@material-tailwind/react";

const data = {
  name: "Jerry",
  rating: 4,
  comment: "This course was great!",
  role: "Lead engineer",
};

const Reviews = () => {
  return (
    <div className="px-8 text-center flex flex-col items-center justify-center">
      <Typography
        variant="small"
        color="blue-gray"
        className="mb-6 font-medium"
      >
        &quot;{data.comment}&quot;
      </Typography>
      <Avatar
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image"
        size="sm"
        withBorder={true}
        className="p-0.5"
      />
      <Typography variant="small" className="mt-4">
        {data.name}
      </Typography>
      <Typography variant="paragraph" color="gray" className="mb-4 font-normal">
        {data.role}
      </Typography>
      <Rating value={data.rating} readonly />
    </div>
  );
};

export default Reviews;
