import { Link } from 'react-router-dom';

const FixPagenation = () => {
  return (
    <div className="flex flex-col sm:flex-row max-w-[460px] gap-3 mx-auto justify-between items-center sm:my-12 mt-6 text-center">
      <Link to='/' className="text-primary underline">
        Términos y Condiciones
      </Link>
      <Link to='/' className="text-primary underline">
        Políticas de Privacidad
      </Link>
    </div>
  );
};

export default FixPagenation;