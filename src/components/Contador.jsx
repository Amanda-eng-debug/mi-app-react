// src/components/Contador.jsx
import { useState } from 'react';
import BotonAccion from './BotonAccion';
import Alerta from './Alerta';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(prev => prev + 1);
  const incrementar5 = () => setContador(prev => prev + 5);
  const decrementar = () => setContador(prev => (prev > 0 ? prev - 1 : 0));
  const reiniciar = () => setContador(0);

  return (
    <div>
      <h3>Contador: {contador}</h3>
      <BotonAccion texto="-1" variante="secundario" onClick={decrementar} disabled={contador === 0} />
      <BotonAccion texto="+1" variante="primario" onClick={incrementar} />
      <BotonAccion texto="+5" variante="primario" onClick={incrementar5} />
      <BotonAccion texto="Reiniciar" variante="peligro" onClick={reiniciar} />

      {contador === 0 && <Alerta tipo="info" titulo="Información">El contador está en cero</Alerta>}
      {contador > 10 && <Alerta tipo="advertencia" titulo="Atención">¡Valor alto!</Alerta>}
    </div>
  );
}

export default Contador;