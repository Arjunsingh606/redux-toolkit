import React ,{memo} from "react";

const Memo = () => {

    console.log("hi memo");
  return <div>hello Memoization</div>;
};

export default memo(Memo);


// memo - it used to skip re-rendering of component if its state not change.