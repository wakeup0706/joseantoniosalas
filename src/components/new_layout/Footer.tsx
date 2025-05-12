// components/Footer.tsx
import { Instagram, Mail, PhoneCall } from 'lucide-react';
import Logo from '../../assets/new/logo.webp';

export default function Footer() {
  return (
    <footer className="text-center text-gray-800 px-4 md:px-8">
      <div className="flex flex-col items-center space-y-4 bg-indigo-50 py-10 md:py-20">
        {/* Logo */}
        <img src={Logo} alt="Luxen Logo" className='w-32 md:w-40' />

        {/* Slogan */}
        <p className="text-sm">Agencia especializada en clínicas privadas</p>

        {/* Icons */}
        <div className="flex space-x-4">
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer"
             className="text-yellow-500 hover:scale-110 transition-transform">
            <PhoneCall />
          </a>
          <a href="https://instagram.com/luxen" target="_blank" rel="noopener noreferrer"
             className="text-yellow-500 hover:scale-110 transition-transform">
            <Instagram />
          </a>
          <a href="mailto:info@luxen.com" className="text-yellow-500 hover:scale-110 transition-transform">
            <Mail />
          </a>
        </div>
      </div>

      {/* Bottom links */}
      <div className="max-w-7xl mx-auto mt-10 text-sm py-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600">© 2025 LuxenAgency</p>
        <div className="flex space-x-2 mt-2 md:mt-0 text-gray-600">
          <a href="/privacidad" className="hover:text-yellow-600 transition">Política de privacidad</a>
          <span className="text-yellow-500 font-bold">|</span>
          <a href="/aviso-legal" className="hover:text-yellow-600 transition">Aviso legal</a>
        </div>
      </div>
    </footer>
  );
}
