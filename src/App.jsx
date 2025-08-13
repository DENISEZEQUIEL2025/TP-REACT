import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Componentes/Nav.jsx";
import Index from "./Paginas/Index.jsx";
import Catalogo from "./Paginas/Catalogo.jsx";
import Carrito from "./Paginas/Carrito.jsx";
import Contacto from "./Paginas/Contacto.jsx";
import ProductoDetalle from "./Paginas/ProductoDetalle.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/contacto" element={<Contacto />} /> 
      </Routes>
    </BrowserRouter>
  );
}