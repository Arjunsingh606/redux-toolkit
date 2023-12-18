import React, { useState } from "react";

const Checkbox = () => {
  const [like, setLike] = useState(true);

  const handleChecked = (e) => {
    setLike(e.target.checked);
  };

  return (
    <>
      <label>
        <input type="checkbox" checked={like} onChange={handleChecked} />I liked
        this
      </label>
      <p>you {like ? "liked " : "do'nt like"} this</p>
    </>
  );
};

export default Checkbox;
