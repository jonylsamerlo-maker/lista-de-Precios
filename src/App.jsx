import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Nuevo from './pages/Nuevo';
import Editar from './pages/Editar';
import './App.css';

const INITIAL_PRODUCTS = [
  {id: 1, category: "Fruta", price: "1000", stocked: true, name: "Manzana"},
  {id: 2, category: "Fruta", price: "2000", stocked: true, name: "Melon"},
  {id: 3, category: "Vegetales", price: "200", stocked: true, name: "Espinacas"},
];

export default function App() {
  // Usamos "productos" para que coincida con el resto de tus archivos
  const [productos, setProductos] = useState(INITIAL_PRODUCTS);

  const addProduct = (newP) => {
    const nuevoConId = { ...newP, id: Date.now() };
    setProductos([...productos, nuevoConId]);
  };

  const deleteProduct = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="main-container">
        <Routes>
  <Route path="/" element={<Home products={productos} onDelete={deleteProduct} />} />
  
  {/* IMPORTANTE: Mandamos "productos" y "setProductos" */}
  <Route path="/editar/:id" element={<Editar productos={productos} setProductos={setProductos} />} />
  
  <Route path="/nuevo" element={<Nuevo onAdd={addProduct} />} />
</Routes>
      </div>
    </BrowserRouter>
  );
}