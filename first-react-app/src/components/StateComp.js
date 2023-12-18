import React from "react";
import { useState } from "react";

const StateComp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decreament = () => {
    setCount((c) => c - 1);
    console.log("re-render");
  };

  return (
    <>
      <div>
        Count: {count}
        <button onClick={increment}>ncrement</button>
        <button onClick={decreament}>decreament</button>
      </div>
    </>
  );
};

export default StateComp;
