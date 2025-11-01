"use client";
import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {
  const produtos = [
    { descricao: "Ácido Lincap 40/10 25KG", image: "/images/acido-lincap.jpg" },
    { descricao: "Espessante Adigel 25KG", image: "/images/adigel.jpg" },
    {
      descricao: "Base Amaciante liquida 1/250LT",
      image: "/images/base-amaciante.jpg",
    },
    {
      descricao: "Espessante Devengél 20KG",
      image: "/images/denvergel-20kg.jpg",
    },
    { descricao: "Essências Floarome", image: "/images/floarome.jpg" },
    { descricao: "Essências Lessence", image: "/images/lessence.jpg" },
    { descricao: "Garrafa Branca 5L", image: "/images/garrafa-branca-5L.jpg" },
    { descricao: "Sulfônico Indiano 90% (SK)", image: "/images/sulfonico.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const [carrinho, setCarrinho] = useState<string[]>([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const proximo = () => setIndex((i) => (i + 1) % produtos.length);
  const anterior = () =>
    setIndex((i) => (i - 1 + produtos.length) % produtos.length);

  const adicionarAoCarrinho = (descricao: string) => {
    if (!carrinho.includes(descricao)) {
      setCarrinho([...carrinho, descricao]);
    }
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

  return (
    <>
      {/* Ícone do Carrinho */}
      <div
        className="cart-icon"
        onClick={() => setMostrarCarrinho(!mostrarCarrinho)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="url(#cartGradient)"
          className="cart-svg"
        >
          <defs>
            <linearGradient id="cartGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9b5de5" />
              <stop offset="100%" stopColor="#00bbf9" />
            </linearGradient>
          </defs>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.5l1.5 9h13.5l1.5-6H6"
          />
          <circle cx="9" cy="19" r="1" />
          <circle cx="17" cy="19" r="1" />
        </svg>
        {carrinho.length > 0 && (
          <span className="cart-count">{carrinho.length}</span>
        )}
      </div>

      {/* Modal do Carrinho */}
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
                  Finalizar via WhatsApp
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* === DESKTOP === */}
      <div className="desktop">
        <h1 className="titulo">✨ Catálogo de Produtos</h1>
        <div className="carousel">
          {produtos.map((p, i) => (
            <Card key={i}>
              <h2 className="produto-nome">{p.descricao}</h2>
              <img src={p.image} alt={p.descricao} />
              <Button
                nome="Adicionar ao Carrinho"
                onClick={() => adicionarAoCarrinho(p.descricao)}
                className="btn-add"
              />
            </Card>
          ))}
        </div>
      </div>

      {/* === MOBILE === */}
      <div className="carousel-mobile">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {produtos.map((produto, i) => (
            <div className="card-full" key={i}>
              <img
                src={produto.image}
                alt={produto.descricao}
                className="imagem-full"
              />
              <h2 className="produto-nome">{produto.descricao}</h2>
              <Button
                nome="Adicionar ao Carrinho"
                onClick={() => adicionarAoCarrinho(produto.descricao)}
                className="btn-add"
              />
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={anterior}>
            ⟨
          </button>
          <button className="carousel-btn" onClick={proximo}>
            ⟩
          </button>
        </div>
      </div>
    </>
  );
}
