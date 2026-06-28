import { useParams, Link, useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import FormularioNota from '../components/FormularioNota';

function EditarNota() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { estado, editarNota } = useNotas();
  const nota = estado.notas.find(n => n.id === id);

  if (!nota) return <div><h2>❌ Nota no encontrada</h2><Link to="/notas">Volver</Link></div>;

  const handleGuardar = (datos) => {
    editarNota(id, datos);
    navigate(`/notas/${id}`);
  };

  return (
    <div>
      <h2>✏️ Editar nota</h2>
      <FormularioNota valoresIniciales={nota} onSubmit={handleGuardar} onCancel={() => navigate(`/notas/${id}`)} textoBoton="Actualizar nota" />
    </div>
  );
}

export default EditarNota;