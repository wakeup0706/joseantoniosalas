import Medico from "../../assets/new/Medico.jpg"
import MainButton from "../common/MainButton";

const features = [
  {
    title: "Landing Pages que convierten",
    description:
      "Creamos landings con IA que analizan en tiempo real el comportamiento de tus pacientes potenciales, adaptando mensajes y ofertas para multiplicar por 3 tus conversiones.",
    bgColor: "bg-cyan-500",
    textColor: "text-white",
  },
  {
    title: "Automatización Inteligente + Chatbots 24/7",
    description:
      "Nuestros chatbots con IA no solo responden dudas: agendan citas, califican leads y reducen un 60% las pérdidas de pacientes fuera de horario.",
    bgColor: "bg-gray-100",
    textColor: "text-yellow-600",
  },
  {
    title: "Resultados escalables (y medibles)",
    description:
      "Olvídate de campañas genéricas. Usamos data de tu mercado para atraer pacientes de alto valor y optimizar cada euro invertido.",
    bgColor: "bg-gray-100",
    textColor: "text-yellow-600",
  },
  {
    title: "Expertos en Sector Salud",
    description:
      "Conocemos los desafíos únicos de las clínicas: regulaciones, estacionalidad y competencia local. Tu éxito es nuestro caso de estudio.",
    bgColor: "bg-cyan-500",
    textColor: "text-white",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative md:min-h-screen text-white p-3">
      <div
        className="-z-10 absolute inset-0 bg-cover bg-center brightness-[0.5]"
        style={{
          backgroundImage: `url(${Medico})`,
        }}
      ></div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center pt-20 md:pt-44">
        <div className="text-center md:text-start">
          <p className="text-sm font-medium tracking-widest uppercase mb-2">
            ¿Por qué elegir Luxen Agency?
          </p>
          <div className="my-8">
            <div className="border-t-[0.5px] border-gray-400 max-w-32 mx-auto md:mx-1">
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            ¿Por qué el 92% de las clínicas que trabajan con nosotros superan
            sus metas?
          </h2>
          <p className="text-gray-300 mb-6">
            No somos una agencia más. Somos tu equipo de crecimiento con
            tecnología diseñada exclusivamente para clínicas privadas.
          </p>
          <MainButton textColor="white" text="AGENDA UNA DEMOSTRACIÓN PERSONALIZADA" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-6 shadow-md ${feature.bgColor} ${feature.textColor}`}
            >
              <div className="mb-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center p-8 justify-center mr-2">
                  <span className="text-yellow-500 text-4xl font-bold p-10">✔</span>
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className={`text-sm text-${feature.bgColor == 'bg-gray-100' ? "black" : "white" }`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
