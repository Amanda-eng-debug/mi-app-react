// src/components/ListaContactos.jsx
import { useState } from 'react';
import Alerta from './Alerta';
import Modal from './Modal';
import BotonAccion from './BotonAccion';

function ListaContactos() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: 'Ana García', telefono: '123456789', favorito: true },
    { id: 2, nombre: 'Carlos López', telefono: '987654321', favorito: false },
    { id: 3, nombre: 'María Pérez', telefono: '555123456', favorito: true },
    { id: 4, nombre: 'Juan Martínez', telefono: '444987654', favorito: false },
    { id: 5, nombre: 'Laura Fernández', telefono: '666555333', favorito: true }
  ]);

  const [busqueda, setBusqueda] = useState('');
  const [soloFavoritos, setSoloFavoritos] = useState(false);
  const [contactoAEliminar, setContactoAEliminar] = useState(null);

  // Filtrado en tiempo real (inmutable: no modifica el array original)
  const contactosFiltrados = contactos.filter(contacto => {
    const coincideBusqueda = contacto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                             contacto.telefono.includes(busqueda);
    const cumpleFavorito = soloFavoritos ? contacto.favorito : true;
    return coincideBusqueda && cumpleFavorito;
  });

  const totalFavoritos = contactos.filter(c => c.favorito).length;

  // Alternar favorito (inmutable con map)
  const toggleFavorito = (id) => {
    setContactos(prev =>
      prev.map(c => c.id === id ? { ...c, favorito: !c.favorito } : c)
    );
  };

  // Eliminar (inmutable con filter)
  const eliminarContacto = () => {
    if (contactoAEliminar) {
      setContactos(prev => prev.filter(c => c.id !== contactoAEliminar.id));
      setContactoAEliminar(null);
    }
  };

  return (
    <div>
      <h3>📇 Lista de Contactos</h3>
      
      <input
        type="text"
        placeholder="Buscar por nombre o teléfono..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: '8px', width: '100%', marginBottom: '10px', boxSizing: 'border-box' }}
      />

      <div>
        <label>
          <input
            type="checkbox"
            checked={soloFavoritos}
            onChange={() => setSoloFavoritos(!soloFavoritos)}
          />
          Mostrar solo favoritos
        </label>
      </div>

      <p>
        Total: {contactos.length} | Favoritos: {totalFavoritos} | Resultados: {contactosFiltrados.length}
      </p>

      {contactosFiltrados.length === 0 ? (
        <Alerta tipo="info" titulo="Sin resultados">No se encontraron contactos.</Alerta>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {contactosFiltrados.map(contacto => (
            <li key={contacto.id} style={{ border: '1px solid #ddd', marginBottom: '8px', padding: '10px', borderRadius: '4px' }}>
              <div>
                <strong>{contacto.nombre}</strong> - {contacto.telefono}
                <span
                  onClick={() => toggleFavorito(contacto.id)}
                  style={{ cursor: 'pointer', marginLeft: '10px', fontSize: '1.4rem' }}
                >
                  {contacto.favorito ? '⭐' : '☆'}
                </span>
                <BotonAccion texto="Eliminar" variante="peligro" onClick={() => setContactoAEliminar(contacto)} />
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Modal de confirmación */}
      <Modal titulo="Confirmar eliminación" abierto={contactoAEliminar !== null}>
        {contactoAEliminar && (
          <>
            <p>¿Estás seguro de eliminar a <strong>{contactoAEliminar.nombre}</strong>?</p>
            <BotonAccion texto="Cancelar" variante="secundario" onClick={() => setContactoAEliminar(null)} />
            <BotonAccion texto="Eliminar" variante="peligro" onClick={eliminarContacto} />
          </>
        )}
      </Modal>
    </div>
  );
}

export default ListaContactos;