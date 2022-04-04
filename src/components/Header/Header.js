import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CustomLink from "../CustomLinks/CustomLink";
import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <header className="md:py-4">
      <nav className="container mx-auto">
        <div
          className="toggle-bar md:hidden m-4"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FontAwesomeIcon
              className="text-2xl"
              icon={faBars}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              className="text-2xl"
              icon={faClose}
            ></FontAwesomeIcon>
          )}
        </div>
        <ul
          className={`text-2xl md:text-lg bg-blue-200  md:bg-transparent md:flex md:gap-5 items-center justify-center ${
            open ? "mb-close" : "mb-open"
          }`}
        >
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
