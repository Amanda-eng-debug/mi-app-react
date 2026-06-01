// src/components/Tarjeta.jsx
function Tarjeta() {
  const datos = {
    titulo: "React Avanzado",
    descripcion: "Aprende a construir aplicaciones escalables con React y sus mejores prácticas.",
    etiquetas: ["React", "Hooks", "Context API"],
    destacado: true
  };

  return (
    <div
      style={{
        border: datos.destacado ? "2px solid gold" : "1px solid #ccc",
        backgroundColor: datos.destacado ? "#fffef7" : "white",
        borderRadius: "12px",
        padding: "1rem",
        margin: "0 auto",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        width: "320px"
      }}
    >
      <h3>{datos.titulo}</h3>
      <p>{datos.descripcion}</p>
      <div>
        {datos.etiquetas.map((etiqueta, idx) => (
          <span
            key={idx}
            style={{
              backgroundColor: "#e0e0e0",
              borderRadius: "16px",
              padding: "4px 12px",
              marginRight: "8px",
              fontSize: "0.8rem",
              display: "inline-block"
            }}
          >
            {etiqueta}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tarjeta;