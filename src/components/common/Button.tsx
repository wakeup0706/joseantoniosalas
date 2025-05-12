// const Button = ({title, bgColor, py, px, otherStyle}:{title:string, bgColor:string, py:string, px:string, otherStyle:string}) => {
//   return (
//     <button className={`relative z-0 h-12  bg-${bgColor=="white" ? "primary" : bgColor} after:bg-${bgColor=="white" ? bgColor : "primary" } after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 items-center justify-center overflow-hidden rounded-full border px-${px} py-${py} text-${bgColor=="white" ? "white" : bgColor} hover:text-${bgColor=="white" ? "white" : bgColor} hover:bg-${bgColor=="white" ? bgColor : "white"} active:text-${bgColor=="white" ? "white" : bgColor} font-bold transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none ${otherStyle}`}>
//       {title}
//     </button>
//   );
// };

// export default Button;

import clsx from "clsx";

interface ButtonProps {
  title: string;
  bgColor: "white" | "primary"; // restrict to known colors for safety
  h: string;
  px: string;
  otherStyle?: string;
}

const Button = ({ title, bgColor, h, px, otherStyle = "" }: ButtonProps) => {
  const isWhite = bgColor === "white";

  return (
    <button
      className={clsx(
        `relative z-0 rounded-full border overflow-hidden items-center transition-all`,
        `px-${px} h-${h} ${otherStyle}`,
        `[box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none`,
        {
          "bg-white text-primary hover:bg-primary hover:text-white active:text-white":
            isWhite,
          "bg-primary text-white hover:bg-white hover:text-primary active:text-primary":
            !isWhite,
        },
        // Pseudo element
        "after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500",
        {
          "after:bg-white": isWhite,
          "after:bg-primary": !isWhite,
        },
      )}
    >
      {title}
    </button>
  );
};

export default Button;