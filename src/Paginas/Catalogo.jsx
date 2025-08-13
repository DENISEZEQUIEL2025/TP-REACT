import { Link } from "react-router-dom";
import ProductosUS from "../Hooks/ProductosUS.jsx";
import useCart from "../Carrito/Cart.js"; // usamos el store del carrito

export default function Catalogo() {
  const { data: productos, loading, error } = ProductosUS();
  const add = useCart(s => s.add); // función para agregar

  return (
    <main className="container">
      <h1 className="page-title">Catálogo</h1>

      {loading && <p>Cargando productos...</p>}
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}

      {!loading && !error && (
        <div className="grid">
          {productos.map((item) => (
            <article key={item.id} className="card hoverable">
              <img src={item.imagen} alt={item.nombre} className="card__img" />
              <h3 className="title">{item.nombre}</h3>
              <p className="brand">{item.marca}</p>
              <p className="price">${item.precio}</p>

              <div style={{ display: "flex", gap: 8 }}>
                <Link className="btn" to={`/producto/${item.id}`}>Ver detalle</Link>
                <button className="btn" onClick={() => add(item)}>Agregar al carrito</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}