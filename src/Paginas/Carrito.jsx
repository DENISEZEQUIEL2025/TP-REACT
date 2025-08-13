import useCart from "../Carrito/Cart.js";

export default function Carrito() {
  const { items, remove, clear, total } = useCart();

  return (
    <main className="container">
      <h1>Carrito</h1>

      {items.length === 0 ? (
        <p>Acá vas a ver los productos agregados.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0, margin: "12px 0" }}>
            {items.map((i) => (
              <li key={i.id} className="card" style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <img
                    src={i.imagen}
                    alt={i.nombre}
                    style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 8 }}
                  />
                  <div style={{ flex: 1 }}>
                    <strong>{i.nombre}</strong>
                    <div className="brand">{i.marca}</div>
                    <div className="price">
                      ${i.precio} x {i.qty} = ${i.precio * i.qty}
                    </div>
                  </div>
                  <button className="btn" onClick={() => remove(i.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button className="btn" onClick={clear}>Vaciar carrito</button>
            <h2>Total: ${total()}</h2>
          </div>
        </>
      )}
    </main>
  );
}