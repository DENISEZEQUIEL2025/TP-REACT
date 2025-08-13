import { useEffect, useState } from "react";
import dataLocal from "../Datos/Productos.json"; 

export default function ProductosUS() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    setError("");

    const timer = setTimeout(() => {
      try {
        if (cancel) return;
        if (Math.random() < 0.03) throw new Error("Fallo de red simulado");
        setData(dataLocal);
      } catch (e) {
        setError(e.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    }, 800);

    return () => { cancel = true; clearTimeout(timer); };
  }, []);

  return { data, loading, error };
}