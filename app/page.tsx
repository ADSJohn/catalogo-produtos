import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {

  const handlerNegociar = ()=>{

    const texto = "Olá tenho enteresse nesse produto: ${descricao}"

  }


  return (
    <div>
      <Card descricao="Sulfonico indiano" image="/images/sulfonico.jpg">
        <Button nome="Negociar" />
      </Card>
    </div>
  );
}
