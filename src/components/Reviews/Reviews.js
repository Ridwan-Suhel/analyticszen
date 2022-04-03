import React from "react";
import useReviewHook from "../../Hook/useReviewHook";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useReviewHook();
  return (
    // <div className="wrapper grid grid-cols-3 gap-5">
    //   {homeReviews.map((review) => (
    //     <ReviewCard key={review.id} review={review}></ReviewCard>
    //   ))}
    // </div>
    <div className="container mx-auto">
      <h1 className="text-2xl text-medium text-center my-8">All Reviews</h1>

      <div className="wrapper grid grid-cols-3 gap-5 my-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
