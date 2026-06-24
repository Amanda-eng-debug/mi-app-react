// src/components/FormularioEvento.jsx
import { useState } from 'react';
import Alerta from './Alerta';
import BotonAccion from './BotonAccion';

function FormularioEvento() {
  
  const [form, setForm] = useState({
    titulo: '',
    fecha: '',
    categoria: '',
    descripcion: '',
    esPublico: false
  });

  
  const [errores, setErrores] = useState({});
  

  const [mensajeExito, setMensajeExito] = useState(null);
  

  const [eventosRegistrados, setEventosRegistrados] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errores[name]) {
      setErrores(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validar = () => {
    const nuevosErrores = {};
    
    if (form.titulo.trim().length < 5) {
      nuevosErrores.titulo = 'El título debe tener al menos 5 caracteres.';
    }
    
    if (!form.fecha) {
      nuevosErrores.fecha = 'La fecha es obligatoria.';
    } else {
      const fechaSel = new Date(form.fecha);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      if (fechaSel < hoy) {
        nuevosErrores.fecha = 'La fecha no puede ser pasada.';
      }
    }
    
    if (!form.categoria) {
      nuevosErrores.categoria = 'Debes seleccionar una categoría.';
    }
    
    if (form.descripcion.trim().length < 20) {
      nuevosErrores.descripcion = 'La descripción debe tener al menos 20 caracteres.';
    }
    
    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = validar();
    
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

   
    const nuevoEvento = {
      id: Date.now(), 
      titulo: form.titulo,
      fecha: form.fecha,
      categoria: form.categoria,
      descripcion: form.descripcion,
      esPublico: form.esPublico
    };

    setEventosRegistrados(prev => [...prev, nuevoEvento]);

    setMensajeExito(
      `✅ Evento registrado: "${form.titulo}" el ${form.fecha} - Categoría: ${form.categoria}`
    );

    setForm({
      titulo: '',
      fecha: '',
      categoria: '',
      descripcion: '',
      esPublico: false
    });
    setErrores({});

    setTimeout(() => setMensajeExito(null), 4000);
  };

  const isFormInvalid = !form.titulo.trim() || !form.fecha || !form.categoria || !form.descripcion.trim();

  return (
    <div>
      <h3>📅 Registro de Evento</h3>
      
      {/* Mensaje de éxito */}
      {mensajeExito && <Alerta tipo="exito" titulo="¡Registro exitoso!">{mensajeExito}</Alerta>}

      {/* FORMULARIO */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            name="titulo"
            type="text"
            value={form.titulo}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '5px', boxSizing: 'border-box' }}
          />
          {errores.titulo && <Alerta tipo="error" titulo="Error">{errores.titulo}</Alerta>}
        </div>

        <div>
          <label>Fecha:</label>
          <input
            name="fecha"
            type="date"
            value={form.fecha}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '5px', boxSizing: 'border-box' }}
          />
          {errores.fecha && <Alerta tipo="error" titulo="Error">{errores.fecha}</Alerta>}
        </div>

        <div>
          <label>Categoría:</label>
          <select
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '5px', boxSizing: 'border-box' }}
          >
            <option value="">Selecciona una categoría</option>
            <option value="conferencia">Conferencia</option>
            <option value="taller">Taller</option>
            <option value="seminario">Seminario</option>
            <option value="otro">Otro</option>
          </select>
          {errores.categoria && <Alerta tipo="error" titulo="Error">{errores.categoria}</Alerta>}
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            rows="3"
            style={{ width: '100%', padding: '8px', marginBottom: '5px', boxSizing: 'border-box' }}
          />
          {errores.descripcion && <Alerta tipo="error" titulo="Error">{errores.descripcion}</Alerta>}
        </div>

        <div>
          <label>
            <input
              name="esPublico"
              type="checkbox"
              checked={form.esPublico}
              onChange={handleChange}
            />
            Evento público
          </label>
        </div>

        <BotonAccion
          texto="Registrar Evento"
          variante="primario"
          onClick={handleSubmit}
          disabled={isFormInvalid}
        />
      </form>

     
      <div style={{ marginTop: '2rem', borderTop: '2px solid #eee', paddingTop: '1rem' }}>
        <h4>📋 Eventos registrados </h4>
        
        {eventosRegistrados.length === 0 ? (
          <p style={{ color: '#888' }}>No hay eventos registrados aún. Crea uno arriba.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5', textAlign: 'left' }}>
                <th style={{ padding: '8px', borderBottom: '2px solid #ddd' }}>Título</th>
                <th style={{ padding: '8px', borderBottom: '2px solid #ddd' }}>Fecha</th>
                <th style={{ padding: '8px', borderBottom: '2px solid #ddd' }}>Categoría</th>
                <th style={{ padding: '8px', borderBottom: '2px solid #ddd' }}>Visibilidad</th>
              </tr>
            </thead>
            <tbody>
              {eventosRegistrados.map(evento => (
                <tr key={evento.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '8px' }}><strong>{evento.titulo}</strong></td>
                  <td style={{ padding: '8px' }}>{evento.fecha}</td>
                  <td style={{ padding: '8px' }}>{evento.categoria}</td>
                  <td style={{ padding: '8px' }}>
                    {evento.esPublico ? '🌍 Público' : '🔒 Privado'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default FormularioEvento;