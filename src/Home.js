import { useOutletContext, useNavigate } from "react-router-dom";

export default function Home() {
  const [monto, setMonto, local, setLocal] = useOutletContext();
  const navigate = useNavigate();

  const handleClick = () => {
    const input_monto = document.querySelector("#monto");
    const input_nombre = document.querySelector("#nombre");
    setMonto(input_monto.value);
    setLocal(input_nombre.value);
    navigate("/post");
  };

  return (
    <section className="home">
      <div className="content">
        <h1>MP faker</h1>
        <p>
          Ingresa el monto, el nombre del local y emula un pago de MercadoPago.
        </p>
        <form>
          <input type="text" placeholder="Monto" id="monto" required></input>
          <input
            type="text"
            placeholder="Nombre del comercio"
            id="nombre"
            required
          ></input>
        </form>
        <div className="continue-button" onClick={handleClick}>
          Continuar
        </div>
      </div>
      <div className="disclaimer">
        <p>
          Esta aplicación fue creada para concientizar sobre la importancia de
          verificar la validez de los cobros con QR.
        </p>
      </div>
    </section>
  );
}
