import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Nuevo({ onAdd }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Fruta');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    onAdd({ category, price: `$${price}`, stocked: true, name });
    navigate('/'); 
  };

  return (
    <div className="form-container">
      <h2>Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Fruta">Fruta</option>
          <option value="Vegetales">Vegetales</option>
        </select>
        <div className="button-group">
          <button type="submit">Guardar</button>
          <Link to="/" className="btn-cancel">Cancelar</Link>
        </div>
      </form>
    </div>
  );
}