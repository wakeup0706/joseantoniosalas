import FAQItem from './FAQitem';
const FAQs = [
  {
    question: "¿Qué es Gestiona.io?",
    answer: "Gestiona.io es una plataforma que te permite detectar, entender y administrar todas tus suscripciones activas. Puedes conectar tu banco (vía Belvo) o tu cuenta Gmail para que la plataforma identifique automáticamente los cobros recurrentes y te muestre toda la información en un panel claro y fácil de usar."
  },
  {
    question: "¿Es seguro conectar mi banco?",
    answer: "Sí. Utilizamos integraciones seguras mediante Belvo. Nunca vemos tus contraseñas ni almacenamos información sensible. Todo el acceso es autorizado por ti y puedes revocarlo cuando quieras."
  },
  {
    question: "¿Cuáles suscripciones puede detectar Gestiona.io?",
    answer: "Detectamos servicios como Netflix, Spotify, Amazon, Disney+, Claro, seguros, apps móviles, Rappi y muchos más. También identificamos cobros recurrentes menos conocidos que se repiten en tu estado de cuenta."
  },
  {
    question: "¿Puedo cancelar una suscripción directamente desde Gestiona.io?",
    answer: "Por ahora, te guiamos paso a paso para cancelarla desde el sitio oficial del proveedor. Pronto agregaremos cancelación automatizada para algunos servicios populares."
  },
  {
    question: "¿Gestiona.io es gratis?",
    answer: "Sí. Puedes usar la versión gratuita para detectar suscripciones y acceder al panel básico. También tendremos un plan Pro con funciones avanzadas como presupuestos, reportes mensuales y alertas personalizadas."
  },
  {
    question: "¿Puedo usar Gestiona.io si estoy en Chile?",
    answer: "Sí. En Chile, Gestiona.io funciona conectando tu cuenta Gmail para detectar suscripciones desde correos electrónicos. Estamos trabajando para expandir otras integraciones."
  },
  {
    question: "¿Tienen acceso a mi dinero o pueden hacer cobros sin permiso?",
    answer: "No. Gestiona.io solo tiene acceso de lectura a tus movimientos bancarios (o correos), siempre con tu autorización. Nunca podemos mover dinero ni realizar pagos por ti."
  },
  {
    question: "¿Qué tan frecuente se actualiza la información?",
    answer: "Cada vez que ingresas, sincronizamos los datos para mostrar la información más actualizada. Además, puedes recibir alertas programadas antes de cobros importantes."
  },
  {
    question: "¿Qué hago si detectaron una suscripción que ya cancelé?",
    answer: "Puedes marcarla como “Cancelada” o “No es suscripción” directamente desde el panel. Esto nos ayuda a mejorar la precisión y tu experiencia."
  },
  {
    question: "¿Puedo confiar en que mis datos están protegidos?",
    answer: "Sí. Usamos cifrado de extremo a extremo, tokens de acceso temporales, y nunca compartimos tu información con terceros. La privacidad es nuestra prioridad."
  },
  {
    question: "¿En qué países está disponible Gestiona.io?",
    answer: "Absolutamente.\nSeguimos estándares internacionales de seguridad,\ncifrado de extremo a extremo\ny no compartimos tu información con terceros."
  }
]
const LearnMore = () => {
  return (
    <section className="px-4 py-16 max-w-4xl mx-auto rounded-tr-[70px] rounded-bl-[70px]">
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl text-ct-grey font-bold mb-4">Conoce más sobre nosotros</h2>
      </div>
      <p className="text-primary text-xl font-semibold mt-10 sm:mt-16 mb-6 md:text-2xl text-center">
        Preguntas Frecuentes
      </p>
      <div className="max-w-6xl mx-auto">
        {
        FAQs.map((con, index)=>(
          <FAQItem
            key= {index}
            question={con.question}
            answer={con.answer}
          />
        ))}
      </div>
    </section>
  );
};
export default LearnMore;