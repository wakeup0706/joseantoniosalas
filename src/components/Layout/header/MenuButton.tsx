import { useState, useEffect, useRef } from "react";
import { MotionConfig, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const MenuButton = () => {
  return (
    <div className="grid place-content-center rounded-full">
      <AnimatedHamburgerButton />
    </div>
  );
};

const AnimatedHamburgerButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          animate={isOpen ? "open" : "closed"}
          onClick={toggleMenu}
          className="relative h-12 w-12 rounded-full bg-white/0 transition-colors hover:bg-secondary"
        >
          <motion.span
            variants={VARIANTS.top}
            className="absolute h-[3px] w-7 bg-primary"
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
          />
          <motion.span
            variants={VARIANTS.middle}
            className="absolute h-[3px] w-7 bg-primary"
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
          />
          <motion.span
            variants={VARIANTS.bottom}
            className="absolute h-[3px] w-5 bg-primary"
            style={{
              x: "-80%",
              y: "50%",
              bottom: "35%",
              left: "calc(50% + 10px)",
            }}
          />
        </motion.button>
      </MotionConfig>
      {isOpen && (
        <div
          className="absolute right-0 mt-[57px] w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 transition-all transform"
          style={{
            transitionDuration: "300ms",
            transform: "scale(1)",
            opacity: 1,
          }}
        >
          <div className="py-1">
            <a
              href="#Servicios"
              className="block px-4 py-3 text-md text-ct-grey hover:bg-gray-100"
            >
              Servicios
            </a>
            <a
              href="#Aprende"
              className="block px-4 py-3 text-md text-ct-grey hover:bg-gray-100"
            >
              Aprende
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/signup");
                setIsOpen(false);
              }}
              className="block px-4 py-3 text-md text-ct-grey hover:bg-gray-100"
            >
              Registro
            </a>
          </div>
        </div>
      )}
    </>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "62%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};