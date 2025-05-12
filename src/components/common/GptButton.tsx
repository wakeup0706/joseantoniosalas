import { GptIcon } from "../icons";

export default function GptButton() {
  return (
    <div className="fixed bottom-3 right-5 sm:right-20 group flex flex-row-reverse items-center -mt-3">
      <div
        className="absolute right-16 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-blue-200 text-primary font-semibold py-1 px-4 rounded-full shadow"
      >
        ¡Hablemos!
      </div>
      <button
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-blue-200 hover:scale-105 transition-transform duration-300 shadow-lg z-10"
        aria-label="Hablemos"
      >
        <GptIcon className="w-8 h-8" />
      </button>
    </div>
  );
}