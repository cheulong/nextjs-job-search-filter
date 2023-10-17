interface ButtonProps {
  primary: boolean;
  text: string;
}

function Button({ primary, text }: ButtonProps) {
  return (
    <button
      className={`py-1 px-2 mr-2 text-sm font-semibold text-white text-center rounded-ful ${
        primary ? "bg-cyan-dark" : "bg-cyan-darker"
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
