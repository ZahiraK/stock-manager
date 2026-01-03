import React, { useState } from "react";

function ProductItem({ product, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    category: product.category,
    quantity: product.quantity,
    price: product.price,
  });

  const handleSave = () => {
    onEdit(product.id, editedProduct);
    setIsEditing(false);
  };

  return (
    <tr key={product.id}>
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              value={editedProduct.name}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, name: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={editedProduct.category}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, category: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="number"
              value={editedProduct.quantity}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  quantity: parseInt(e.target.value) || 0,
                })
              }
            />
          </td>
          <td>
            <input
              type="number"
              value={editedProduct.price}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  price: parseFloat(e.target.value) || 0,
                })
              }
            />
          </td>
          <td>
            <div className="action-buttons">
              <button className="save-btn" onClick={handleSave}>Sauvegarder</button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>Annuler</button>
            </div>
          </td>
        </>
      ) : (
        <>
          <td>{product.name}</td>
          <td>{product.category}</td>
          <td>{product.quantity}</td>
          <td>{product.price} MAD</td>
          <td>
            <div className="action-buttons">
              <button className="modify-btn" onClick={() => setIsEditing(true)}>Modifier</button>
              <button className="delete-btn" onClick={() => onDelete(product.id)}>Supprimer</button>
            </div>
          </td>
        </>
      )}
    </tr>
  );
}

export default ProductItem;
