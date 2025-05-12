import MainButton from "../common/MainButton";

const Privadas_por = () => {

  return (
    <section className="bg-neutral-900 text-white px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
            Landing page profesional para clínicas <br />
            privadas por solo{" "}
            <span className="relative inline-block text-center w-20 text-cyan-500">
              79€
              <div className="my-4">
                <svg className="underline-svg" viewBox="0 0 300 60" preserveAspectRatio="none">
                  <path
                    className="underline-path upper"
                    d="M10,30 Q150,10 290,30"
                  />
                  <path
                    className="underline-path lower"
                    d="M10,45 Q150,20 290,50"
                  />
                </svg>
              </div>
            </span>

          </h2>

          <p className="text-sm sm:text-base text-neutral-300 mt-4 max-w-5xl">
            Optimizada para captar pacientes y sentar las bases para escalar con IA. Incluye diseño profesional, dominio personalizado, integración con WhatsApp y formulario inteligente.
          </p>
        </div>
        <div className="flex-shrink-0">
          <MainButton text="QUIERO MI LANDING POR 79 €" />
        </div>
      </div>
    </section>
  );
};

export default Privadas_por;
