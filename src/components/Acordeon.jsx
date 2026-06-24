// src/components/Acordeon.jsx
import { useState } from 'react';

function Acordeon({ titulo, children }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '1rem', borderRadius: '8px' }}>
      <div
        onClick={() => setExpandido(!expandido)}
        style={{
          padding: '1rem',
          cursor: 'pointer',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px 8px 0 0',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span>{titulo}</span>
        <span>{expandido ? '▼' : '►'}</span>
      </div>
      {expandido && <div style={{ padding: '1rem', borderTop: '1px solid #eee' }}>{children}</div>}
    </div>
  );
}

export default Acordeon;