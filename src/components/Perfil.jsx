// src/components/Perfil.jsx

function Perfil() {
    const nombre = "Amanda Pérez";
    const profesion = "Estudiante";
    const experiencia = 3;
    const disponible = true;
  return (
   <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
    <h2>{nombre}</h2>
    <p>Profesión: {profesion}</p>
    <p>{experiencia} años de experiencia</p>
    <p>{disponible ? "Disponible para contratar" : "No disponible"}</p>
  </div>
  );
}

export default Perfil;