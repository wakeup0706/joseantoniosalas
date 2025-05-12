import { FC } from 'react';
import {
  Bot,
  Mail,
  Megaphone,
  CheckSquare,
  BarChart2,
  UserCircle2
} from 'lucide-react'; // or use your custom icons

type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: <Bot className="h-10 w-10 text-yellow-600" />,
    title: 'Chatbot inteligente con IA',
    description:
      'Atiende automáticamente a pacientes 24/7, resuelve dudas frecuentes y agenda citas desde la web o WhatsApp.',
  },
  {
    icon: <Megaphone className="h-10 w-10 text-yellow-600" />,
    title: 'Flujos de automatización personalizados',
    description:
      'Secuencias automáticas que envían mensajes, emails o tareas según el comportamiento del paciente.',
  },
  {
    icon: <CheckSquare className="h-10 w-10 text-yellow-600" />,
    title: 'Lead nurturing avanzado',
    description:
      'Nutrición automática de contactos con contenido útil hasta convertirlos en pacientes reales.',
  },
  {
    icon: <Mail className="h-10 w-10 text-yellow-600" />,
    title: 'Formularios inteligentes + CRM básico',
    description:
      'Formularios conectados a un CRM que organizan y gestionan todos los datos de los pacientes.',
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-yellow-600" />,
    title: 'Panel de inteligencia clínica predictiva',
    description:
      'Dashboard con métricas clave y predicciones para tomar decisiones clínicas y comerciales basadas en datos.',
  },
  {
    icon: <UserCircle2 className="h-10 w-10 text-yellow-600" />,
    title: 'Asistente virtual con IA + captación automatizada',
    description:
      'Asistente que responde consultas y combina estrategias automáticas para atraer y convertir nuevos pacientes.',
  },
];

const Servicios: FC = () => {
  return (
    <section className="py-32 mt-20 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
        Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;