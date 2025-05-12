import List from "./List";
import Lupa from "../../../assets/icons/Lupa.png";
import Notificación from "../../../assets/icons/Notificación.png";
import Alcancia from "../../../assets/icons/Alcancia.png";
const Gestiona = () => {
  return (
    <section className="pb-2 sm:pb-8 pt-14 sm:pb-15 sm:pt-24 max-w-[800px] px-8 mx-auto">
      <div className="text-center pb-2 sm:pb-7">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary max-w-4xl mx-auto font-bold mb-4">Gestiona.io detecta, organiza y optimiza tus gastos recurrentes automáticamente.</h2>
      </div>
      <List img={Lupa} text="Detecta automáticamente tus suscripciones activas."/>
      <List img={Notificación} text="Recibe alertas antes del vencimiento de tus suscripciones."/>
      <List img={Alcancia} text="Organiza tus gastos y ahorra sin esfuerzo."/>
    </section>
  );
};

export default Gestiona;