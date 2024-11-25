import React from "react";
import { products } from "./Products";

export const Cards:React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((product) => (
          <li key={product.id}  className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-center">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold text-gray-800 mb-2">Price: ${product.price}</p>
            <p className="text-sm text-gray-500 mb-4">Stock: {product.stock}</p>
            <img src={product.image} alt={product.name} width="100" />


            <button className="bg-blue-500 text- px-4 py-2 rounded hover:bg-blue-600">
              Buy Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;