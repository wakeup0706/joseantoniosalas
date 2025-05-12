import List from './List';
import Instagram from '../../../assets/instagram.svg';
import Linkdin from '../../../assets/linkedin.svg';
import Logo_footer from '../../../assets/logo_footer.svg';

const features = [
  { label: "Administrar suscripciones", href: "#" },
  { label: "Metas financieras", href: "#" },
  { label: "Perspectivas sobre el gasto", href: "#" },
  { label: "Negociación de facturas", href: "#" },
  { label: "Presupuesto", href: "#" },
]
const about = [
  { label: "Sobre nosotros", href: "#" },
  { label: "Actualizaciones de la empresa", href: "#" },
]
const support = [
  { label: "Seguridad", href: "#" },
  { label: "Contáctanos", href: "#" },
  { label: "Centro de ayuda", href: "#" },
  { label: "Afiliados", href: "#" },
  { label: "Condiciones de servicio", href: "#" },
  { label: "Contáctanos", href: "#" },
]

const Footer = () => {
  return (
    <footer className="bg-primary text-white rounded-t-[90px] pt-14 sm:pt-20 pb-9">
      
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
        <List
          title="Características"
          items={features}
        />
        <div className="grid grid-cols-2 gap-8 text-left">
          <List
            title="Acerca de"
            items={about}
          />
          <List
            title="Apoyo"
            items={support}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-6 sm:mt-16 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-left space-y-4 md:space-y-0 ">
          <div className="flex space-x-4 sm:space-x-8 text-2xl">
            <a href="#" className="hover:text-gray-300"><img src={Instagram} alt="Gestiona Logo" className="w-10 sm:w-12" /></a>
            <a href="#" className="hover:text-gray-300"><img src={Linkdin} alt="Gestiona Logo" className="w-10 sm:w-12" /></a>
          </div>
          <p className='font-bold pt-0 sm:pt-3'>© 2024–2025 Gestiona Todos los derechos reservados</p>
        </div>
        <div className="space-x-2 mt-6 md:mt-3">
          <img src={Logo_footer} alt="Gestiona Logo" className='w-48 sm:w-56'/>
        </div>
      </div>

  </footer>
  );
};

export default Footer;