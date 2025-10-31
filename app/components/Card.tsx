import { ReactNode } from "react";
import Button from "./Button";

interface CardProps {
  descricao?: string;
  image?: string;
  children: ReactNode;
}

export default function Card({ descricao, image, children }: CardProps) {
  return (
    <div>
      <div>
        <h2>{descricao}</h2>
      </div>
      {image && <img src={image} alt={descricao || ""} />}
      {children}
    </div>
  );
}
