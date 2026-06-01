// src/components/ListaTareas.jsx
function ListaTareas() {
  const tareas = [
    { id: 1, titulo: "Estudiar React", completada: false, prioridad: "alta" },
    { id: 2, titulo: "Hacer ejercicio", completada: true, prioridad: "media" },
    { id: 3, titulo: "Comprar víveres", completada: false, prioridad: "baja" },
    { id: 4, titulo: "Leer un libro", completada: false, prioridad: "alta" },
    { id: 5, titulo: "Llamar a mamá", completada: true, prioridad: "media" },
    { id: 6, titulo: "Terminar informe", completada: false, prioridad: "alta" },
    { id: 7, titulo: "Limpiar la casa", completada: true, prioridad: "baja" }
  ];

  const tareasPendientes = tareas.filter(tarea => !tarea.completada);
  const tareasCompletadas = tareas.filter(tarea => tarea.completada);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
      <h3>Mis tareas</h3>
      
      <div>
        <h4>Tareas pendientes ({tareasPendientes.length})</h4>
        {tareasPendientes.length === 0 ? (
          <p>No hay tareas pendientes</p>
        ) : (
          <ul>
            {tareasPendientes.map(tarea => (
              <li key={tarea.id} style={{ fontWeight: tarea.prioridad === "alta" ? "bold" : "normal", color: tarea.prioridad === "alta" ? "red" : "black" }}>
                {tarea.titulo} <span>(prioridad: {tarea.prioridad})</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>Tareas completadas ({tareasCompletadas.length})</h4>
        {tareasCompletadas.length === 0 ? (
          <p>No hay tareas completadas</p>
        ) : (
          <ul>
            {tareasCompletadas.map(tarea => (
              <li key={tarea.id} style={{ textDecoration: "line-through" }}>
                {tarea.titulo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListaTareas;