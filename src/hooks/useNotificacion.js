// src/hooks/useNotification.js
import { useState, useEffect } from 'react';

function useNotification(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null);

  const mostrar = (mensaje, tipo = 'info') => {
    setNotificacion({ id: Date.now(), mensaje, tipo });
  };

  const cerrar = () => {
    setNotificacion(null);
  };

  useEffect(() => {
    if (notificacion) {
      const timer = setTimeout(() => {
        cerrar();
      }, duracion);
      return () => clearTimeout(timer);
    }
  }, [notificacion, duracion]);

  return { notificacion, mostrar, cerrar };
}

export default useNotification;