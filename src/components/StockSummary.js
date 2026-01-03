function StockSummary({ products }) {
  const totalItems = products.reduce((sum, p) => sum + p.quantity, 0);
  const totalValue = products.reduce((sum, p) => sum + p.quantity * p.price, 0);

  return (
    <div className="stock-summary">
      <div className="summary-card">
        <p>Total produits: <span>{products.length}</span></p>
      </div>
      <div className="summary-card">
        <p>Total articles en stock: <span>{totalItems}</span></p>
      </div>
      <div className="summary-card">
        <p>Valeur totale du stock: <span>{totalValue.toFixed(2)} MAD</span></p>
      </div>
    </div>
  );
}

export default StockSummary;