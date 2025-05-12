import { useState, useEffect } from 'react';
import ImonialCard from './ImonialSlider';
import ArticleAvatar from '../../../../assets/articel_avatar.jpg';
import nextArrow from '../../../../assets/icons/arrow2.svg';

const cardes = [
  {
    name: 'Camila Torres',
    image: ArticleAvatar,
    text: 'Me encantó. Detectó 4 suscripciones que ni sabía que seguían activas. En 10 minutos cancelé todo lo que no usaba.',
    star: 5,
  },
  {
    name: 'Felipe Rojas',
    image: ArticleAvatar,
    text: 'Muy útil para ordenar mis gastos, aunque me gustaría que se pudiera cancelar todo directamente desde la página.',
    star: 4,
  },
  {
    name: 'Valentina Pérez',
    image: ArticleAvatar,
    text: 'Por fin una plataforma que te avisa antes de que te cobren. Ya no me llegan sorpresas el 1º de cada mes.',
    star: 5,
  },
  {
    name: 'Andrés González',
    image: ArticleAvatar,
    text: 'Soy emprendedor y esto me ayudó a separar los gastos de mi negocio y los personales. Increíblemente útil.',
    star: 5,
  },
  {
    name: 'Sofía Ramírez',
    image: ArticleAvatar,
    text: 'Me gustó mucho. El panel es claro, fácil de usar. Le pondría 5 estrellas si incluyera tarjeta virtual para pagos.',
    star: 4,
  },
  {
    name: 'Diego Castillo',
    image: ArticleAvatar,
    text: 'Vi un TikTok, me metí de curiosidad y terminé cancelando 3 apps que me cobraban hace meses. Recomendado.',
    star: 5,
  },
  {
    name: 'Carla Espinoza',
    image: ArticleAvatar,
    text: 'Buena plataforma, aunque al principio me costó entender cómo conectar mi cuenta. Después todo fluyó.',
    star: 4,
  },
  {
    name: 'Ignacio Valdés',
    image: ArticleAvatar,
    text: 'Lo que más me gustó fue poder armar presupuestos por categoría. Me ayudó a darme cuenta que gastaba más en apps que en comida.',
    star: 5,
  },
  {
    name: 'Francisca León',
    image: ArticleAvatar,
    text: 'Fácil de usar, con diseño bonito y claro. Ideal para quienes no llevamos planilla de Excel.',
    star: 5,
  },
  {
    name: 'Tomás Herrera',
    image: ArticleAvatar,
    text: 'Gestiona es como tener un radar financiero. Te muestra todo lo que no ves. Lo recomiendo a todos mis amigos.',
    star: 5,
  },
];

const ImonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(() => {
    const width = window.innerWidth;
    return width < 376 ? 266 : 416;
  });

  const getCardWidth = () => {
    const width = window.innerWidth;
    if (width < 376) return 266;
    return 416;
  }

  const handleNext = () => {
    if (currentIndex < cardes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // loop back to start
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="px-4 pr-12 py-8 sm:py-16 max-w-6xl mx-auto bg-secondary rounded-tr-[70px] rounded-bl-[70px]">
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-ct-grey font-bold mb-4">Miles de personas ya están<br className='hidden sm:block'/> ahorrando con Gestiona</h2>
      </div>
      <p className="text-primary text-lg sm:text-xl max-w-[500px] text-center mx-auto p-1 sm:p-3 bg-[#AEE8FF] font-semibold mb-16 md:text-2xl">¡Comienza hoy totalmente gratis!</p>
      <div className=" relative w-full max-w-[52rem] mx-auto mr-40">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {cardes.map((t, idx) => (
              <ImonialCard key={idx} {...t} />
            ))}
          </div>
        </div>
        <div className=" absolute -right-14 top-[195px] -translate-y-full">
          <button
            onClick={handleNext}
            className=" rounded-full px-3 py-2 transition"
          > <img src={nextArrow} alt="nextArrow" className='w-10 hover:animate-pulse' /></button>
        </div>
      </div>
    </section>
  );
};

export default ImonialSlider;