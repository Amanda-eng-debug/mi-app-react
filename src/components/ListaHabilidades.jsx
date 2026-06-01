// src/components/ListaHabilidades.jsx
function ListaHabilidades() {
  const habilidades = ["React", "JavaScript", "CSS", "Node.js", "Git", "TypeScript"];

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
      <h3>Habilidades técnicas</h3>
      <p>Total de habilidades: {habilidades.length}</p>
      <ul>
        {habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaHabilidades;