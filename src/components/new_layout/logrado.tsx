import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import man1 from "../../assets/new/avatar/9.jpg";
import man2 from "../../assets/new/avatar/14.jpg";
import man3 from "../../assets/new/avatar/15.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

interface Testimonial {
  id: number;
  name: string;
  clinic: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Javier Méndez",
    clinic: "CLÍNICA DENTAL SONRISA PERFECTA",
    image: man1,
    text: "¡Increíble! En solo 60 días, pasamos de recibir 5 consultas diarias a 22. La combinación de la nueva landing page y el chatbot con IA filtró pacientes realmente interesados. Ahora nuestra agenda está siempre llena.",
  },
  {
    id: 2,
    name: "Dra. Laura Rivas",
    clinic: "MEDESTHETIC CLINIC",
    image: man2,
    text: "Trabajar con Luxen Agency fue la mejor decisión. Con su estrategia de automatizaciones y Google Ads, aumentamos las reservas en un 280%. De 8 pacientes semanales a ¡30! Y lo mejor: con mayor retención.",
  },
  {
    id: 3,
    name: "Carlos Herrera",
    clinic: "CENTRO DE FISIOTERAPIA AVANZADA",
    image: man3,
    text: "Los resultados hablan solos: de 2 a 9 reservas diarias en menos de 3 meses. La landing page optimizada y las campañas locales nos posicionaron como líderes en nuestra zona. ¡Inversión recuperada al 100%!",
  },
  {
    id: 4,
    name: "Dr. Javier Méndez",
    clinic: "CLÍNICA ESTÉTICA MODERNA",
    image: man1,
    text: "¡Increíble! En solo 60 días, pasamos de recibir 5 consultas diarias a 22. La combinación de la nueva landing page y el chatbot con IA filtró pacientes realmente interesados. Ahora nuestra agenda está siempre llena.",
  },
  {
    id: 5,
    name: "Dr. Luis Ortega",
    clinic: "CLÍNICA VITAL",
    image: man2,
    text: "Trabajar con Luxen Agency fue la mejor decisión. Con su estrategia de automatizaciones y Google Ads, aumentamos las reservas en un 280%. De 8 pacientes semanales a ¡30! Y lo mejor: con mayor retención.",
  },
  {
    id: 6,
    name: "Dra. Sofía Gómez",
    clinic: "NUTRISALUD",
    image: man3,
    text: "Los resultados hablan solos: de 2 a 9 reservas diarias en menos de 3 meses. La landing page optimizada y las campañas locales nos posicionaron como líderes en nuestra zona. ¡Inversión recuperada al 100%!",
  },
];

export default function Logrado() {

  return (
    <div className="w-full overflow-hidden bg-white py-32">
      <div className="text-center">
        <p className="text-[#D4AF37]">CASOS DE EXITO</p>
        <p className="my-6 text-4xl font-bold">Lo que hemos logrado</p>
        <p>Creamos una landing optimizada, activamos automatizaciones y chatbot con IA.</p>
      </div>
      <div className="parent mt-20 max-w-7xl mx-auto px-12">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          arrows={false}
          itemClass="px-[5px] flex"
          containerClass="pb-4"
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {testimonials.map((item, index) => {
            return (
              <div
              key={item.id}
              className="flex-1 min-w-0 bg-[#F3F4FE] h-full p-8 shadow-md text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 mb-4 text-sm">{item.text}</p>
              <p className="text-yellow-600 font-bold">{item.name}</p>
              <p className="text-sm italic text-gray-500">{item.clinic}</p>
            </div>
            );
          })}
        </Carousel>
    </div>
    </div>
  );
}
