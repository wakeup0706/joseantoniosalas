const transactions = [
  { name: "Ingresos", currency: "MXN", Spent: "1.250", Remaining: "3.250", persentage: "25" },
  { name: "Servicios y Suscripciones", currency: "Streaming", Spent: ".1250", Remaining: "3.250", persentage: "25" },
];

  const MonthTable  = () => {
    return (
      <div className="px-4 sm:px-0 mt-5">
        <div className="rounded-2xl bg-secondary w-full overflow-hidden">
          <div className="bg-ct-grey py-3 text-white text-xl font-bold pl-8">Presupuesto Abril</div>
          <div className="w-full text-left text-sm p-4">
            <div className="text-ct-grey font-semibold border-b-2 border-gray-500 grid grid-cols-[3fr_2fr_2fr_2fr_1fr]">
              <div className="py-2 pl-4">Nombre</div>
              <div className="py-2">Moneda</div>
              <div className="py-2">Gastado</div>
              <div className="py-2">Restante</div>
              <div className="py-2">%</div>
            </div>

            {
              transactions.map((tx, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <div  className="bg-white rounded-full grid grid-cols-[3fr_2fr_2fr_2fr_1fr] my-3 items-center flex-1">
                    <div className="py-1.5 min-w-32 pl-4">{tx.name}</div>
                    <div>{tx.currency}</div>
                    <div>${tx.Spent}</div>
                    <div>${tx.Remaining}</div>
                    <div>{tx.persentage}%</div>
                  </div>
              </div>
            ))}
          </div>
          </div>
        </div>
    );
  };

  export default MonthTable;