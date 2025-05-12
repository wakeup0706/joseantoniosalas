import Logo from "../../assets/new/logo.webp";
import MainButton from "../common/MainButton";
const Top = () => {
  return (
     <div className="relative min-h-screen text-white">
      <div className="absolute inset-0 overflow-hidden">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
        >
            <source src="https://luxen.joseantoniosalas.com/wp-content/uploads/2025/05/5453379-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="border-b-[0.5px] border-gray-600  p-3 md:p-5">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <img src={Logo} alt="Luxen Logo" className="w-20" />
            <MainButton text="EMPEZAR" />
          </div>
        </header>
        <main className="flex flex-1 items-center justify-center text-center pb-10">
          <div className="max-w-6xl">
            <p className="text-sm font-medium tracking-widest uppercase mb-2">
              Luxen Agency
            </p>
            <div className="my-8 ">
              <div className="border-t-[0.5px] border-gray-600 max-w-60 mx-auto">
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold leading-tight mb-4">
              Transformamos Clínicas Privadas en Máquinas de Captación de Pacientes.
            </h1>
            <p className="text-sm sm:text-base my-6">
              Landing pages que convierten, tecnología con IA y automatización inteligente para escalar tu clínica.
            </p>
            <MainButton text="AGENDA TU ANÁLISIS GRATUITO" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Top;
