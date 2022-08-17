import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  const [monto, setMonto] = useState(0);
  const [local, setLocal] = useState("");
  return <Outlet context={[monto, setMonto, local, setLocal]} />;
}
