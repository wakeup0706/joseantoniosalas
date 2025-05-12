import { Plus_white } from "../icons";

const transactions = [
  { category: "Auto", currency: "MXN", spent: "200", remaining: "400", percentage:"33" },
  { category: "Comida", currency: "MXN", spent: "350", remaining: "750", percentage:"50" },
  { category: "Educación", currency: "MXN", spent: "70", remaining: "100", percentage:"70" },
  { category: "Entretenimiento", currency: "MXN", spent: "100", remaining: "300", percentage:"30" },
  { category: "Cuidado Personal", currency: "MXN", spent: "100", remaining: "300", percentage:"30" },
];


  const SpendingBudget  = () => {
    return (
      <div className="px-4 sm:px-0 mt-5">
        <div className="rounded-2xl bg-secondary w-full overflow-hidden">
          <div className="bg-ct-grey py-3 text-white text-xl font-bold pl-8">Presupuesto Abril</div>
          <div className="w-full text-left text-sm p-4">
            <div className="text-ct-grey font-semibold border-b-2 border-gray-500 grid grid-cols-[3fr_2fr_2fr_2fr_1fr]">
              <div className="py-2 pl-4">Categoría</div>
              <div className="py-2">Moneda</div>
              <div className="py-2">Gastado</div>
              <div className="py-2">Restante</div>
              <div className="py-2">%</div>
            </div>

            {
              transactions.map((tx, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <div  className="bg-white rounded-full grid py-1 my-2 items-center grid-cols-[3fr_2fr_2fr_2fr_1fr] flex-1">
                    <div className="pl-4">{tx.category}</div>
                    <div className="pl-4">{tx.currency}</div>
                    <div className="pl-4">${tx.spent}</div>
                    <div className="pl-6">${tx.remaining}</div>
                    <div className="pl-6">{tx.percentage}%</div>
                  </div>
                  <span className={`ml-2 text-[20px] font-medium rounded-full border-2 text-primary border-primary px-[3px]`} >+</span>
              </div>
            ))}
          </div>
          <button className="mx-auto bg-primary text-white font-semibold pl-8 pr-3 py-2 mb-3 rounded-full hover:bg-hoverColor transition block"><div className="flex gap-2 justify-between items-center">Agregar Suscripción<Plus_white className="w-6 h-6" /></div></button>
        </div>
      </div>
    );
  };

  export default SpendingBudget;