// src/components/Dashboard.jsx
function Dashboard() {
  const usuario = {
    nombre: "Amanda Pérez",
    email: "amanper@example.com",
    rol: "Administradora"
  };

  const notificaciones = [
    { id: 1, mensaje: "Bienvenida al sistema", leida: true },
    { id: 2, mensaje: "Tienes una nueva tarea asignada", leida: false },
    { id: 3, mensaje: "Tu reporte está listo", leida: false },
    { id: 4, mensaje: "Mantenimiento programado para el sábado", leida: true }
  ];

  const actividadReciente = [
    { id: 1, accion: "Inició sesión", fecha: "2026-05-30" },
    { id: 2, accion: "Actualizó su perfil", fecha: "2026-05-29" },
    { id: 3, accion: "Creó un nuevo proyecto", fecha: "2026-05-28" }
  ];

  const notificacionesNoLeidas = notificaciones.filter(n => !n.leida).length;

  return (
    <>
      <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
        <h3>Sección 1: Información del usuario</h3>
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Rol:</strong> {usuario.rol}</p>
      </div>

      <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
        <h3>Sección 2: Notificaciones</h3>
        <p><strong>Notificaciones no leídas:</strong> {notificacionesNoLeidas}</p>
        {notificaciones.length === 0 ? (
          <p>No hay notificaciones</p>
        ) : (
          <ul>
            {notificaciones.map(notif => (
              <li key={notif.id} style={{ fontWeight: notif.leida ? "normal" : "bold", opacity: notif.leida ? 0.7 : 1 }}>
                {notif.mensaje} {notif.leida ? "(leída)" : "(nueva)"}
              </li>
            ))}
          </ul>
        )}
        {notificacionesNoLeidas === 0 && <p>No tienes notificaciones pendientes</p>}
      </div>

      <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
        <h3>Sección 3: Actividad reciente</h3>
        {actividadReciente.length === 0 ? (
          <p>No hay actividad reciente</p>
        ) : (
          <ul>
            {actividadReciente.map(act => (
              <li key={act.id}>{act.accion} - {act.fecha}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Dashboard;