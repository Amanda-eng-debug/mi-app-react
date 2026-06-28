import { useNotas } from '../context/NotasContext';

function Inicio() {
  const { estado } = useNotas();
  const total = estado.notas.length;
  const fijadas = estado.notas.filter(n => n.fijada).length;
  const categorias = ['personal', 'trabajo', 'estudio', 'ideas'];
  const conteoCategorias = categorias.map(cat => ({
    categoria: cat,
    cantidad: estado.notas.filter(n => n.categoria === cat).length,
  }));

  return (
    <div>
      <h2>📊 Resumen</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', margin: '20px 0' }}>
        <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '8px', flex: '1 1 150px' }}>
          <h3>Total notas</h3>
          <p style={{ fontSize: '2rem', margin: 0 }}>{total}</p>
        </div>
        <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '8px', flex: '1 1 150px' }}>
          <h3>Fijadas</h3>
          <p style={{ fontSize: '2rem', margin: 0 }}>{fijadas}</p>
        </div>
        <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '8px', flex: '1 1 200px' }}>
          <h3>Por categoría</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {conteoCategorias.map(({ categoria, cantidad }) => (
              <li key={categoria}><strong>{categoria}:</strong> {cantidad}</li>
            ))}
          </ul>
        </div>
      </div>
      <p>¡Bienvenido a tu gestor de notas!</p>
    </div>
  );
}

export default Inicio;