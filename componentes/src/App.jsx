
import { useState } from 'react';
import './App.css';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="main-container"> 
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}
   
  

function ProductCategoryRow({ category }) {
  return (
    
    <tr>
      {/* Agregamos la clase category-row aquí */}
      <th colSpan="2" className="category-row">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Buscanding.." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        ---si haces click veras el stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruta", price: "$1000", stocked: true, name: "Manzana"},
  {category: "Fruta", price: "$2000", stocked: true, name: "Melon"},
  {category: "Fruta", price: "$500", stocked: false, name: "Arandano"},
  {category: "Vegetales", price: "$200", stocked: true, name: "Spinacas"},
  {category: "Vegetales", price: "$400", stocked: false, name: "Acelga"},
  {category: "Vegetales", price: "$100", stocked: true, name: "puerros"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

