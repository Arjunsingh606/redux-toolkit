import React from "react";
import useCounter from "../Hooks/customHook/useCounter";

const Counter = () => {

    const [count, increament , decreament] = useCounter()
  return (
    <>
      <div>Counter number {count}</div>
      <br />
      <div>
        <button onClick={increament}>Increament +</button>
        <button onClick={decreament}>decreament -</button>
      </div>
    </>
  );
};

export default Counter;
