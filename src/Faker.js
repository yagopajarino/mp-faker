import Header from "./components/Header";
import DatosPago from "./components/DatosPago";
import DatosOperacion from "./components/DatosOperacion";
import Descuentos from "./components/Descuentos";
import DividirGastos from "./components/DividirGastos";
import Continuar from "./components/Continuar";
import { useOutletContext } from "react-router-dom";

export default function Faker() {
  const [monto, setMonto, local, setLocal] = useOutletContext();
  return (
    <div className="App">
      <Header nombre_local={local} />
      <DatosPago monto={monto} />
      <DatosOperacion />
      <Descuentos />
      <DividirGastos />
      <Continuar />
    </div>
  );
}
