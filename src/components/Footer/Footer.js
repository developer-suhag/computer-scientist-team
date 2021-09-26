import React from "react";
import "./Footer.css";

const Footer = () => {
  // footer section
  return (
    <div className="footer">
      <p className="text-center p-0 m-0">
        &copy; 2021 || Design and Develop by{" "}
        <b>
          {" "}
          <a
            style={{ color: "#fca311" }}
            href="https://github.com/developer-suhag"
            target="_blank"
            rel="noreferrer"
          >
            Suhag
          </a>{" "}
        </b>
      </p>
    </div>
  );
};

export default Footer;
