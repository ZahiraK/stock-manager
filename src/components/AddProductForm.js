import React, { useState } from 'react';

function AddProductForm({ onAdd }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !quantity || !price) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    onAdd({
      id: Date.now(),
      name,
      category,
      quantity: parseInt(quantity),
      price: parseFloat(price),
    });
    setName('');
    setCategory('');
    setQuantity('');
    setPrice('');
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Catégorie"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantité"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prix"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className='submit-btn' type="submit">Ajouter</button>
    </form>
  );
}

export default AddProductForm;
