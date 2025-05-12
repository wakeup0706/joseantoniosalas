const transactions = [
  { date: "24/04/25", name: "Netflix", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "Cafetería", category: "Comidas", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", category: "Streaming", amount: "12.990" },
];

  const SubscriptionTable  = () => {
    return (
      <div className="px-4 sm:px-0">
        <div className="rounded-2xl bg-secondary w-full overflow-hidden mt-16">
          <div className="bg-ct-grey py-3 text-white text-xl font-bold pl-8">Suscripciones</div>
          <div className="w-full text-left text-sm p-4">
            <div className="text-ct-grey font-semibold border-b-2 border-gray-500 grid grid-flow-col text-center">
              <div className="py-2">Empresa</div>
              <div className="py-2">Fecha de cobro</div>
              <div className="py-2">Cuenta</div>
              <div className="py-2">Monto</div>
            </div>

            {
              transactions.map((tx, index) => (
                <div className="flex justify-between items-center" key={index} >
                  <div className="bg-white rounded-full grid grid-flow-col text-center my-3 items-center flex-1">
                    <div>{tx.date}</div>
                    <div>{tx.name}</div>
                    <div>{tx.category}</div>
                    <div><span className="bg-ct-grey text-white font-bold py-1.5 w-full rounded-full inline-block">${tx.amount}</span></div>
                  </div>

                  <span className={`ml-2 text-[20px] font-medium rounded-full border-2 text-primary border-primary px-[3px]`} >+</span>
              </div>
            ))}
          </div>

          <button className="mx-auto bg-primary text-white font-semibold px-8 py-2 mb-3 rounded-full hover:bg-purple-800 transition block">Agregar Suscripción</button>
          </div>
        </div>
    );
  };

  export default SubscriptionTable;