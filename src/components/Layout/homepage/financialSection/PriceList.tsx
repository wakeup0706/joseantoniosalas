import React from "react";

export default function SubscriptionList({ lists }: { lists: any[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-full max-w-xs md:max-w-md mx-auto">
      <ul className="space-y-4">
        {lists.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-6 gap-5 md:gap-52 border-b-[1px] border-gray-500"
          >
            <div className="flex items-center gap-2">
              <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8 md:w-12 md:h-12 m-2"
              />
              <div className="flex flex-col items-start">
                <span className="text-ct-grey">{item.name}</span>
                <span className="text-xs text-ct-grey">{item.prop}</span>
              </div>
            </div>
            <div className="text-right">
              <div
                className={`font-semibold text-ct-grey relative inline-block transition-all duration-300 ${
                  item.changedValue ? "line-through-red" : ""
                }`}
              >
                {item.price}
              </div>
              {item.changedValue && (
                <div className="font-semibold text-ct-grey">{item.changedValue}</div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Add custom CSS for red line-through */}
      <style>{`
        .line-through-red::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 2px;
          background-color: red;
          animation: draw-line 0.4s ease forwards;
        }

        @keyframes draw-line {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}