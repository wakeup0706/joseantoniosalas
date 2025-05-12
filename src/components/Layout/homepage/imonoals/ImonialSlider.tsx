interface TestimonialCardProps {
  image: string;
  name: string;
  text: string;
  star: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, name, text, star }) => {
  const maxStars = 5;

  return (
    <div className="max-w-[250px] sm:min-w-[400px] sm:max-w-[400px] h-80 flex-shrink-0 rounded-2xl py-6 px-5 sm:px-10 shadow-lg bg-white mx-2 transition-transform duration-500 ease-in-out">
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover" />
        <div className="text-right flex-1 pr-0">
          <h3 className="font-bold text-sm sm:text-lg">{name}</h3>
          <div className="flex justify-end gap-0 sm:gap-1 text-2xl leading-none">
            {[...Array(maxStars)].map((_, index) => (
              <span key={index} className={index < star ? "text-yellow-400" : "text-gray-400"}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
};

export default TestimonialCard;