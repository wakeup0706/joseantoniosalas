const data = [
  { name: "Ingresos", amount: "1.500.000" },
  { name: "Suscripciones y servicios", amount: "250.00" },
  { name: "Gastos", amount: "12.990" },
];

const SummaryTable = () => {
  return (
    <div className="sm:px-0 px-4">
      <div className="rounded-2xl bg-secondary w-full overflow-hidden mt-12">
        <div className="flex gap-2 p-4 max-w-[400px] mx-auto mt-4">
          <button className="bg-primary py-3 px-3 rounded-full w-full text-white text-[14px] sm:text-[15px] font-bold">
            Histórico
          </button>
          <button className="bg-ct-grey py-3 px-3 rounded-full w-full text-white text-[14px] sm:text-[15px] font-bold hover:bg-secondary-100">
            Este Mes
          </button>
        </div>

        <div className="w-full text-left text-sm p-4">
          {data.map((tx, index) => (
            <div
              key={index}
              className="bg-white rounded-full grid grid-cols-2 text-center my-3 items-center"
            >
              <div className="text-left pl-4">{tx.name}</div>
              <div className="text-center min-w-[200px] max-w-[200px] ml-auto">
                <span className="bg-ct-grey text-white font-bold py-1.5 w-full rounded-full inline-block">
                  ${tx.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryTable;