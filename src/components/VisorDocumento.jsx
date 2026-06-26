// src/components/VisorDocumento.jsx
import { useState, useEffect } from 'react';

function VisorDocumento() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador} - Mi App`;
    return () => {
      document.title = 'Mi App';
    };
  }, [contador]);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>Visor de Documento</h3>
      <p><strong>Título actual:</strong> "Contador: {contador} - Mi App"</p>
      <div>
        <button onClick={() => setContador(prev => prev + 1)} style={{ marginRight: '10px' }}>+1</button>
        <button onClick={() => setContador(prev => (prev > 0 ? prev - 1 : 0))}>-1</button>
      </div>
    </div>
  );
}

export default VisorDocumento;