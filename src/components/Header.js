import Cross from "../icons/Cross";
import Bag from "../icons/Bag";
import Tick from "../icons/Tick";

export default function Header({ nombre_local }) {
  return (
    <section className="header">
      <Cross />
      <div className="wrapper">
        <h2>¡Listo! Ya le pagaste a {nombre_local}</h2>
        <div className="icon-container">
          <div className="bag-container">
            <Bag />
          </div>
          <Tick />
        </div>
      </div>
      <p>
        Pago emulado con <a href="">mp faker</a>
      </p>
    </section>
  );
}
