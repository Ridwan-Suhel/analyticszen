import React from "react";
import fourOfour from "../../assets/image/notFound.gif";

const NotFound = () => {
  return (
    <div className="text-center h-screen">
      <h1 className="text-3xl text-bold relative mb-[-30px] mt-8 z-10">
        Oops! Page Not Found.
      </h1>
      <img
        className="w-[500px] mx-auto object-cover z-[-10] mt-[-70px] relative"
        src={fourOfour}
        alt="notfound-img"
      />
    </div>
  );
};

export default NotFound;
