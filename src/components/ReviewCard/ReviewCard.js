import React from "react";

const ReviewCard = (props) => {
  const { name, review, rating, img } = props.review;
  return (
    <div className="bg-slate-200 p-3 rounded text-center">
      <img
        src={img}
        alt="avatar"
        className="w-[50px] h-[50px] rounded-full object-cover mx-auto"
      />
      <h1 className="font-bold text-xl">
        <em>{name}</em>
      </h1>
      <p className="text-xl my-5">
        <em>{review}</em>
      </p>
      <h1>{rating}</h1>
    </div>
  );
};

export default ReviewCard;
