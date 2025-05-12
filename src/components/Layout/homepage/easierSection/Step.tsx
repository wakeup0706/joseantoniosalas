const Step = ({ title, description, href_url }:{title: string, description:string, href_url:string}) => {
  return (
      <div className="text-left mb-10 sm:mb-16">
        <h3 className="text-primary font-bold text-base mb-2 sm:mb-0 sm:text-xl">{title}</h3>
        <p className="text-ct-grey text-xs sm:text-sm mb-1 sm:mb-3">{description}</p>
        <a href={href_url} className="text-primary font-semibold text-sm underline">Más información</a>
      </div>
  );
};

export default Step;


