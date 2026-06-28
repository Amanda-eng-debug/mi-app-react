import { Outlet, NavLink } from 'react-router-dom';
import { useNotas } from '../context/NotasContext';

function Layout() {
  const { estado } = useNotas();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#f0f0f0', padding: '20px', borderBottom: '2px solid #ccc' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#000'  }}>📓 MisNotas</h1>
        <nav style={{ marginTop: '10px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <NavLink to="/" style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#007bff' : 'black',
            textDecoration: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            backgroundColor: isActive ? '#e0e0e0' : 'transparent',
          })}>Inicio</NavLink>
          <NavLink to="/notas" style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#007bff' : 'black',
            textDecoration: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            backgroundColor: isActive ? '#e0e0e0' : 'transparent',
          })}>Notas</NavLink>
          <NavLink to="/notas/nueva" style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#007bff' : 'black',
            textDecoration: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            backgroundColor: isActive ? '#e0e0e0' : 'transparent',
          })}>+ Nueva nota</NavLink>
        </nav>
        <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#555' }}>
          Total de notas: {estado.notas.length}
        </div>
      </header>

      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>

      <footer style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', borderTop: '1px solid #ccc' }}>
        <p style={{ margin: 0 }}>© 2026 MisNotas</p>
      </footer>
    </div>
  );
}

export default Layout;