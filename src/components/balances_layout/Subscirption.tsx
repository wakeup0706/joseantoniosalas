import { Plus_white, Visible } from "../icons";

const transactions = [
  { bank: "Banco Santander", account: "CTA XXXX - 7956", balance: "1.350.000" },
  { bank: "Banco Itaú", account: "CTA XXXX - 7956", balance: "750.000" },
  { bank: "Scotiabank", account: "CTA XXXX - 9573", balance: "1.790.000" },
];

  const SubscriptionTable  = () => {
    return (
      <div className="px-4 sm:px-0 mt-4">
        <div className="rounded-2xl bg-secondary w-full overflow-hidden">
          <div className="bg-ct-grey py-3 text-white text-xl font-bold pl-8">Suscripciones</div>
          <div className="w-full text-left text-sm p-4">
            <div className="text-ct-grey font-semibold border-b-2 border-gray-500 grid grid-cols-[3fr_4fr_1fr] pl- pr-20">
              <div className="py-2">Banco</div>
              <div className="py-2">Cuenta o Trajeta</div>
              <div className="py-2">Saldo</div>
            </div>

            {transactions.length > 0 ?
              (transactions.map((tx, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <div className="bg-white rounded-full grid grid-cols-[3fr_3fr_2fr] my-2 items-center flex-1">
                    <div className="pl-4">{tx.bank}</div>
                    <div>{tx.account}</div>
                    <div className=" text-center"><span className="bg-ct-grey text-white font-bold py-1.5 w-full rounded-full inline-block">${tx.balance}</span></div>
                  </div>
                  <span className={`ml-2 text-[20px] font-medium rounded-full border-2 text-primary border-primary px-[3px]`} >+</span>
                  <span className={`ml-2 text-[20px] font-medium rounded-full text-primary px-[3px]`} ><Visible /></span>
                </div>
              ))): (<div className="text-center text-2xl font-semibold my-14">No tiene cuentas registradas en Gestiona.</div>)
            }
          </div>

          <button className="mx-auto bg-primary text-white font-semibold pl-8 pr-3 py-2 mb-3 rounded-full hover:bg-hoverColor transition block"><div className="flex gap-2 justify-between items-center w-72">Agregar Cuenta<Plus_white className="w-6 h-6" /></div></button>
          <button className="mx-auto bg-primary text-white font-semibold pl-8 pr-3 py-2 mb-3 rounded-full hover:bg-hoverColor transition block"><div className="flex gap-2 justify-between items-center w-72">Agregar Tarjeta de Crédito<Plus_white className="w-6 h-6" /></div></button>
          <button className="mx-auto bg-primary text-white font-semibold pl-8 pr-3 py-2 mb-3 rounded-full hover:bg-hoverColor transition block"><div className="flex gap-2 justify-between items-center w-72">Agregar Inversión<Plus_white className="w-6 h-6" /></div></button>
          </div>
        </div>
    );
  };

  export default SubscriptionTable;