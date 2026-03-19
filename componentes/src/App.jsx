
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Nuevo from './pages/Nuevo';
import './App.css';

const INITIAL_PRODUCTS = [
  {category: "Fruta", price: "$1000", stocked: true, name: "Manzana"},
  {category: "Fruta", price: "$2000", stocked: true, name: "Melon"},
  {category: "Vegetales", price: "$200", stocked: true, name: "Espinacas"},
];

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  const addProduct = (newP) => setProducts([...products, newP]);
  const deleteProduct = (name) => setProducts(products.filter(p => p.name !== name));

  return (
    <BrowserRouter>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home products={products} onDelete={deleteProduct} />} />
          <Route path="/nuevo" element={<Nuevo onAdd={addProduct} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}