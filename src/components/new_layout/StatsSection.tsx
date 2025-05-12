import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Stat = {
  value: number;
  label: string;
};

const AnimatedCounter = ({ value, isVisible }: { value: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // ms
    const increment = value / (duration / 16); // ~60fps

    const updateCount = () => {
      start += increment;
      if (start < value) {
        setCount(Math.round(start));
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    updateCount();
  }, [isVisible, value]);

  return <span className="text-3xl md:text-4xl font-bold">+{count.toLocaleString()}</span>;
};

const StatsSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-neutral-900 text-white py-12 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8">
        <div className="space-y-1 md:border-r border-neutral-700">
          <AnimatedCounter value={120} isVisible={inView} />
          <p className="text-sm md:text-base">Clínicas Transformadas</p>
        </div>
        <div className="space-y-1 md:border-r border-neutral-700">
          <AnimatedCounter value={300} isVisible={inView} />
          <p className="text-sm md:text-base">Landing Pages Optimizadas</p>
        </div>
        <div className="space-y-1 md:border-r border-neutral-700">
          <AnimatedCounter value={1500} isVisible={inView} />
          <p className="text-sm md:text-base">Citas Automatizadas</p>
        </div>
        <div className="space-y-1">
          <AnimatedCounter value={90} isVisible={inView} />
          <p className="text-sm md:text-base">Retención de Clientes</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
