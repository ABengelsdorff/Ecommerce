import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import OrdersDetail from "./[ordersID]/page";

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

interface OrdersListProps {
  orders: Order[];
}

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null); // Estado para manejar la orden seleccionada

  const handleViewOrderDetails = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleBackToOrdersList = () => {
    setSelectedOrder(null);
  };

    // Ordenar las órdenes por fecha (de más reciente a más antigua)
  const sortedOrders = [...orders].sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  if (selectedOrder) {
    // Si hay una orden seleccionada, mostrar el detalle
    return <OrdersDetail order={selectedOrder} onBack={handleBackToOrdersList} />;
  }

  // Si no hay orden seleccionada, mostrar la lista de órdenes
  return (
    <div className="bg-gray-50 min-h-screen"> {/* Fondo general y espacio */}
      {orders.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No hay órdenes disponibles.</p>
      ) : (
        sortedOrders.map((order) => (
          <div 
            key={order.id} 
            className=" m-4 p-6 rounded-md shadow-md max-w-2xl mx-auto transition-all hover:shadow-lg"> {/* Contenedor principal */}
            
            <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8 space-y-4 md:space-y-0"> {/* Diseño responsivo */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">Orden {order.id}</h3>
                <p className="text-lg font-medium text-gray-700">
                  Fecha: {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
  
              <Button
                onClick={() => handleViewOrderDetails(order)}
                color="primary"
                variant="flat"
                className="w-full md:w-auto px-6 py-2 text-sm font-semibold md:ml-auto" // Espaciado en pantallas grandes
              >
                Ver detalle de la orden
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
  
  
  
};

export default OrdersList;