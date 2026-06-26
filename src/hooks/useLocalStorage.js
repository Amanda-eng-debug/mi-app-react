// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const item = localStorage.getItem(clave);
      return item !== null ? JSON.parse(item) : valorInicial;
    } catch (error) {
      console.error(`Error al leer "${clave}" de localStorage:`, error);
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      console.error(`Error al guardar "${clave}" en localStorage:`, error);
    }
  }, [clave, valor]);

  return [valor, setValor];
}

export default useLocalStorage;