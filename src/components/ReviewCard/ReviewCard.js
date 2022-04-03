import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewCard = (props) => {
  const { name, review, rating, img } = props.review;
  const ratingStar = parseInt(rating);
  let star;
  if (ratingStar > 0) {
    star = <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>;
  }
  if (ratingStar > 1) {
    star = (
      <div>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </div>
    );
  }
  if (ratingStar > 2) {
    star = (
      <div>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </div>
    );
  }
  if (ratingStar > 3) {
    star = (
      <div>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </div>
    );
  }
  if (ratingStar > 4) {
    star = (
      <div>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{" "}
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </div>
    );
  }
  return (
    <div className="bg-slate-200 p-3 rounded-md text-center">
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
      <div className="text-yellow-500">{star}</div>
    </div>
  );
};

export default ReviewCard;
