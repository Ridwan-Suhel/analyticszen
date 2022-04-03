import { useNavigate } from "react-router-dom";
import useReviewHook from "../../Hook/useReviewHook";
import ReviewCard from "../ReviewCard/ReviewCard";
import imageGlass from "../../assets/image/glasses.png";

const Home = () => {
  const [reviews, setReviews] = useReviewHook();

  let homeReviews = reviews.slice(0, 3);

  const navigate = useNavigate();

  return (
    <section>
      <div className="container mx-auto ">
        <div className="row flex gap-5 items-center h-[500px]">
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
            <img src={imageGlass} alt="glassImage" />
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
            <button
              onClick={() => navigate("/reviews")}
              className="py-1 px-8 bg-indigo-600 text-white text-lg rounded-md"
            >
              See All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
