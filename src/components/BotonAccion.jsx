// src/components/BotonAccion.jsx
function BotonAccion({ texto, variante = 'primario', disabled = false, onClick }) {
  const estilos = {
    primario: { backgroundColor: '#007bff', color: 'white' },
    secundario: { backgroundColor: '#6c757d', color: 'white' },
    peligro: { backgroundColor: '#dc3545', color: 'white' }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...estilos[variante],
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        margin: '4px',
        opacity: disabled ? 0.6 : 1
      }}
    >
      {texto}
    </button>
  );
}

export default BotonAccion;