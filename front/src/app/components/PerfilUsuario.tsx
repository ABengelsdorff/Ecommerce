"use client";
import useUserDataStore from "@/store";
import React, { useEffect, useState, useCallback } from "react";
import { getOrdersService } from "../services/orderServices";
import OrdersList from "./orders/page";

const PerfilUsuario: React.FC = () => {
  const [orders, setOrders] = useState([]);
  const { userData } = useUserDataStore();

  //Memoriza la función getOrders y evita que cambie en cada renderización.
  const getOrders = useCallback(async () => {
    if (!userData?.token) return; // Asegúrate de que token esté definido
    try {
      const res = await getOrdersService(userData.token);
      setOrders(res);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }, [userData?.token]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  if (!userData?.user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">No hay información de usuario disponible.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 max-w-7xl mx-auto">
      
      {/* Información del usuario */}
      <div className="flex flex-col  items-center space-y-6 bg-white p-6 rounded-lg shadow-md h-full">
        <h1 className="text-3xl font-bold text-gray-800">Información del Usuario</h1>
        <div className="space-y-2 text-center">
          <p>
            <strong className="font-medium text-gray-700">Nombre:</strong> {userData.user.name}
          </p>
          <p>
            <strong className="font-medium text-gray-700">Email:</strong> {userData.user.email}
          </p>
          <p>
            <strong className="font-medium text-gray-700">Dirección:</strong> {userData.user.address}
          </p>
          <p>
            <strong className="font-medium text-gray-700">Teléfono:</strong> {userData.user.phone}
          </p>
        </div>
      </div>

      {/* Lista de órdenes */}
      <div className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-gray-800">Mis Órdenes</h2>
        {orders.length > 0 ? (
          <OrdersList orders={orders} />
        ) : (
          <p className="text-gray-500 text-center">No tienes órdenes registradas.</p>
        )}
      </div>
    </div>
  );
};

export default PerfilUsuario;





// "use client"; 
// import useUserDataStore from "@/store";
// import React, { useEffect, useState } from "react";
// import { getOrdersService } from "../services/orderServices";
// import OrdersList from "./orders/page";

// const PerfilUsuario: React.FC = () => {
//   const [orders, setOrders] = useState([]);
//   const { userData } = useUserDataStore();

//   if (!userData?.user) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-gray-500 text-lg">No hay información de usuario disponible.</p>
//       </div>
//     );
//   }

//   const getOrders = async () => {
//     const res = await getOrdersService(userData.token);
//     setOrders(res);  
//   };

//   useEffect(() => {
//     if (!userData?.token) return;
//     getOrders();
//   }, [userData]);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 max-w-7xl mx-auto">
//       {/* Columna izquierda: Información del usuario */}
// <div className="flex flex-col justify-center items-center space-y-6 bg-white p-6 rounded-lg shadow-md h-full">
//   <h1 className="text-3xl font-bold text-gray-800">Información del Usuario</h1>
//   <div className="space-y-2 text-center">
//     <p><strong className="font-medium text-gray-700">Nombre:</strong> {userData.user.name}</p>
//     <p><strong className="font-medium text-gray-700">Email:</strong> {userData.user.email}</p>
//     <p><strong className="font-medium text-gray-700">Dirección:</strong> {userData.user.address}</p>
//     <p><strong className="font-medium text-gray-700">Teléfono:</strong> {userData.user.phone}</p>
//   </div>
// </div>

//       {/* Columna derecha: Órdenes */}
//       <div className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-gray-800">Mis Órdenes</h2>
//         {orders.length > 0 ? (
//           <OrdersList orders={orders} />
//         ) : (
//           <p className="text-gray-500 text-center">No tienes órdenes registradas.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PerfilUsuario;



