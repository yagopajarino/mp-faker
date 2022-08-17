import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function App() {
  const [monto, setMonto] = useState(0);
  const [local, setLocal] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/mp-faker/home");
  }, []);

  return <Outlet context={[monto, setMonto, local, setLocal]} />;
}
