// src/laboratorios/Lab3.jsx
import Acordeon from '../components/Acordeon';
import Alerta from '../components/Alerta';
import BotonAccion from '../components/BotonAccion';
import Modal from '../components/Modal';
import Contador from '../components/Contador';
import ListaContactos from '../components/ListaContactos';
import FormularioEvento from '../components/FormularioEvento';
import { useState } from 'react';

function Laboratorio3() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <div className="app-container">
      <h1>📌 Laboratorio 3 </h1>

      <Acordeon titulo="Ejercicio 1: Alertas y Acordeón">
        <h3>Alertas:</h3>
        <Alerta tipo="exito" titulo="Éxito">Operación completada correctamente.</Alerta>
        <Alerta tipo="advertencia" titulo="Advertencia">Revisa tus datos antes de continuar.</Alerta>
        <Alerta tipo="error" titulo="Error">No se pudo guardar el registro.</Alerta>
        <Alerta tipo="info" titulo="Información">Este es un mensaje informativo.</Alerta>
      </Acordeon>

      <Acordeon titulo="Ejercicio 2: Modal, Botón y Contador">
        <h3>Modal:</h3>
        <BotonAccion texto="Abrir Modal" variante="primario" onClick={() => setModalAbierto(true)} />
        <Modal titulo="Ejemplo de Modal" abierto={modalAbierto}>
          <p>Este es el contenido del modal.</p>
          <BotonAccion texto="Cerrar" variante="secundario" onClick={() => setModalAbierto(false)} />
        </Modal>

        <h3>Contador:</h3>
        <Contador />
      </Acordeon>

      <Acordeon titulo="Ejercicio 3: Lista de Contactos">
        <ListaContactos />
      </Acordeon>

      <Acordeon titulo="Ejercicio 4: Formulario de Evento">
        <FormularioEvento />
      </Acordeon>
    </div>
  );
}

export default Laboratorio3;