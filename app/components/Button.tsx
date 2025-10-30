interface ButtonProps {
    nome: string;
}

export default function Button({nome}:ButtonProps) {
    return (
        <div>
            <button>{nome}</button>
        </div>
    )
}
