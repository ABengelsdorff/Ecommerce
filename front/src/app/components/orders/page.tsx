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

  if (selectedOrder) {
    // Si hay una orden seleccionada, mostrar el detalle
    return <OrdersDetail order={selectedOrder} onBack={handleBackToOrdersList} />;
  }

  // Si no hay orden seleccionada, mostrar la lista de órdenes
  return (
    <div>
      {orders.length === 0 ? (
        <p>No hay órdenes disponibles.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id}>
            <h3 className="text-lg font-semibold">Orden {order.id}</h3>
            <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
            
            <Button onClick={() => handleViewOrderDetails(order)}>
              Ver detalle de la orden
            </Button>
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersList;