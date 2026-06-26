// src/laboratorios/Lab4.jsx
import { useState } from 'react';
import VisorDocumento from '../components/VisorDocumento';
import TemporizadorPomodoro from '../components/TemporizadorPomodoro';
import ConfiguracionUsuario from '../components/ConfiguracionUsuario';

function Laboratorio4() {
  
  const [mostrarVisor, setMostrarVisor] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📌 Laboratorio 4 </h1>

      {/* Ejercicio 1 */}
      <section style={{ marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h2>Ejercicio 1: Visor de Documento</h2>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => setMostrarVisor(true)} style={{ marginRight: '10px' }}>Montar</button>
          <button onClick={() => setMostrarVisor(false)}>Desmontar</button>
          <span style={{ marginLeft: '10px' }}>
            Estado: {mostrarVisor ? '🟢 Visible' : '🔴 Oculto'}
          </span>
        </div>
        {mostrarVisor && <VisorDocumento />}
      </section>

      {/* Ejercicio 2 */}
      <section style={{ marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h2>Ejercicio 2: Temporizador Pomodoro</h2>
        <TemporizadorPomodoro />
      </section>

      {/* Ejercicio 3 */}
      <section style={{ marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h2>Ejercicio 3: Configuración de Usuario </h2>
        <ConfiguracionUsuario />
      </section>

     {/* Ejercicio 4 */}
      <section style={{ marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h2>Ejercicio 4: Custom Hooks</h2>
        <p>Los hooks <code>useLocalStorage</code> y <code>useNotification</code> están creados en <code>src/hooks/</code>.</p>
      </section>/
    </div>
  );
}

export default Laboratorio4;