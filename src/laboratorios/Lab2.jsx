// src/laboratorios/Lab2.jsx
import Perfil from '../components/Perfil';
import Clima from '../components/Clima';
import EstadoPedido from '../components/EstadoPedido';
import MensajeBienvenida from '../components/MensajeBienvenida';
import ListaHabilidades from '../components/ListaHabilidades';
import TablaProductos from '../components/TablaProductos';
import ListaTareas from '../components/ListaTareas';
import Tarjeta from '../components/Tarjeta';
import Dashboard from '../components/Dashboard';

function Laboratorio2() {
  return (
    <div className="app-container">
      <h1>Laboratorio 2</h1>
      
      <section><h2>Ejercicio 1: Perfil</h2><Perfil /></section>
      <section><h2>Ejercicio 2: Clima</h2><Clima /></section>
      <section><h2>Ejercicio 3: Estado del pedido</h2><EstadoPedido /></section>
      <section><h2>Ejercicio 4: Mensaje de bienvenida</h2><MensajeBienvenida /></section>
      <section><h2>Ejercicio 5: Lista de habilidades</h2><ListaHabilidades /></section>
      <section><h2>Ejercicio 6: Tabla de productos</h2><TablaProductos /></section>
      <section><h2>Ejercicio 7: Lista de tareas</h2><ListaTareas /></section>
      <section><h2>Ejercicio 8: Tarjeta</h2><Tarjeta /></section>
      <section><h2>Ejercicio 9: Dashboard</h2><Dashboard /></section>
    </div>
  );
}

export default Laboratorio2;