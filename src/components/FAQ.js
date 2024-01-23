import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const FAQ = ({ item, index, isActive, handleToggle }) => {
  return (
    <article className="article-container">
      <div className="article-top">
        <h4>{item.heading}</h4>{" "}
        <div className="">
          <button onClick={() => handleToggle(index)}>
            {isActive ? <BsArrowUp /> : <BsArrowDown />}
          </button>
        </div>
      </div>
      {isActive && <p>{item.description}</p>}
    </article>
  );
};

export default FAQ;
