import { useState } from "react";

const transactions = [
  { date: "24/04/25", name: "HBO Max", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "Netflix", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "Cafetería", account: "XXXX - 7956", category: "Comidas", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
  { date: "24/04/25", name: "HBO Max", account: "XXXX - 7956", category: "Streaming", amount: "12.990" },
];

const SubscriptionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="px-4 sm:px-0">
      <div className="rounded-2xl bg-secondary w-full overflow-hidden mt-6">
        <div className="bg-ct-grey py-3 text-white text-xl font-bold pl-8">
          Suscripciones
        </div>

        <div className="w-full text-left text-sm p-4 overflow-x-auto">
          <div className="text-ct-grey pl-4 min-w-[450px] font-semibold gap-2 border-b-2 border-gray-500 grid grid-cols-[1fr_2fr_2fr_2fr_1fr] text-[13px]">
            <div className="py-2">Fecha</div>
            <div className="py-2 min-w-16">Nombre</div>
            <div className="py-2">Cuenta</div>
            <div className="py-2">Categoría</div>
            <div className="py-2 text-center">Monto</div>
          </div>

          {currentTransactions.map((tx, index) => (
            <div
              key={index}
              className="bg-white min-w-[450px] w-full rounded-full gap-2 grid grid-cols-[1fr_2fr_2fr_2fr_1fr] my-3 items-center text-[13px] pl-4"
            >
              <div>{tx.date}</div>
              <div>{tx.name}</div>
              <div className="min-w-24">{tx.account}</div>
              <div>{tx.category}</div>
              <div><span className="bg-ct-grey text-white text-center font-bold p-2 w-full rounded-full inline-block">${tx.amount}</span></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`w-8 h-8 rounded-full text-sm font-medium ${
                currentPage === pageNumber
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SubscriptionTable;