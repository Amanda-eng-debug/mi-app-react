// src/laboratorios/Lab5.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotasProvider } from '../context/NotasContext';
import Layout from '../components/Layout';
import Inicio from '../pages/Inicio';
import Notas from '../pages/Notas';
import NuevaNota from '../pages/NuevaNota';
import EditarNota from '../pages/EditarNota';
import DetalleNota from '../pages/DetalleNota';
import NoEncontrada from '../pages/NoEncontrada';

function Laboratorio5() {
  return (
    <NotasProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="notas" element={<Notas />} />
            <Route path="notas/nueva" element={<NuevaNota />} />
            <Route path="notas/:id" element={<DetalleNota />} />
            <Route path="notas/:id/editar" element={<EditarNota />} />
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NotasProvider>
  );
}

export default Laboratorio5;