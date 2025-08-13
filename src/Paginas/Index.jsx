import productos from "../Datos/Productos.json";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main className="container">
      <h1 className="page-title">Tienda DEN</h1>

      <div className="grid">
        {productos.map((item) => (
          <article key={item.id} className="card hoverable">
            <img src={item.imagen} alt={item.nombre} className="card__img" />
            <h3 className="title">{item.nombre}</h3>
            <p className="brand">{item.marca}</p>
            <p className="price">${item.precio}</p>

            <Link className="btn" to={`/producto/${item.id}`}>
              Ver detalle
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}