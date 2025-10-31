interface ButtonProps {
  nome: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ nome, onClick, className }: ButtonProps) {
  return (
    <button className={`add-button ${className || ""}`} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="white"
      >
        <path d="M3 3h2l.4 2M7 13h14l-1.35 6.3a1 1 0 01-.97.7H6.32a1 1 0 01-.97-.76L4 4H3" />
      </svg>
      {nome}
    </button>
  );
}
