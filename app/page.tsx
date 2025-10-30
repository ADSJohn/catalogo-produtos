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

  return (
    <div>
      <Card descricao="Sulfonico indiano" image="/images/sulfonico.jpg">
        <Button
          nome="Negociar"
          onClick={() => handlerNegociar("Sulfonico indiano")}
        />
      </Card>
    </div>
  );
}
