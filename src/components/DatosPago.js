import Tarjeta from "../icons/Tarjeta";

export default function DatosPago({ monto }) {
  return (
    <section className="datosPago">
      <Tarjeta />
      <div>
        <h2>{`$ ${monto}`}</h2>
        <h3>Visa Débito terminada en 1209</h3>
      </div>
    </section>
  );
}
