"use client";
import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {
  const handlerNegociar = (descricao: string) => {
    const texto = `Olá tenho enteresse nesse produto: ${descricao}`;
    const numero = "+551192987513";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  const produtos = [
    { descricao: 'Acido Lincap', image: '/images/acido-lincap.jpg' },
    { descricao: 'Adigel', image: '/images/adigel.jpg' },
    { descricao: 'Base amaciante', image: '/images/base-amaciante.jpg' },
    { descricao: 'Devengel', image: '/images/denvergel-20kg.jpg' },
    { descricao: 'Lessence', image: '/images/floarome.jpg' },
    { descricao: 'Garrafa Branca 5L', image: '/images/garrafa-branca-5L.jpg' },
    { descricao: 'Garrafa Cristal 5L', image: '/images/garrafa-cristal-5L.jpg' },
    { descricao: 'Lauril pasta', image: '/images/lauril-pasta.jpg' },
    { descricao: 'Sulfonico', image: '/images/sulfonico.jpg' },
  ]

  return (
    <div>
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={() => {
          const scroller = document.querySelector(".carousel")!;
          scroller.scrollBy({ left: -300, behavior: "smooth" });
        }}>

        </button>

        <div className="carousel">
          {produtos.map((produto, item) => (
            <Card key={item}
              descricao={produto.descricao}
              image={produto.image}
            >
              <Button nome="Negociar" onClick={() => handlerNegociar(produto.descricao)}>
              </Button>
            </Card>
          ))}
        </div>

        <button className="carousel-btn left" onClick={() => {
          const scroller = document.querySelector(".carousel")!;
          scroller.scrollBy({ left: 300, behavior: "smooth" });
        }}>
        </button>
      </div>
    </div>
  );
}
