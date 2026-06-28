import { Link } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function Notas() {
  const { estado, toggleFijada, cambiarFiltro, cambiarBusqueda } = useNotas();
  const { notas, filtroCategoria, busqueda } = estado;

  // Filtrado
  const notasFiltradas = notas.filter(nota => {
    const coincideBusqueda = nota.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                             nota.contenido.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = filtroCategoria === 'todas' || nota.categoria === filtroCategoria;
    return coincideBusqueda && coincideCategoria;
  });

  // Separar fijadas y no fijadas, y ordenar
  const fijadas = notasFiltradas.filter(n => n.fijada);
  const noFijadas = notasFiltradas.filter(n => !n.fijada);
  const notasOrdenadas = [...fijadas, ...noFijadas];

  // 🎨 Colores por categoría
  const coloresCategoria = {
    personal: { bg: '#e3f2fd', text: '#0d47a1', border: '#90caf9' },
    trabajo: { bg: '#e8f5e9', text: '#1b5e20', border: '#a5d6a7' },
    estudio: { bg: '#fff3e0', text: '#e65100', border: '#ffcc80' },
    ideas: { bg: '#f3e5f5', text: '#4a148c', border: '#ce93d8' },
  };

  return (
    <div style={{ padding: '10px 0' }}>
      <h2>📋 Lista de notas</h2>

      {/* Filtros */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Buscar por título o contenido..."
          value={busqueda}
          onChange={(e) => cambiarBusqueda(e.target.value)}
          style={{
            padding: '10px',
            flex: '1 1 200px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
        <select
          value={filtroCategoria}
          onChange={(e) => cambiarFiltro(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            background: 'white',
            color: '#333',
          }}
        >
          <option value="todas" style={{ color: '#333' }}>Todas las categorías</option>
          <option value="personal" style={{ color: '#333' }}>Personal</option>
          <option value="trabajo" style={{ color: '#333' }}>Trabajo</option>
          <option value="estudio" style={{ color: '#333' }}>Estudio</option>
          <option value="ideas" style={{ color: '#333' }}>Ideas</option>
        </select>
        <span style={{ alignSelf: 'center', fontSize: '0.9rem', color: '#555' }}>
          Mostrando {notasOrdenadas.length} de {notas.length} notas
        </span>
      </div>

      {/* Lista de notas */}
      {notasOrdenadas.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888', padding: '40px 0' }}>
          No hay notas que coincidan con los filtros.
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {notasOrdenadas.map(nota => {
            const color = coloresCategoria[nota.categoria] || coloresCategoria.ideas;
            return (
              <div
                key={nota.id}
                style={{
                  border: nota.fijada ? '3px solid #ffc107' : '1px solid #ddd',
                  borderRadius: '12px',
                  padding: '18px',
                  background: nota.fijada ? '#fffde7' : 'white',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
                  position: 'relative',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.08)';
                }}
              >
                <Link to={`/notas/${nota.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: '#333' }}>
                    {nota.titulo}
                  </h3>
                  <p style={{ margin: '0 0 12px 0', fontSize: '0.95rem', color: '#555', lineHeight: '1.4' }}>
                    {nota.contenido.length > 100 ? nota.contenido.slice(0, 100) + '...' : nota.contenido}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                    {/* Badge de categoría con color personalizado */}
                    <span
                      style={{
                        backgroundColor: color.bg,
                        color: color.text,
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        border: `1px solid ${color.border}`,
                        textTransform: 'capitalize',
                      }}
                    >
                      {nota.categoria}
                    </span>
                    {nota.fijada && <span style={{ fontSize: '1rem' }}>📌</span>}
                    <span style={{ fontSize: '0.7rem', color: '#888', marginLeft: 'auto' }}>
                      {new Date(nota.fechaCreacion).toLocaleDateString()}
                    </span>
                  </div>
                </Link>
                {/* Botón para fijar/desfijar */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFijada(nota.id);
                  }}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.4rem',
                    padding: '4px',
                    borderRadius: '50%',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  {nota.fijada ? '⭐' : '☆'}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Notas;