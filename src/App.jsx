// src/App.jsx
import { useState } from 'react';
import './App.css';
import Laboratorio1 from './laboratorios/Lab1';
import Laboratorio2 from './laboratorios/Lab2';
import Laboratorio3 from './laboratorios/Lab3';
import Laboratorio4 from './laboratorios/Lab4';
import Laboratorio5 from './laboratorios/Lab5';

function App() {
  const [lab, setLab] = useState(5); 
  return (
    <div className="app">
      <div style={{
        padding: '15px',
        backgroundColor: '#f0f0f0',
        borderBottom: '2px solid #ccc',
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '20px'
      }}>
        <button onClick={() => setLab(1)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          📁 Laboratorio 1
        </button>
        <button onClick={() => setLab(2)} style={{ 
          padding: '8px 16px', 
          cursor: 'pointer',
          backgroundColor: lab === 2 ? '#007bff' : '#e0e0e0',
          color: lab === 2 ? 'white' : 'black',
          border: 'none',
          borderRadius: '4px'
        }}>
          📁 Laboratorio 2
        </button>
        <button onClick={() => setLab(3)} style={{ 
          padding: '8px 16px', 
          cursor: 'pointer',
          backgroundColor: lab === 3 ? '#007bff' : '#e0e0e0',
          color: lab === 3 ? 'white' : 'black',
          border: 'none',
          borderRadius: '4px'
        }}>
          📁 Laboratorio 3
        </button>
        <button onClick={() => setLab(4)} style={{ 
          padding: '8px 16px', 
          cursor: 'pointer',
          backgroundColor: lab === 4 ? '#007bff' : '#e0e0e0',
          color: lab === 4 ? 'white' : 'black',
          border: 'none',
          borderRadius: '4px'
        }}>
          📁 Laboratorio 4
        </button>
        <button onClick={() => setLab(5)} style={{ 
          padding: '8px 16px', 
          cursor: 'pointer',
          backgroundColor: lab === 5 ? '#007bff' : '#e0e0e0',
          color: lab === 5 ? 'white' : 'black',
          border: 'none',
          borderRadius: '4px'
        }}>
          📁 Laboratorio 5
        </button>
      </div>

      {lab === 1 && <Laboratorio1 />}
      {lab === 2 && <Laboratorio2 />}
      {lab === 3 && <Laboratorio3 />}
      {lab === 4 && <Laboratorio4 />}
      {lab === 5 && <Laboratorio5 />}
    </div>
  );
}

export default App;