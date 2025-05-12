const HelpButton = ({title, borderColor, textColor, bgColor, otherStyle}:{title:string, borderColor:string, textColor:string, bgColor:string, otherStyle:string}) => {
  return (
    <div className={`relative rounded-full flex justify-center items-center text-${textColor}  text-center overflow-hidden transition-all duration-300 ease-in-out transform bg-${bgColor} border-2 border-${borderColor} cursor-pointer hover:scale-105 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,188,212,0.3)] group1 ${otherStyle}`}>
      {title}
      <span className="absolute inset-0 before-effect" />
    </div>
  );
};

export default HelpButton;