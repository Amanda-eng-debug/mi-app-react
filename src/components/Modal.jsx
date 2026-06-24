// src/components/Modal.jsx
function Modal({ titulo, abierto, children }) {
  if (!abierto) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '1.5rem',
        maxWidth: '400px',
        width: '90%',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3>{titulo}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;