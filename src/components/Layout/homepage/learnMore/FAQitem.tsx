import { useState } from 'react';
import ArrowDown from "../../../../assets/icons/arrow1.svg";
import ArrowUp from "../../../../assets/icons/arrow3.svg";

const FAQItem = ({ question, answer } : { question:string, answer:string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 rounded-lg overflow-hidden">
      <button
      data-collapse-target="collapse"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-2 px-8 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="text-base sm:text-lg font-bold text-ct-grey">{question}</span>
        { <img src={isOpen ? ArrowUp : ArrowDown} alt="" className='w-8 hover:animate-pulse' /> }
      </button>
      {isOpen && (
        <div className="py-4 px-8 bg-gray-100 text-ct-grey">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;