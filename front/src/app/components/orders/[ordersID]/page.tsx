import React from "react";

interface Product {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface Order {
  id: number;
  date: string;
  products: Product[];
}

interface OrdersDetailProps {
  order: Order;
  onBack: () => void; // Función para volver a la lista de órdenes
}

const OrdersDetail: React.FC<OrdersDetailProps> = ({ order, onBack }) => {


  return (
    <div className="p-6 bg-white rounded-md shadow-md max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Detalle de la Orden {order.id}</h1>
      <p className="text-lg font-semibold">Fecha: {new Date(order.date).toLocaleDateString()}</p>

      <h2 className="text-xl font-semibold mt-6">Productos:</h2>
      <ul className="list-disc ml-4">
  {order.products.map((product, index) => (
    <li key={index} className="mb-4 flex items-center justify-between">
      {/* Contenedor para el texto */}
      <div className="flex-1 mr-4">
        <p className="font-semibold">{product.name}</p>
        <p>Precio: ${product.price}</p>
        <p>Total: ${product.price * product.quantity}</p>
      </div>
      {/* Imagen */}
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover"
      />
    </li>
  ))}
</ul>


      <button
  onClick={() => {
    onBack(); // Llama a la función para volver a la lista de órdenes
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplaza la ventana al inicio
  }}
  className="mt-6 py-2 px-4 bg-gray-800 text-white rounded-md"
>
  Volver a la lista de órdenes
</button>
    </div>
  );
};

export default OrdersDetail;