// components/GradientButton.tsx
import React from "react";

type MainButtonProps = {
  text: string;
  textColor: string;
  onClick?: () => void;
  className?: string;
};

const MainButton: React.FC<MainButtonProps> = ({ text, textColor, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-gradient-to-br from-cyan-400 to-yellow-500
        hover:from-yellow-500 hover:to-cyan-400
        text-${textColor} font-semibold px-4 md:px-6 py-2 md:py-3
        transition-all duration-300
        shadow-md hover:shadow-lg text-sm md:text-base
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default MainButton;
