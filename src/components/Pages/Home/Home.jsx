import Card from "../../Items/Card/Card";
import CardPrincipal from "../../Items/CardPrincipal/CardPrincipal";
import Contacto from "../../Items/Contacto/Contacto";

const Home = () => {

  return (
    <>
      <div className="" id="inicio">
        <CardPrincipal />
      </div>
      <div id="contacto">
        <Contacto />
      </div>
    </>
  );
};

export default Home;
