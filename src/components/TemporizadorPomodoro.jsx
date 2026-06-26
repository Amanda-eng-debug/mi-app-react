// src/components/TemporizadorPomodoro.jsx
import { useState, useEffect } from 'react';

function TemporizadorPomodoro() {
  const [tiempo, setTiempo] = useState(1500); 
  const [activo, setActivo] = useState(false);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    let intervalo = null;
    if (activo && tiempo > 0) {
      intervalo = setInterval(() => {
        setTiempo(prev => prev - 1);
      }, 1000);
    } else if (tiempo === 0 && activo) {
      setActivo(false);
      setMensaje('⏰ ¡Tiempo completado!');
    }
    return () => clearInterval(intervalo);
  }, [activo, tiempo]);

  const iniciar = () => {
    setActivo(true);
    setMensaje('');
  };
  const pausar = () => setActivo(false);
  const reiniciar = () => {
    setActivo(false);
    setTiempo(1500);
    setMensaje('');
  };

  const minutos = Math.floor(tiempo / 60);
  const segundos = tiempo % 60;
  const formato = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>Temporizador Pomodoro</h3>
      <p style={{ fontSize: '2em', fontWeight: 'bold' }}>{formato}</p>
      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
      <div>
        <button onClick={iniciar} disabled={activo} style={{ marginRight: '10px' }}>Iniciar</button>
        <button onClick={pausar} disabled={!activo} style={{ marginRight: '10px' }}>Pausar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>
    </div>
  );
}

export default TemporizadorPomodoro;