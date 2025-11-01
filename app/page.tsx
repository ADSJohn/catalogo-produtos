"use client";
import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {
  const [carrinho, setCarrinho] = useState<string[]>([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [animarMaisUm, setAnimarMaisUm] = useState<string | null>(null);

  const adicionarAoCarrinho = (descricao: string) => {
    if (!carrinho.includes(descricao)) {
      setCarrinho([...carrinho, descricao]);
    }
    setAnimarMaisUm(descricao);
    setTimeout(() => setAnimarMaisUm(null), 800);
  };

  const removerDoCarrinho = (descricao: string) => {
    setCarrinho(carrinho.filter((item) => item !== descricao));
  };

  const finalizarPedido = () => {
    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }
    const numero = "+559981298301";
    const texto = `Olá! Tenho interesse nos seguintes produtos:\n\n${carrinho
      .map((item, i) => `${i + 1}. ${item}`)
      .join("\n")}\n\nPode me enviar mais informações, por favor?`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  const produtos = [
    { descricao: "Ácido Lincap", image: "/images/acido-lincap.jpg" },
    { descricao: "Adigel", image: "/images/adigel.jpg" },
    { descricao: "Base Amaciante", image: "/images/base-amaciante.jpg" },
    { descricao: "Devengel", image: "/images/denvergel-20kg.jpg" },
    { descricao: "Lessence", image: "/images/floarome.jpg" },
    { descricao: "Garrafa Branca 5L", image: "/images/garrafa-branca-5L.jpg" },
    {
      descricao: "Garrafa Cristal 5L",
      image: "/images/garrafa-cristal-5L.jpg",
    },
    { descricao: "Lauril Pasta", image: "/images/lauril-pasta.jpg" },
    { descricao: "Sulfônico", image: "/images/sulfonico.jpg" },
  ];

  return (
    <div className="container">
      {/* Ícone do carrinho */}
      <div
        className="cart-icon"
        onClick={() => setMostrarCarrinho(!mostrarCarrinho)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="cart-svg"
        >
          <defs>
            <linearGradient id="cartGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9b5de5" />
              <stop offset="100%" stopColor="#00bbf9" />
            </linearGradient>
          </defs>
          <path
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.436M7.5 14.25h10.125a1.125 1.125 0 001.09-.826l1.755-6.29a.375.375 0 00-.36-.484H6.09M7.5 14.25L5.106 5.271M7.5 14.25l-.38 1.435A1.125 1.125 0 008.25 16.875h9.75m-11.25 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm11.25 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            fill="url(#cartGradient)"
            stroke="url(#cartGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {carrinho.length > 0 && (
          <span className="cart-count">{carrinho.length}</span>
        )}
      </div>

      {/* Modal Carrinho */}
      {mostrarCarrinho && (
        <div className="cart-modal">
          <div className="cart-content">
            <h2>🛒 Seu Carrinho</h2>
            {carrinho.length === 0 ? (
              <p>O carrinho está vazio.</p>
            ) : (
              <ul>
                {carrinho.map((item, index) => (
                  <li key={index}>
                    {item}
                    <button
                      className="remove-btn"
                      onClick={() => removerDoCarrinho(item)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="cart-actions">
              <button
                className="close-btn"
                onClick={() => setMostrarCarrinho(false)}
              >
                Fechar
              </button>
              {carrinho.length > 0 && (
                <button className="finalizar-btn" onClick={finalizarPedido}>
                  Finalizar Pedido via WhatsApp
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <h1 className="titulo">✨ Catálogo de Produtos</h1>

      {/* Carrossel */}
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
            <Card key={index}>
              <div className="card-btn-wrapper">
                {/* DESCRIÇÃO ESTILIZADA ACIMA DA IMAGEM */}
                <h2 className="produto-nome">{produto.descricao}</h2>
                <img src={produto.image} alt={produto.descricao} />

                {/* BOTÃO */}
                <Button
                  nome="Adicionar ao Carrinho"
                  onClick={() => adicionarAoCarrinho(produto.descricao)}
                  className="btn-add"
                />

                {animarMaisUm === produto.descricao && (
                  <span className="mais-um">+1</span>
                )}
              </div>
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
