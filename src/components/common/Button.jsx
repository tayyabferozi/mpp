import clsx from "clsx";
import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={clsx(
        className,
        "text-[#14142B] h-14 px-5 sm:px-[50px] text-[15px] flex items-center gap-3 rounded-[4px] bg-[linear-gradient(95.47deg,_#DAB807_-0.22%,_#DDBC18_10.66%,_#FFDF3C_26.65%,_#FFDF3C_78.95%,_#E3C21E_93%,_#FBDB3A_97.24%)]"
      )}
    >
      {children}{" "}
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative -top-[2px]"
      >
        <path
          d="M8.71246 0.385753L7.30418 1.79747L12.891 7.38066L0.720999 7.3955L0.723438 9.3955L12.8934 9.38066L7.32025 14.9775L8.73197 16.3857L16.7222 8.37599L8.71246 0.385753Z"
          fill="#14142B"
        />
      </svg>
    </button>
  );
};

export default Button;
