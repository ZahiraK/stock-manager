import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onDelete, onEdit }) {
  if (products.length === 0) {
    return <p>Aucun produit trouvé.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Catégorie</th>
          <th>Quantité</th>
          <th>Prix</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <ProductItem
            key={p.id}
            product={p}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;