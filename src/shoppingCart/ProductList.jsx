import useCartContext from "./useCartContext";

function ProductList() {
  const { handleAddToCart } = useCartContext();
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 49.99,
      image: "https://placehold.co/100x100/blue/white?text=Headphones",
      description:
        "Noise-canceling over-ear headphones with long battery life.",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      price: 29.99,
      image: "https://placehold.co/100x100/brown/white?text=Speaker",
      description: "Portable speaker with rich bass and 10 hours of playtime.",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 89.99,
      image: "https://placehold.co/100x100/orange/yellow?text=Watch",
      description:
        "Fitness tracker with heart-rate monitoring and sleep tracking.",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 19.99,
      image: "https://placehold.co/100x100/gray/white?text=Laptop",
      description: "Ergonomic aluminum stand for laptops and tablets.",
    },
    {
      id: 5,
      name: "USB-C Hub",
      price: 24.99,
      image: "https://placehold.co/100x100/black/white?text=USB",
      description: "7-in-1 USB-C hub with HDMI, SD card reader, and USB ports.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow p-4 flex flex-col items-center bg-white"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 mb-2 object-contain"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-500 text-sm mb-1">{product.description}</p>
          <p className="text-blue-600 font-bold mb-2">${product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="px-4 py-1 bg-blue-500  text-white rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
