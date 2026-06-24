// src/components/Alerta.jsx
function Alerta({ tipo = 'info', titulo, children }) {
  const config = {
    exito: { icono: '✅', color: '#d4edda', borde: '#c3e6cb', texto: '#155724' },
    advertencia: { icono: '⚠️', color: '#fff3cd', borde: '#ffeeba', texto: '#856404' },
    error: { icono: '❌', color: '#f8d7da', borde: '#f5c6cb', texto: '#721c24' },
    info: { icono: 'ℹ️', color: '#d1ecf1', borde: '#bee5eb', texto: '#0c5460' }
  };

  const estilo = {
    backgroundColor: config[tipo].color,
    border: `1px solid ${config[tipo].borde}`,
    color: config[tipo].texto,
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem 0'
  };

  return (
    <div style={estilo}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '1.5rem' }}>{config[tipo].icono}</span>
        <strong>{titulo}</strong>
      </div>
      <div style={{ marginTop: '0.5rem' }}>{children}</div>
    </div>
  );
}

export default Alerta;