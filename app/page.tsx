"use client";
import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {
  const [carrinho, setCarrinho] = useState<string[]>([]);

  const adicionarAoCarrinho = (descricao: string) => {
    if (!carrinho.includes(descricao)) {
      setCarrinho([...carrinho, descricao]);
      alert(`${descricao} foi adicionado ao carrinho!`);
    } else {
      alert(`${descricao} já está no carrinho!`);
    }
  };

  const produtos = [
    { descricao: "Acido Lincap", image: "/images/acido-lincap.jpg" },
    { descricao: "Adigel", image: "/images/adigel.jpg" },
    { descricao: "Base amaciante", image: "/images/base-amaciante.jpg" },
    { descricao: "Devengel", image: "/images/denvergel-20kg.jpg" },
    { descricao: "Lessence", image: "/images/floarome.jpg" },
    { descricao: "Garrafa Branca 5L", image: "/images/garrafa-branca-5L.jpg" },
    { descricao: "Garrafa Cristal 5L", image: "/images/garrafa-cristal-5L.jpg" },
    { descricao: "Lauril pasta", image: "/images/lauril-pasta.jpg" },
    { descricao: "Sulfonico", image: "/images/sulfonico.jpg" },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🛒 Catálogo de Produtos</h1>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <strong>Carrinho:</strong> {carrinho.length} item(s)
      </div>

      <div className="carousel-container">
        <button
          className="carousel-btn left"
          onClick={() => {
            const scroller = document.querySelector(".carousel")!;
            scroller.scrollBy({ left: -300, behavior: "smooth" });
          }}
        >
          {"<"}
        </button>

        <div className="carousel">
          {produtos.map((produto, index) => (
            <Card
              key={index}
              descricao={produto.descricao}
              image={produto.image}
            >
              <Button
                nome="Adicionar ao Carrinho"
                onClick={() => adicionarAoCarrinho(produto.descricao)}
              />
            </Card>
          ))}
        </div>

        <button
          className="carousel-btn right"
          onClick={() => {
            const scroller = document.querySelector(".carousel")!;
            scroller.scrollBy({ left: 300, behavior: "smooth" });
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
