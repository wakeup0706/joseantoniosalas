const List = ({ title, items } : {title: String, items: any[]}) => {
  return (
    <div>
      <h3 className="font-bold text-xl mb-4 text-center md:text-end">{title}</h3>
      <ul className="space-y-2 text-lg text-center md:text-end">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} className={`hover:underline ${item.bold ? 'font-semibold' : ''}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;