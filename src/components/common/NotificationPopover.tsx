import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChartPie_Strocke } from '../icons';

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  avatarUrl?: string; // Optional: for user profile image
}

const notifications: NotificationItem[] = [
  {
    id: '1',
    title: 'Daily challenges',
    message: 'Realizaste un pago por $7.590',
    timestamp: 'May 09, 1:04 AM',
  },
  {
    id: '2',
    title: 'Leo Gill',
    message: 'Tu suscripción de Netflix está próxima a vencer',
    timestamp: 'May 09, 12:39 AM',
    avatarUrl: 'https://i.pravatar.cc/32?img=5',
  },
];

export const NotificationPopover: React.FC = () => {

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
        aria-label="Toggle notifications"
      >
        <ChartPie_Strocke className={`w-7 h-7 cursor-pointer`}/>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute -right-2 mt-2 w-[260px] bg-white rounded-xl z-50 overflow-hidden shadow-stone-950 shadow-lg"
          >
            {/* <div className="bg-purple-700 text-white p-4 text-lg font-semibold">
              Notifications
            </div> */}
            <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
              {notifications.map((item) => (
                <div key={item.id} className="flex gap-3 py-5 px-4 hover:bg-gray-200">
                  {/* {item.avatarUrl ? (
                    <img
                      src={item.avatarUrl}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500">
                      {item.title[0]}
                    </div>
                  )} */}
                  <div>
                    {/* <p className="font-medium text-sm text-ct-grey">{item.title}</p> */}
                    <p className="text-gray-600 text-sm">{item.message}</p>
                    {/* <span className="text-xs text-gray-400">{item.timestamp}</span> */}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};