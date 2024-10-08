import React from "react";
import "./Navbar.css";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="nav-right">
          <ul className="social-media">
            <a
              href="https://github.com/BLAZE7SHADOW/bloomRecorder"
              target="_blank"
            >
              <li>
                <BsGithub />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-govind-rao-138881157/"
              target="_blank"
            >
              <li>
                <AiFillLinkedin />
              </li>
            </a>
            <a href="https://x.com/BLAZE07SHADOW" target="_blank">
              <li>
                <FaTwitterSquare />
              </li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
