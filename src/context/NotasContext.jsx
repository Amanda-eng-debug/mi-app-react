import { createContext, useContext, useReducer, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useNotificacion from '../hooks/useNotificacion'; 

const estadoInicial = {
  notas: [
    { id: '1', titulo: 'Reunión con equipo', contenido: 'Discutir el avance del proyecto y próximos sprints.', categoria: 'trabajo', fijada: true, fechaCreacion: new Date().toISOString() },
    { id: '2', titulo: 'Comprar regalo de cumpleaños', contenido: 'Recordar comprar el regalo para mamá.', categoria: 'personal', fijada: false, fechaCreacion: new Date().toISOString() },
    { id: '3', titulo: 'Estudiar React avanzado', contenido: 'Repasar Context API, useReducer y React Router.', categoria: 'estudio', fijada: true, fechaCreacion: new Date().toISOString() },
    { id: '4', titulo: 'Idea para nueva app', contenido: 'Crear una app de seguimiento de hábitos diarios.', categoria: 'ideas', fijada: false, fechaCreacion: new Date().toISOString() },
    { id: '5', titulo: 'Preparar presentación', contenido: 'Preparar slides para la reunión del viernes.', categoria: 'trabajo', fijada: false, fechaCreacion: new Date().toISOString() },
  ],
  filtroCategoria: 'todas',
  busqueda: '',
};

function notasReducer(estado, accion) {
  switch (accion.type) {
    case 'AGREGAR_NOTA':
      return { ...estado, notas: [...estado.notas, accion.payload] };
    case 'ELIMINAR_NOTA':
      return { ...estado, notas: estado.notas.filter(n => n.id !== accion.payload) };
    case 'EDITAR_NOTA':
      return {
        ...estado,
        notas: estado.notas.map(n =>
          n.id === accion.payload.id ? { ...n, ...accion.payload.datos } : n
        ),
      };
    case 'TOGGLE_FIJADA':
      return {
        ...estado,
        notas: estado.notas.map(n =>
          n.id === accion.payload ? { ...n, fijada: !n.fijada } : n
        ),
      };
    case 'CAMBIAR_FILTRO':
      return { ...estado, filtroCategoria: accion.payload };
    case 'CAMBIAR_BUSQUEDA':
      return { ...estado, busqueda: accion.payload };
    default:
      return estado;
  }
}

const NotasContext = createContext();

export function NotasProvider({ children }) {
  const [estado, dispatch] = useReducer(notasReducer, undefined, () => {
    try {
      const guardado = localStorage.getItem('notas-app');
      return guardado ? JSON.parse(guardado) : estadoInicial;
    } catch {
      return estadoInicial;
    }
  });

  useEffect(() => {
    localStorage.setItem('notas-app', JSON.stringify(estado));
  }, [estado]);

  
  const { notificacion, mostrar, cerrar } = useNotificacion(3000);

  const agregarNota = (nota) => {
    dispatch({ type: 'AGREGAR_NOTA', payload: nota });
    mostrar('✅ Nota agregada correctamente', 'exito');
  };

  const eliminarNota = (id) => {
    dispatch({ type: 'ELIMINAR_NOTA', payload: id });
    mostrar('🗑️ Nota eliminada', 'advertencia');
  };

  const editarNota = (id, datos) => {
    dispatch({ type: 'EDITAR_NOTA', payload: { id, datos } });
    mostrar('✏️ Nota actualizada', 'exito');
  };

  const toggleFijada = (id) => {
    dispatch({ type: 'TOGGLE_FIJADA', payload: id });
    mostrar('📌 Estado de fijado cambiado', 'info');
  };

  const cambiarFiltro = (filtro) => dispatch({ type: 'CAMBIAR_FILTRO', payload: filtro });
  const cambiarBusqueda = (busqueda) => dispatch({ type: 'CAMBIAR_BUSQUEDA', payload: busqueda });

  return (
    <NotasContext.Provider
      value={{
        estado,
        agregarNota,
        eliminarNota,
        editarNota,
        toggleFijada,
        cambiarFiltro,
        cambiarBusqueda,
      }}
    >
      {children}
      {notificacion && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: notificacion.tipo === 'exito' ? '#4caf50' : notificacion.tipo === 'advertencia' ? '#ff9800' : '#2196f3',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          zIndex: 1000,
          maxWidth: '300px',
        }}>
          {notificacion.mensaje}
          <button onClick={cerrar} style={{ marginLeft: '10px', background: 'transparent', border: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>×</button>
        </div>
      )}
    </NotasContext.Provider>
  );
}

export function useNotas() {
  const contexto = useContext(NotasContext);
  if (!contexto) {
    throw new Error('useNotas debe usarse dentro de un NotasProvider');
  }
  return contexto;
}