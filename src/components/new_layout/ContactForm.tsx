// components/ContactForm.tsx
import { useState } from 'react';
import MainButton from '../common/MainButton';

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    asunto: '',
    mensaje: '',
    email: '',
    clinica: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission logic here
    console.log(form);
  };

  return (
  <section className='my-14 md:my-40'>
    <div className="max-w-6xl mx-4 md:mx-auto bg-white shadow-2xl p-8 md:p-16 rounded-lg">
      <h2 className="text-center text-2xl font-bold mb-4">Reserva Tu Consultoría Gratuita</h2>
      <p className="text-center text-sm text-gray-700 mb-6">
        Déjanos tus datos y en <strong>menos de 24 horas</strong> recibirás un diagnóstico personalizado de cómo podemos ayudarte
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className='text-sm text-gray-600 font-medium'>Nombre</label>
            <input type="text" name="nombre" id='nombre' placeholder="Nombre" value={form.nombre} onChange={handleChange}
              className="border p-2 rounded w-full" required />
          </div>
          <div>
            <label className='text-sm text-gray-600 font-medium'>Clínica </label>
            <input type="text" name="clinica" id="clinica" placeholder="Clínica" value={form.clinica} onChange={handleChange}
              className="border p-2 rounded w-full" required />
          </div>
          <div>
            <label className='text-sm text-gray-600 font-medium'>Teléfono</label>
            <input type="tel" name="telefono" id='telefono' placeholder="Teléfono" value={form.telefono} onChange={handleChange}
              className="border p-2 rounded w-full" required />
          </div>
          <div>
            <label className='text-sm text-gray-600 font-medium'>Email</label>
            <input type="email" name="email" id='email' placeholder="Email" value={form.email} onChange={handleChange}
              className="border p-2 rounded w-full" required />
          </div>
        </div>
        <div>
          <label className='text-sm text-gray-600 font-medium'>Asunto</label>
          <input type="text" name="asunto" id='asunto' placeholder="Asunto" value={form.asunto} onChange={handleChange}
            className="border p-2 rounded w-full" required />
        </div>
        <div>
            <label className='text-sm text-gray-600 font-medium'>Mensaje</label>
          <textarea name="mensaje" placeholder="Mensaje" id='' rows={4} value={form.mensaje} onChange={handleChange}
            className="border p-2 rounded w-full" required></textarea>
        </div>
        <MainButton text="QUIERO MI CONSULTORÍA GRATIS AHORA" textColor='white w-full' />
      </form>
    </div>
    <div className="mt-10 md:mt-32 text-center">
      <h3 className="text-xl md:text-3xl text-gray-800 font-semibold mb-2">Síguenos en Instagram</h3>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
        className="inline-block p-3 bg-black text-white rounded hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.3.4 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.3-2.5.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.8.2-2.2.4-.6.2-.9.5-1.2.8-.3.3-.6.6-.8 1.2-.2.4-.3 1.1-.4 2.2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.8.4 2.2.2.6.5.9.8 1.2.3.3.6.6 1.2.8.4.2 1.1.3 2.2.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.8-.2 2.2-.4.6-.2.9-.5 1.2-.8.3-.3.6-.6.8-1.2.2-.4.3-1.1.4-2.2.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.8-.4-2.2-.2-.6-.5-.9-.8-1.2-.3-.3-.6-.6-1.2-.8-.4-.2-1.1-.3-2.2-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.3a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 10.8a4.3 4.3 0 1 0 0-8.6 4.3 4.3 0 0 0 0 8.6zm5.4-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
      </a>
    </div>
  </section>
  );
}
