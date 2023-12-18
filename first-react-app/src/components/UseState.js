import React,{useState} from "react";

const UseState = (props) => {
  const [name, setName] = useState("hello");

  const handleName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <input value={name} onChange={handleName} />
      <p>You typed: {name}</p>
    
    </>
  );
};

export default UseState;
