import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, LogOut_primary, Perfil, Premium_primary, Setting_Strocke } from '../icons';

export const SettingPopover: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 rounded-full hover:bg-gray-200 transition"
        aria-label="Toggle Settings"
      >
        <Setting_Strocke className={`w-7 h-7 cursor-pointer`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-[270px] bg-white rounded-xl p-5 z-50 overflow-hidden shadow-stone-950 shadow-lg"
          >
            <div className="max-h-96 overflow-y-auto">
              <button
                className="text-primary font-semibold w-full flex items-center justify-between px-[6px] py-1 rounded-full text-sm border-2 border-primary pr-5"
              >
                Perfil
                <Perfil className='text-xl' />
              </button>
              <button
                className="text-primary font-semibold w-full flex items-center justify-between px-[6px] py-1 rounded-full text-sm border-2 mt-3 border-primary pr-5"
              >
                Cuentas Vinculadas
                <Link className='text-xl' />
              </button>
              <button
                className="text-primary font-semibold w-full flex items-center justify-between px-[6px] py-1 rounded-full text-sm border-2 mt-3 border-primary pr-5"
              >
                Ser Premium
                <Premium_primary className='text-xl' />
              </button>
            </div>
            <div className='flex gap-5 items-center text-primary font-semibold mt-5'>
              <span>Cerrar Sesión</span><button className=''><LogOut_primary className='w-5 h-5' /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};