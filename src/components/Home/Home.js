import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
const Home = () => {
  let [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  let homeReviews = reviews.slice(0, 3);

  return (
    <section>
      <div className="container mx-auto ">
        <div className="row flex gap-5 items-center h-[85vh]">
          <div className="left-area w-7/12">
            <h1 className="text-6xl font-black text-blue-800">
              Make your life gorgeous with our sefety glasses.
            </h1>
            <p className="text-xl my-7">
              Let us help you to explore your colorful world with our futuristic
              glasses. The modern and AI base glasses.
            </p>
            <button className="py-3 px-7 bg-blue-200 rounded-md text-blue-600 font-medium">
              Live Demo
            </button>
          </div>
          <div className="right-area w-5/12">
            <img
              src="https://templates.envytheme.com/busan/default/assets/img/eye-glass-image/1.png"
              alt="glasses"
            />
          </div>
        </div>

        {/* home area customer review */}
        <div className="row py-5">
          <h2 className="text-center text-3xl font-bold my-10">
            Customer Reviews ({homeReviews.length})
          </h2>
          <div className="wrapper grid grid-cols-3 gap-5">
            {homeReviews.map((review) => (
              <ReviewCard key={review.id} review={review}></ReviewCard>
            ))}
          </div>
          <div className="text-center my-10">
            <button className="py-1 px-8 bg-indigo-600 text-white text-lg rounded-md">
              See All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
