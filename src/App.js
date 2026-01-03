import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import SearchBar from "./components/SearchBar";
import StockSummary from "./components/StockSummary";

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("inventoryProducts");

    if (savedProducts) {
      return JSON.parse(savedProducts);
    }

    // Default products if localStorage is empty !!!

    return [
      {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        quantity: 10,
        price: 1200.0,
      },
      {
        id: 2,
        name: "Desk Chair",
        category: "Furniture",
        quantity: 5,
        price: 250.0,
      },
      {
        id: 3,
        name: "Notebook",
        category: "Stationery",
        quantity: 100,
        price: 5.0,
      },
    ];
  });

  const [searchText, setSearchText] = useState("");

  // Save products to localStorage

  useEffect(() => {
    localStorage.setItem("inventoryProducts", JSON.stringify(products));
  }, [products]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleAdd = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleEdit = (id, updatedProduct) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
    );
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchText.toLowerCase()) ||
      p.category.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <div className="header-container">
          <h1>Stock Manager</h1>

          <nav>
            <Link to="/">Liste</Link>
            <Link to="/add">Ajouter</Link>
            <Link to="/summary">Résumé</Link>
          </nav>
        </div>

        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar searchText={searchText} onSearch={handleSearch} />
                  <ProductList
                    products={filteredProducts}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                  />
                </>
              }
            />
            <Route path="/add" element={<AddProductForm onAdd={handleAdd} />} />
            <Route
              path="/summary"
              element={<StockSummary products={filteredProducts} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
