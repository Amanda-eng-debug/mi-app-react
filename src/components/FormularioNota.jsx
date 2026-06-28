import { useState } from 'react';

function FormularioNota({ valoresIniciales, onSubmit, onCancel, textoBoton = 'Guardar' }) {
  const [form, setForm] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Limpiar error del campo al escribir
    if (errores[name]) {
      setErrores(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validación en tiempo real para deshabilitar el botón
  const esValido = () => {
    return form.titulo.trim().length >= 3 && form.contenido.trim().length >= 10;
  };

  const validar = () => {
    const nuevosErrores = {};
    if (form.titulo.trim().length < 3) {
      nuevosErrores.titulo = 'El título debe tener al menos 3 caracteres.';
    }
    if (form.contenido.trim().length < 10) {
      nuevosErrores.contenido = 'El contenido debe tener al menos 10 caracteres.';
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
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontWeight: 'bold' }}>Título:</label>
        <input
          type="text"
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {errores.titulo && <p style={{ color: 'red', margin: '5px 0' }}>{errores.titulo}</p>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontWeight: 'bold' }}>Contenido:</label>
        <textarea
          name="contenido"
          value={form.contenido}
          onChange={handleChange}
          rows="5"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {errores.contenido && <p style={{ color: 'red', margin: '5px 0' }}>{errores.contenido}</p>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontWeight: 'bold' }}>Categoría:</label>
        <select
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="checkbox"
            name="fijada"
            checked={form.fijada}
            onChange={handleChange}
          /> Fijar nota
        </label>
      </div>

      <div>
        {/* Botón de guardar deshabilitado si el formulario no es válido */}
        <button
          type="submit"
          style={{
            marginRight: '10px',
            padding: '8px 20px',
            background: esValido() ? '#007bff' : '#cccccc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: esValido() ? 'pointer' : 'not-allowed',
          }}
          disabled={!esValido()}
        >
          {textoBoton}
        </button>
        <button
          type="button"
          onClick={onCancel}
          style={{
            padding: '8px 20px',
            background: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default FormularioNota;