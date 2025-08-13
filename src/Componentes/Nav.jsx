import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: "8px",
    fontWeight: 600,
    color: isActive ? "#fff" : "#2c2c2c",
    background: isActive ? "#5f55a6" : "transparent",
  });

  return (
    <header style={{ borderBottom: "1px solid #eee" }}>
      <nav className="container" style={{ display:"flex", gap: 10, padding:"10px 0" }}>
        <Link to="/" style={{ textDecoration:"none", fontWeight:800 }}>Tienda DEN</Link>
        <NavLink to="/catalogo" style={linkStyle}>Catálogo</NavLink>
        <NavLink to="/carrito" style={linkStyle}>Carrito</NavLink>
        <NavLink to="/contacto" style={linkStyle}>Contacto</NavLink> {/* 👈 que NO apunte a /carrito */}
      </nav>
    </header>
  );
}

