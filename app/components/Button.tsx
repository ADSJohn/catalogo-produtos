interface ButtonProps {
  nome: string;
  onClick?: () => void;
}

export default function Button({ nome, onClick }: ButtonProps) {
  return (
    <div>
      <button onClick={onClick}>{nome}</button>
    </div>
  );
}
