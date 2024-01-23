import FAQ from "./FAQ";
import { faqsData } from "../data/data.js";

const FAQS = () => {
  const data = faqsData;

  return (
    <div className="faqs-container">
      <h2>Why you chose us?</h2>
      {data.map((item, index) => (
        <FAQ
          key={item.id}
          heading={item.heading}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default FAQS;
