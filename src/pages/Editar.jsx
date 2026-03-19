import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Editar({ productos = [], setProductos }) {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: ''
  });

  useEffect(() => {
    if (productos && productos.length > 0) {
      const productoAEditar = productos.find(p => p.id === parseInt(id));
      if (productoAEditar) {
        setFormData(productoAEditar);
      }
    }
  }, [id, productos]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosProductos = productos.map(p => 
      p.id === parseInt(id) ? { ...formData, id: parseInt(id) } : p
    );
    setProductos(nuevosProductos);
    navigate('/'); 
  };

  if (!productos || productos.length === 0) {
    return <div className="container"><h3>Cargando datos...</h3></div>;
  }

  return (
    <div className="container">
      <h2>Modificar Repuesto</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <label>Nombre:</label>
        <input name="name" value={formData.name} onChange={handleChange} required />
        
        <label>Precio:</label>
        <input name="price" value={formData.price} onChange={handleChange} required />
        
        <label>Categoría:</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Fruta">Fruta</option>
          <option value="Vegetales">Vegetales</option>
          <option value="Heladeras">Heladeras</option>
          <option value="Aire Acondicionado">Aire Acondicionado</option>
        </select>
        
        <div style={{marginTop: '20px'}}>
          <button type="submit" className="btn-guardar">Guardar Cambios</button>
          <button type="button" onClick={() => navigate('/')} className="btn-cancelar" style={{marginLeft: '10px'}}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
} // <-- ESTA ES LA LLAVE QUE TE FALTABA

export default Editar;