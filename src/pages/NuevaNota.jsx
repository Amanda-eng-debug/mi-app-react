import { useNavigate } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';
import FormularioNota from '../components/FormularioNota';

function NuevaNota() {
  const navigate = useNavigate();
  const { agregarNota } = useNotas();

  const handleGuardar = (datos) => {
    const nuevaNota = { id: Date.now().toString(), ...datos, fechaCreacion: new Date().toISOString() };
    agregarNota(nuevaNota);
    navigate('/notas');
  };

  return (
    <div>
      <h2>✏️ Nueva nota</h2>
      <FormularioNota valoresIniciales={{ titulo: '', contenido: '', categoria: 'personal', fijada: false }} onSubmit={handleGuardar} onCancel={() => navigate('/notas')} textoBoton="Guardar nota" />
    </div>
  );
}

export default NuevaNota;