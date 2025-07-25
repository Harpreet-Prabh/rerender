import { useEffect, useState } from "react";
import "./Product.css";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 100,
    quantity: 10,
    description: "This is a laptop",
    inStock: true,
  },
  {
    id: 2,
    name: "Phone",
    price: 200,
    quantity: 20,
    description: "This is a phone",
    inStock: true,
  },
  {
    id: 3,
    name: "Tablet",
    price: 300,
    quantity: 30,
    description: "This is a tablet",
    inStock: true,
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 400,
    quantity: 40,
    description: "This is a smartwatch",
    inStock: true,
  },
  {
    id: 5,
    name: "Headphones",
    price: 500,
    quantity: 50,
    description: "This is a headphones",
    inStock: false,
  },
  {
    id: 6,
    name: "Keyboard",
    price: 600,
    quantity: 60,
    description: "This is a keyboard",
    inStock: false,
  },
  {
    id: 7,
    name: "Mouse",
    price: 700,
    quantity: 70,
    description: "This is a mouse",
    inStock: true,
  },
  {
    id: 8,
    name: "Speaker",
    price: 800,
    quantity: 80,
    description: "This is a speaker",
    inStock: true,
  },
  {
    id: 9,
    name: "Monitor",
    price: 900,
    quantity: 90,
    description: "This is a monitor",
    inStock: true,
  },
  {
    id: 10,
    name: "Printer",
    price: 1000,
    quantity: 100,
    description: "This is a printer",
    inStock: false,
  },
];

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [showOnlyInStock, setShowOnlyInStock] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const filteredProducts = initialProducts.filter((product) => {
      let userInput = searchValue.toLowerCase();
      let productName = product.name.toLowerCase();
      if (showOnlyInStock == "inStock") {
        return product.inStock && productName.includes(userInput);
      } else if (showOnlyInStock === "outOfStock") {
        return !product.inStock && productName.includes(userInput);
      }
      return productName.includes(userInput);
    });
    setFilteredProducts(filteredProducts);
  }, [showOnlyInStock, searchValue]);

  function handleSearch(e) {
    setSearchValue(e.target.value);
    console.log(searchValue);
  }

  function handleStock(e) {
    setShowOnlyInStock(e.target.value);
    console.log(showOnlyInStock);
  }

  return (
    <div className="products-container">
      <div className="filters">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search by name..."
        />

        <label htmlFor="stockCheck">Stock Filter</label>
        <select id="stockCheck" value={showOnlyInStock} onChange={handleStock}>
          <option value="all">ALL</option>
          <option value="inStock">In Stock Only</option>
          <option value="outOfStock"> Out of Stock Only</option>
        </select>
      </div>
      <h2 className="title">Product List</h2>

      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>In Stock</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.description}</td>
                <td className={product.inStock ? "stock-yes" : "stock-no"}>
                  {product.inStock ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
