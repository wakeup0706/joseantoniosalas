import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Mobile2 from "../../assets/Smartphone2.png";
import { toast } from 'react-toastify';

const TopSection = () => {
  const [email, setEmail] = useState('');
  const [requestLoading, setRequestLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setRequestLoading(true);
      const endpoint = import.meta.env.VITE_SERVER_ENDPOINT;  // Make sure the environment variable is set

      const response = await fetch(`${endpoint}/auth/send/permission`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) throw result;

      toast.success(result.message || 'Permission granted successfully!', {
        position: "top-right"
      });

      // Redirect to the sign-in page
      navigate('/signin'); // This will redirect to the /signin route

    } catch (error: any) {
      setRequestLoading(false);
      toast.error(error.message || "Something went wrong", {
        position: "top-right"
      });
    } finally {
      setRequestLoading(false);
    }
  };

  return (
    <section className="pt-8 sm:pt-16 max-w-6xl px-4 sm:px-8 mx-auto bg-secondary rounded-tl-[70px] rounded-br-[70px]">
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-ct-grey font-bold mb-4">Pronto podrás controlar todas<br className='hidden sm:block'/> tus suscripciones en un solo lugar.</h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 p-6 pb-0 rounded-3xl max-w-4xl mx-auto">
        <div className="flex-1 flex items-center max-w-[300px] justify-center">
          <img
            src={Mobile2}
            alt="App preview"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center lg:text-left">
          <p className="text-primary max-w-[400px] font-semibold mb-6 text-xl sm:text-2xl mx-auto lg:mx-0">
            Gestiona.io detecta, organiza y optimiza tus gastos recurrentes automáticamente.
          </p>
          <p className="text-ct-grey font-semibold text-base sm:text-xl">
            Únete a la lista de espera y entera del lanzamiento
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico*"
              className="max-w-[400px] w-full h-[50px] sm:h-[55px] bg-white rounded-[10px] sm:rounded-[15px] border-none my-[15px] px-4 sm:p-7 text-base sm:text-1xl"
              required
            />
            <button
              type="submit"
              className={`${requestLoading ? "bg-disableColor" : "bg-primary"} relative text-white text-base sm:text-lg font-bold rounded-[27px] sm:rounded-[54px] max-w-[400px] w-full h-[40px] sm:h-[50px] mt-3 sm:mt-[10px]`}
              disabled={requestLoading}
            >
              {requestLoading ? 'Cargando...' : 'Unirme a lista de espera'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
