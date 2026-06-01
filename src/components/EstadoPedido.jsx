// src/components/EstadoPedido.jsx
function EstadoPedido() {
  const estado = "enviado"; 

  const icono = estado === "pendiente" ? "⏳" : estado === "enviado" ? "🚚" : estado === "entregado" ? "✅" : "❌";

  const mensaje = 
    estado === "pendiente" ? "Tu pedido está siendo procesado" :
    estado === "enviado" ? "Tu pedido está en camino" :
    estado === "entregado" ? "Tu pedido ha sido entregado" :
    "Tu pedido fue cancelado";

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
      <h3>Estado del pedido</h3>
      <p>{icono} {mensaje}</p>
      {estado === "enviado" && (
        <p style={{ color: "blue" }}>Tiempo estimado de entrega: 2-3 días hábiles</p>
      )}
    </div>
  );
}

export default EstadoPedido;