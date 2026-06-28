import { Link } from 'react-router-dom';

function NoEncontrada() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default NoEncontrada;