import { useState } from "react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  if (enviado) {
    return (
      <main className="container">
        <h1>Contacto</h1>
        <p>Gracias por su consulta.</p>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>Contacto</h1>
      <form onSubmit={manejarEnvio} className="form">
        <input type="text" placeholder="Nombre" required />
        <input type="text" placeholder="Apellido" required />
        <input type="tel" placeholder="Teléfono" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Consulta" rows={4} required />
        <button className="btn" type="submit">Enviar</button>
      </form>
    </main>
  );
}