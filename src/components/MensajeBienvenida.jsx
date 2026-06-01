// src/components/MensajeBienvenida.jsx
function MensajeBienvenida() {
    const usuario = { nombre: "Amanda", rol: "admin" };

  
  if (usuario === null) {
    return <p>Por favor, inicia sesión para continuar.</p>;
  }

  
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
      <h2>Bienvenido, {usuario.nombre}</h2>
      <p>Rol: {usuario.rol}</p>
      {usuario.rol === "admin" && <p style={{ color: "green" }}>Tienes acceso completo al sistema.</p>}
    </div>
  );
}

export default MensajeBienvenida;