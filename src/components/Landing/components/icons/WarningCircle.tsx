import React from "react";

function Icon(props: {
  className: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={props.className}
      fill="currentColor"
    >
      <path d="M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm0 192a88 88 0 1188-88 88.1 88.1 0 01-88 88zm-8-80V80a8 8 0 0116 0v56a8 8 0 01-16 0zm20 36a12 12 0 11-12-12 12 12 0 0112 12z"></path>
    </svg>
  );
}

export default Icon;
