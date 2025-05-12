import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Profile_first from "../../../assets/profile_first.svg";
import Descubre from "../../../assets/descubre.jpg";
import HelpButton from "../../common/HelpButton";

const TopSection = () => {
  const texts = ["Tus suscripciones", "Tus gastos", "Tus cargos", "Tu presupuesto"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [texts]);

  return (
    <section className="bg-primary text-white rounded-xl mt-10 md:mt-24 pb-10 sm:pb-16 py-16 sm:px-6 md:px-12 max-w-full overflow-hidden px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 sm:mb-0">
          <p className="text-[28px] lg:leading-normal sm:text-[30px] font-extrabold mb-6 lg:text-[36px]">
            Descubre, administra y controla<br />
            <AnimatePresence mode="wait">
              <motion.span
                key={texts[currentTextIndex]}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.4 }}
                className=" text-[22px] lg:text-[28px] inline-block bg-[#AEE8FF] text-primary px-3 lg:py-2 sm:py-1 rounded mt-6 min-w-[6ch] text-center"
              >
                {texts[currentTextIndex]}
              </motion.span>
            </AnimatePresence>
          </p>
          <p className="text-base md:text-lg mb-6">
            Conecta tu cuenta bancaria o gmail y deja que Gestiona.io detecte automáticamente
            los servicios que se están cobrando cada mes.
          </p>
          <HelpButton
            title="Empieza gratis"
            textColor="primary"
            bgColor="white"
            borderColor="secondary"
            otherStyle="text-base font-bold w-[170px] h-[40px] sm:w-[170px] sm:h-[50px]"
          />
        </div>

        <div className="w-full md:w-1/2 relative flex justify-center">
          <div className="relative">
            <img
              src={Profile_first}
              alt="Phone and coffee"
              className="rounded-lg max-w-full h-auto"
            />
            <div className="absolute inset-1/2 max-w-md w-full">
              <img src={Descubre} alt="Descubre" className="rounded-br-[80px] -translate-y-1/2 -translate-x-1/2 rounded-tl-[80px] max-w-full h-auto" />
              <div className="absolute -top-40 sm:-top-64 md:-top-52 lg:-top-64 -left-48 md:-left-56 sm:-left-64 lg:-left-64 w-16 h-16 sm:w-28 md:w-24 lg:w-28 md:h-24 sm:h-28 lg:h-28 border-[15px] sm:border-[22px] border-white rounded-full translate-x-6 translate-y-6"></div>
              <div className="absolute -bottom-28 sm:-bottom-48 left-16 sm:left-28 w-16 h-16 border-[14px] border-white rounded-full translate-x-6 translate-y-6"></div>
              <div className="absolute -bottom-32 left-44 w-28 h-28 border-[22px] border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;