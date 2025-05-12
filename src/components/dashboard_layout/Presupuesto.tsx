import VariablePieChart from "./PieChart";

const transactions = [
  { category: "Ingreso", amount: "11.500" },
  { category: "Cuenta y Suscripciones", amount: "1.000" },
  { category: "Auto", amount: "2.000" },
  { category: "Farmacia", amount: "700" },
  { category: "Seguro", amount: "1.200" },
  { category: "Vehículo", amount: "2.500" },
  { category: "Salud", amount: "1.500" },
  { category: "Importe", amount: "600" },
];

  const Presupuesto = () => {
    return (
      <div className="rounded-2xl bg-secondary w-full overflow-hidden">
        <div className="bg-ct-grey py-3 text-white text-xl font-bold pl-8">Recientes</div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <div className="h-full flex flex-col justify-between items-between">
            {transactions.map((tx, index) => (
              <div
                key={index}
                className="bg-white rounded-full flex justify-between items-center my-3 pl-4"
              >
                <div className="text-sm sm:text-base">{tx.category}</div>
                <span className="bg-ct-grey text-white font-bold py-1.5 px-4 text-center rounded-full text-sm sm:text-base max-w-[130px] min-w-[130px]">
                  ${tx.amount}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden h-full flex flex-col">
            <VariablePieChart />
          </div>
        </div>
      </div>
    );
  };

  export default Presupuesto;