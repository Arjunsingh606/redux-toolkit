import React, { useRef } from "react";

const UseRef = () => {
  const logo = useRef(null);
  const title = useRef(null);

  const handleChange = () => {
    logo.current.style.transform = "rotate(150deg)";
  };
  const handleButton = () => {
    title.current.style.backgroundColor = "red";
  };

  return (
    <>
      <img src="logo192.png" ref={logo} onClick={handleChange} alt="" />
      <button ref={title} onClick={handleButton}>
        {" "}
        click me
      </button>
    </>
  );
};

export default UseRef;
