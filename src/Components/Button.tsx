interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType?: "primary" | "secondary";
}

const commonClassName =
  "px-6 py-2 text-center rounded-md text-white text-xl disabled:bg-gray-500 disabled:pointer-events-none ";

const buttonTypeObj = {
  primary: "bg-blue-600 hover:bg-blue-800",
  secondary: "bg-white border-blue-600 border hover:bg-slate-50 text-black",
};

const Button: React.FC<ButtonType> = ({ text, buttonType = "primary", ...rest }) => {
  let className = commonClassName;

  className += buttonTypeObj[buttonType];

  return (
    <button {...rest} className={className}>
      {text}
    </button>
  );
};

export default Button;
