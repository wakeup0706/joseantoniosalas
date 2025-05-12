import PieChart from "./PieChart";

const transactions = [
  { name: "Presupesto Gasto", remaining: "1.050.000"},
  { name: "Gasto Actual", remaining: "$.000"},
  { name: "Restante", remaining: "350.000"},
];


  const BudgetSummary  = () => {
    return (
      <div className="px-4 sm:px-0 mt-5">
        <div className="rounded-2xl bg-secondary w-full overflow-hidden h-full">
          <div className="bg-ct-grey py-3 text-white text-xl font-bold pl-8">Budget Summary</div>
          <PieChart />
          <div className="w-full text-left text-sm p-4">
            <div className="text-ct-grey font-semibold border-b-2 border-gray-500 text-center">
              <div className="pt-2 pl-4 text-2xl">Saldo Restante</div>
            </div>
            {
            transactions.map((tx, index) => (
              <div key={index} className="bg-white rounded-full grid py-2 my-4 items-center grid-cols-[1fr_1fr] text-center">
                <div className="pl-4 font-semibold">{tx.name}</div>
                <div className="pl-4">${tx.remaining}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default BudgetSummary;