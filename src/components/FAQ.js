import { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const FAQ = ({ heading, description }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className="article-container">
      <div className="article-top">
        <h4>{heading}</h4>{" "}
        <div className="">
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? <BsArrowUp /> : <BsArrowDown />}
          </button>
        </div>
      </div>
      {toggle && <p>{description}</p>}
    </article>
  );
};

export default FAQ;
