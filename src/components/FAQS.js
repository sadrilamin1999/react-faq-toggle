import FAQ from "./FAQ";
import { faqsData } from "../data/data.js";
import { useState } from "react";

const FAQS = () => {
  const data = faqsData;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faqs-container">
      <h2>Why you chose us?</h2>
      {data.map((item, index) => (
        <FAQ
          key={item.id}
          item={item}
          index={index}
          activeIndex={activeIndex}
          handleToggle={handleToggle}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
};

export default FAQS;
