import React, { useEffect, useRef } from "react";

interface RtlSliderProps {
  items: React.ReactNode[];
  speed?: number;
}

const RtlSlider: React.FC<RtlSliderProps> = ({ items, speed = 0.5 }) => {
  const desktopTrackRef = useRef<HTMLDivElement | null>(null);
  const mobileTrackRef1 = useRef<HTMLDivElement | null>(null);
  const mobileTrackRef2 = useRef<HTMLDivElement | null>(null);

  // Animate a given track
  const startAnimation = (trackRef: React.RefObject<HTMLDivElement>) => {
    let offset = 0;
    let animationFrameId: number;

    const animate = () => {
      const track = trackRef.current;
      if (!track) return;

      offset += speed;
      const maxOffset = track.scrollWidth / 2;
      if (offset >= maxOffset) offset = 0;

      track.style.transform = `translateX(-${offset}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  };

  // Run animations on mount
  useEffect(() => {
    const cleanupFns = [
      startAnimation(desktopTrackRef),
      startAnimation(mobileTrackRef1),
      startAnimation(mobileTrackRef2),
    ];

    return () => {
      cleanupFns.forEach((cleanup) => cleanup && cleanup());
    };
  }, [speed]);

  const half = Math.ceil(items.length / 2);
  const mobileItems1 = items.slice(0, half);
  const mobileItems2 = items.slice(half);

  return (
    <div className="w-full overflow-hidden">
      <div className="hidden sm:block">
        <div
          ref={desktopTrackRef}
          className="flex whitespace-nowrap will-change-transform"
        >
          {[...items, ...items].map((item, i) =>
            typeof item === "string" ? (
              <img src={item} alt={`img-${i}`} key={i} className="h-8 mx-8" />
            ) : null
          )}
        </div>
      </div>
      <div className="block sm:hidden space-y-2">
        <div ref={mobileTrackRef1} className="flex whitespace-nowrap will-change-transform">
        {[...mobileItems1, ...mobileItems1].map((item, i) =>
          typeof item === "string" ? (
            <img src={item} alt={`img-${i}`} key={i} className="h-8 mx-8" />
          ) : null
        )}
        </div>
        <div ref={mobileTrackRef2} className="flex whitespace-nowrap will-change-transform">
          {[...mobileItems2, ...mobileItems2].map((item, i) =>
            typeof item === "string" ? (
              <img src={item} alt={`img-${i}`} key={i} className="h-8 mx-8" />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default RtlSlider;