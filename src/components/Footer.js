import React from "react";

function Footer() {
  return (
    <div className="bg-secondary text-center text-white fixed-bottom mt-2">
      <p className="py-4">
        Built with{" "}
        <span>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-heart-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </span>{" "}
        - &copy; SAMY HENDEL 2020
      </p>
    </div>
  );
}

export default Footer;
