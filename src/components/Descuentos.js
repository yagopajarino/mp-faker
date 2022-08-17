import Axion from "../icons/Axion";
import Rex from "../icons/Rex";
import Beauty24 from "../icons/Beauty24";

export default function Descuentos() {
  return (
    <section className="descuentos">
      <h1>Descuentos para vos</h1>
      <div className="beneficios">
        <div className="wrapper">
          <Axion />
          <h2>HASTA</h2>
          <h1>10% OFF</h1>
        </div>
        <div className="wrapper">
          <Rex />
          <h2>HASTA</h2>
          <h1>10% OFF</h1>
        </div>
        <div className="wrapper">
          <Beauty24 />
          <h2>HASTA</h2>
          <h1>15% OFF</h1>
        </div>
      </div>
      <div className="button-descuentos">
        <h1>Ver todos los descuentos</h1>
      </div>
    </section>
  );
}
