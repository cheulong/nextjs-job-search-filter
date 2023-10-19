interface ButtonProps {
  primary: boolean;
  text: string;
}

function Button({ primary, text }: ButtonProps) {
  return (
    <button
      data-testid="button"
      className={`py-1 px-2 mr-2 text-sm font-semibold text-white text-center rounded-ful ${
        primary ? "bg-cyan-500" : "bg-cyan-700"
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
