import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increament = () => {
    setCount(count + 1);
    console.log("number is increasing");
  };
  const decreament = () => {
    setCount(count - 1);
    console.log("number is decreasing");
  };
  return [count, increament, decreament];
};

export default useCounter;
