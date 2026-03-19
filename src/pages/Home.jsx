import React from 'react';
import { Link } from 'react-router-dom';

// IMPORTANTE: Recibimos "products" (con S) porque así lo mandamos desde App.jsx
function Home({ products, onDelete }) {
  
  // Fusible: si products no llega, mostramos un aviso en lugar de pantalla blanca
  if (!products) {
    return <div className="container"><h3>Cargando productos...</h3></div>;
  }

  return (
    <div className="container">
      <h1>Lista de Precios - Verduleria Doña Lita</h1>
      <Link to="/nuevo" className="btn-nuevo">Nuevo ingreso</Link>
      
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              {/* Usamos p.name y p.price porque así están en tu INITIAL_PRODUCTS */}
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
              <td>
                <Link to={`/editar/${p.id}`} className="btn-editar" style={{marginRight: '10px'}}>
                  Modificar
                </Link>

                <button onClick={() => onDelete(p.id)} className="btn-eliminar">
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;