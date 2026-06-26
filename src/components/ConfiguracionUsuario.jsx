// src/components/ConfiguracionUsuario.jsx
import { useState, useEffect } from 'react';

function ConfiguracionUsuario() {
 
  const [config, setConfig] = useState(() => {
    try {
      const guardado = localStorage.getItem('config-usuario');
      if (guardado) {
        return JSON.parse(guardado);
      }
    } catch (error) {
      console.error('Error al leer configuración:', error);
    }
    return { nombre: '', tema: 'claro', notificaciones: true };
  });

  
  useEffect(() => {
    localStorage.setItem('config-usuario', JSON.stringify(config));
  }, [config]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const restablecer = () => {
    setConfig({ nombre: '', tema: 'claro', notificaciones: true });
    localStorage.removeItem('config-usuario');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>Configuración de Usuario</h3>
      <div style={{ marginBottom: '10px' }}>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={config.nombre}
          onChange={handleChange}
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Tema:</label>
        <select
          name="tema"
          value={config.tema}
          onChange={handleChange}
          style={{ marginLeft: '10px', padding: '5px' }}
        >
          <option value="claro">Claro</option>
          <option value="oscuro">Oscuro</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          <input
            type="checkbox"
            name="notificaciones"
            checked={config.notificaciones}
            onChange={handleChange}
          />
          Notificaciones activas
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={restablecer}>Restablecer valores</button>
      </div>
      <div style={{ background: '#f0f0f0', padding: '10px', borderRadius: '4px' }}>
        <strong>Configuración actual:</strong>
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ConfiguracionUsuario;