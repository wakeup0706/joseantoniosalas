const ProximoCobros_data = [
  { category: "Smartfit", date: "29/04/25", amount: "12.990" },
  { category: "Movistar", date: "29/04/25", amount: "15.990" },
  { category: "Disney", date: "29/04/25", amount: "10.990" },
];

  const ProximoCobros = () => {
    return (
      <div className="rounded-l-2xl bg-secondary w-full overflow-hidden">
        <div className="bg-ct-grey py-3 text-white text-xl font-bold pl-8">Próximos cobros</div>
        <div className="w-full text-left text-sm p-4">
          <div className="text-ct-grey font-semibold border-b-2 border-gray-500 grid grid-flow-col py-2">Siguientes 7 días</div>
          {ProximoCobros_data.map((tx, index)=>(
            <div key={index} className="text-ct-grey font-semibold border-b-2 border-gray-500 pt-3 pb-2">
              <div className="grid justify-between grid-flow-col">
                <span>{tx.category}</span><span>{tx.date}</span>
              </div>
              <div className="grid justify-between grid-flow-col">
                <span> </span><span className="text-primary">${tx.amount}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mx-auto bg-white text-primary font-semibold px-8 py-2 mb-3 border-2 border-white rounded-full hover:bg-secondary transition block">Ver Más</button>
      </div>
    );
  };
  
  export default ProximoCobros;