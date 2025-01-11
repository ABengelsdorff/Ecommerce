"use client";

import useUserDataStore from "@/store";
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@nextui-org/react";
import { IProducts } from "./cardProduct/interface";
import { createOrderService } from "../services/orderServices";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

function CartProducts() {
  const [totalPrecio, setTotalPrecio] = useState(0);
  const { userData, setCart, cart } = useUserDataStore();
  const [isLogging, setIsLogging] = useState(false); // Estado de carga
  const router = useRouter();

  // Función auxiliar para validar usuario
  const isUserAuthenticated = useCallback(() => {
    return userData?.user && userData?.token;
  }, [userData]);

  useEffect(() => {
    if (cart.length === 0) {
      setTotalPrecio(0);
      return;
    }
    const total = cart.reduce((acc, product: IProducts) => acc + product.price, 0);
    setTotalPrecio(total);
  }, [cart]);

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product: IProducts) => product.id !== productId);
    setCart(updatedCart);
  };

  const handleClick = async () => {
    setIsLogging(true);

    try {
      if (!isUserAuthenticated()) {
        toast.error("Usuario no autenticado. Inicia sesión.", { duration: 3000 });
        setIsLogging(false);
        return;
      }

      const idProducts = cart.map((product: IProducts) => product.id);

      const res = await createOrderService(idProducts, userData!.user.id, userData!.token); // El operador `!` asegura a TypeScript que no es null

      if (res?.status === "approved") {
        toast.success("Compra realizada con éxito", {
          duration: 3000,
          style: {
            color: "#155724",
            background: "#d4edda",
            borderRadius: "8px",
            padding: "16px",
            border: "1px solid #c3e6cb",
          },
        });
        setCart([]);
        router.push("/product");
      } else {
        toast.error("Error al realizar la compra", {
          duration: 3000,
          style: {
            color: "#dc3545",
            background: "#f8d7da",
            borderRadius: "8px",
            padding: "16px",
            border: "1px solid #f5c6cb",
          },
        });
      }
    } catch (error) {
      toast.error("Error inesperado al procesar la compra.", { duration: 3000 });
      console.error("Error en la compra:", error);
    } finally {
      setIsLogging(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 max-w-7xl mx-auto">
      {/* Primera columna: Productos */}
      <div className="col-span-2 space-y-4">
        {cart.length === 0 ? (
          <p className="text-gray-500 flex items-center justify-center h-full">Tu carrito está vacío.</p>
        ) : (
          cart.map((product: IProducts) => (
            <div
              key={product.id}
              className="flex items-center bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-grow">
                <p className="font-semibold text-lg">{product.name}</p>
                <p className="text-gray-600">${product.price}</p>
              </div>
              <Button
                color="danger"
                size="sm"
                onClick={() => removeFromCart(product.id)}
              >
                Eliminar
              </Button>
            </div>
          ))
        )}
      </div>

      {/* Segunda columna: Resumen de la compra */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-xl font-bold">Resumen de la Compra</h2>

        <div className="flex justify-between">
          <p className="font-medium">Total Productos:</p>
          <p>{cart.length}</p>
        </div>

        <div className="flex justify-between">
          <p className="font-medium">Total Precio:</p>
          <p className="font-bold">${totalPrecio}</p>
        </div>

        <Button
          onClick={handleClick}
          color="primary"
          className="w-full py-3"
          disabled={cart.length === 0}
        >
          Comprar
          {isLogging && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        </Button>
      </div>
    </div>
  );
}

export default CartProducts;