const List = ({ title, items } : {title: String, items: any[]}) => {
  return (
    <div>
      <h3 className="font-bold text-xl mb-1 sm:mb-4">{title}</h3>
      <ul className="space-y-1 sm:space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="pt-2">
            <a href={item.href} className={`hover:underline ${item.bold ? 'font-semibold text-[#AEE8FF]' : ''}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;