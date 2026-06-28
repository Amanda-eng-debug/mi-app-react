import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function DetalleNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { estado, eliminarNota } = useNotas();
  const nota = estado.notas.find(n => n.id === id);

  if (!nota) return <div><h2>❌ Nota no encontrada</h2><Link to="/notas">Volver</Link></div>;

  const handleEliminar = () => {
    if (window.confirm('¿Eliminar esta nota?')) {
      eliminarNota(id);
      navigate('/notas');
    }
  };

  return (
    <div>
      <Link to="/notas">← Volver</Link>
      <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', background: 'white' }}>
        <h2 style={{ color: '#000', fontWeight: 'bold' }}>{nota.titulo}</h2>
        <p><strong>Categoría:</strong> {nota.categoria}</p>
        <p><strong>Fecha:</strong> {new Date(nota.fechaCreacion).toLocaleDateString()}</p>
        <p><strong>Contenido:</strong></p>
        <p style={{ whiteSpace: 'pre-wrap' }}>{nota.contenido}</p>
        <div>
          <Link to={`/notas/${id}/editar`}><button style={{ marginRight: '10px', padding: '8px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>✏️ Editar</button></Link>
          <button onClick={handleEliminar} style={{ padding: '8px 20px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>🗑️ Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export default DetalleNota;

