export const Button = ({ children, variant = "primary", isBold = false }) => {
  return (
    <button
      className={`flex items-center justify-center p-4 rounded-[35px] bg-red font-graphik text-xl leading-5 ${
        variant === "primary" ? "bg-red text-white" : "bg-white text-red"
      } ${isBold && "font-graphik font-bold"}
      `}
    >
      {children}
    </button>
  );
};
