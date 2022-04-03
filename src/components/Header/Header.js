import React from "react";
import CustomLink from "../CustomLinks/CustomLink";

const Header = () => {
  return (
    <header className="py-4">
      <nav>
        <ul className="flex gap-5 items-center justify-center">
          <li>
            <CustomLink to="/home" className="uppercase">
              Home
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/reviews" className="uppercase">
              Reviews
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/dashboard" className="uppercase">
              Dashboard
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/blogs" className="uppercase">
              Blogs
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/about" className="uppercase">
              About
            </CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
