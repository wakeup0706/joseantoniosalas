const List = ({img ,text}:{img:string, text:string}) => {
  return (
      <div className="text-center my-5 sm:my-8 flex sm:items-center max-w-[800px] mx-auto gap-4">
        <div className="w-10 sm:w-14 h-10 sm:min-w-14 min-w-10 sm:h-14 p-3 rounded-xl bg-primary"><img src={img} alt="img" className="w-full"/></div>
        <h2 className="sm:text-xl md:text-xl lg:text-[22px] text-ct-grey font-bold">{text}</h2>
      </div>
  );
};

export default List;