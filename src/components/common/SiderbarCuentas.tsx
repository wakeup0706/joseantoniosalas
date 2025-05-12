const SiderbarCuentas = ({cuentas}:{cuentas:any[]}) => {
  return (
    <div className='bg-transparent px-4'>
      <div className='text-white items-center justify-between flex pt-3 border-b-[1px]'>
        <span className='font-medium'>Cuenta</span>
        <span className='font-medium'>Saldo</span>
      </div>
      {cuentas.map(( val, index ) => (
        <div className='text-white items-center justify-between flex pt-3' key={index}>
          <span className="font-light">{val.cuenta}</span>
          <span className="font-light">{val.Saldo}</span>
        </div>
      ))}
    </div>
  );
};

export default SiderbarCuentas;