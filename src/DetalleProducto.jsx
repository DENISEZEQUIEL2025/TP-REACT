import { useParams } from "react-router-dom";
import ProductosUS from "./Hooks/ProductosUS.jsx";

export default function ProductoDetalle() {
  const { id } = useParams();

  const { data: productos, loading, error } = ProductosUS();

  if (loading) return <main className="container"><p>Cargando producto...</p></main>;
  if (error) return <main className="container"><p style={{ color: "crimson" }}>Error: {error}</p></main>;

  const prod = productos.find(p => String(p.id) === String(id));

  if (!prod) return <main className="container"><p>No se encontró el producto.</p></main>;

  return (
    <main className="container">
      <h1>{prod.nombre}</h1>
      <p>{prod.marca}</p>
      <p>${prod.precio}</p>
      <p>{prod.descripcion}</p>
      <img src={prod.imagen} alt={prod.nombre} style={{ maxWidth: "300px" }} />
    </main>
  );
}