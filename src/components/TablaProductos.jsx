// src/components/TablaProductos.jsx
function TablaProductos() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 899.99, disponible: true },
    { id: 2, nombre: "Mouse", precio: 25.5, disponible: true },
    { id: 3, nombre: "Teclado", precio: 45.0, disponible: false },
    { id: 4, nombre: "Monitor", precio: 199.99, disponible: true },
    { id: 5, nombre: "Auriculares", precio: 39.99, disponible: false }
  ];

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "8px" }}>
      <h3>Lista de productos</h3>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio.toFixed(2)}</td>
              <td style={{ color: producto.disponible ? "green" : "red" }}>
                {producto.disponible ? "Disponible" : "Agotado"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaProductos;