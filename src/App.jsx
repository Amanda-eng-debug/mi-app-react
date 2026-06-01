import './App.css'
import Perfil from './components/Perfil'
import Clima from './components/Clima'
import EstadoPedido from './components/EstadoPedido'  
import MensajeBienvenida from './components/MensajeBienvenida'
import ListaHabilidades from './components/ListaHabilidades'
import TablaProductos from './components/TablaProductos'
import ListaTareas from './components/ListaTareas'
import Tarjeta from './components/Tarjeta'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="app-container">
      <h1>Laboratorio 2  Componentes con JSX</h1>
      
      <h2>Ejercicio 1: Perfil</h2>
      <Perfil />
      
      <h2>Ejercicio 2: Clima</h2>
      <Clima />
      
      <h2>Ejercicio 3: Estado del pedido</h2>
      <EstadoPedido />   
      
      <h2>Ejercicio 4: Mensaje de bienvenida</h2>
      <MensajeBienvenida />

      <h2>Ejercicio 5: Lista de habilidades</h2>
      <ListaHabilidades />

      <h2>Ejercicio 6: Tabla de productos</h2>
       <TablaProductos />

      <h2>Ejercicio 7: Lista de tareas</h2>
      <ListaTareas />

      <h2>Ejercicio 8: Tarjeta</h2>
      <Tarjeta />

      <h2>Ejercicio 9: Dashboard</h2>
      <Dashboard />

    </div>
  )
}

export default App