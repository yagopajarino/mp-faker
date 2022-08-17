import QR from "../icons/QR";

export default function DatosOperacion() {
  const MESES = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const nro_operacion =
    10 ** 10 + Math.round(Math.random() * (20000000000 - 10000000000));
  const fecha_stringified = () => {
    const now = new Date();
    const day = now.getDate();
    const month = MESES[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${day} de ${month} de ${year} a las ${hours}:${minutes} hs`;
  };

  return (
    <section className="datosOperacion">
      <div className="qr-wrapper">
        <QR />
      </div>
      <div>
        <h2>{`Operación #${nro_operacion}`}</h2>
        <h3>{fecha_stringified()}</h3>
      </div>
    </section>
  );
}
