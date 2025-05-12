import Loop from "../../../../assets/loop.png";
import InLoop from "../../../../assets/inloop.png";
import Netflix from "../../../../assets/logos/Netflix.svg";
import Uber from "../../../../assets/logos/Uber.svg";
import Spotify from "../../../../assets/logos/Spotify.svg";
import SmartFit from "../../../../assets/logos/SmartFit.svg";
import WOM from "../../../../assets/logos/Wom.svg";
import MercadoLibre from "../../../../assets/logos/MercadoLibre.svg";
import Step from './Step';
import Step_mark from '../../../../assets/5226951787821528076.jpg';
import RtlSlider from "../../../common/SliderLogos";

const sampleItems = [Netflix, Uber, Spotify, SmartFit, WOM, MercadoLibre, ];

const EasierSection= () => {
  return (
    <section className="py-14 sm:py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-ct-grey mb-4">
          Gestionar tus suscripciones y pagos<br/> ahora es mas fácil
        </h2>
        <p className="text-primary text-xl font-semibold mb-8 sm:mb-16 md:text-2xl">
          Administra, cancela y ahorra
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <div className="flex flex-col space-y-12 w-full md:w-1/2 min-w-[340px] sm:min-w-[490px]">
            <div className="flex gap-6">
              <img src={Step_mark} alt="Step_mark" className="h-[450px]" />
              <div>
                <Step
                title = "Detención automática de suscripciones y cobros"
                description = "Identifica suscripciones y cobros recurrentes con solo conectar tu cuenta bancaria."
                href_url = "#"
                />
                <Step
                title = "Panel de Control claro e intuitivo"
                description = "Todo lo que pagas, en un solo lugar. Administra tus suscripciones y cobros frecuentes fácilmente."
                href_url = "#"
                />
                <Step
                title = "Alertas Personalizadas"
                description = "Recibe notificaciones antes de cada cobro recurrente, administra o cancela aquellos que ya no usas."
                href_url = "#"
                />
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 flex justify-center">
            <img src={InLoop} alt="Netflix" className="absolute max-w-96 h-full" />
            <img src={Loop} alt="Netflix" className="w-96 animate-spin-reverse" />
          </div>
        </div>

        <div className="mt-10 md:mt-3">
          <h3 className="text-primary text-xl sm:text-2xl font-bold mb-6">
            Conoce todas las suscripciones que puedes gestionar
          </h3>
          <div className="mt-5 grayscale -mx-8">
            <RtlSlider items={sampleItems} speed={0.5} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default EasierSection;