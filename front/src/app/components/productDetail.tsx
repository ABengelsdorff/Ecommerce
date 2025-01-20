"use client";
import React, { useState, useEffect } from "react";
import { IProducts } from "./cardProduct/interface";
import { getProductsById } from "../services/productServices";

import CardProductDetail from "./cardProduct/cardProductDetail/page";
import useUserDataStore from "@/store";

import { useRouter } from "next/navigation";

import { toast } from 'sonner'



interface PropsProductDetail {
  id: string;
}

const ProductDetail: React.FC<PropsProductDetail> = ({ id }) => {
  const [producto, setProducto] = useState<IProducts | null>(null);
  
  const { userData, cart, setCart } = useUserDataStore()

  const router = useRouter()


  const addToCart = () => {
    if (!userData?.token) {

      toast.error("Debes iniciar sesión para agregar productos al carrito", { duration: 3000, style: {
        color: '#dc3545', 
        background: '#f8d7da',  
        borderRadius: '8px',  
        padding: '16px', 
        border: '1px solid #f5c6cb',
      } });
      router.push("/login")
      return;
    }

    //some: verifica si al menos un elemento del array cumple con una condición especificada en una función de callback.
    if (producto) {
      const productExist = cart.some(
        (product: IProducts) => product.id === producto.id
      );
      
      if (productExist) {

        toast.error(`${producto.name}, ya existe en el carrito`, { duration: 3000,  style: {
            color: '#dc3545', 
            background: '#f8d7da',  
            borderRadius: '8px',  
            padding: '16px', 
            border: '1px solid #f5c6cb',
          }
        });
        router.push("/product")
        
        
      } else {
        setCart([...cart, producto]); // Agregar al carrito
        toast.success(`${producto.name}, agregado al carrito`, { duration: 3000,  style: {
          color: '#155724', 
          background: '#d4edda',  
          borderRadius: '8px',  
          padding: '16px', 
          border: '1px solid #c3e6cb',
        }});
        router.push("/product")
      }
    }
  };
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await getProductsById(id);
        setProducto(productResponse);

      } catch {
        toast.error("Hubo un problema al cargar el producto,", {duration: 3000, style: {
          color: '#dc3545', 
          background: '#f8d7da',  
          borderRadius: '8px',  
          padding: '16px', 
          border: '1px solid #f5c6cb',
      }})
      }
    };

    fetchData();
  }, [id]);
  //[id] es el array de dependencias del useEffect. Esto significa que el efecto (la función fetchData) se ejecutará cada vez que cambie el valor de id.
  //Si el array está vacío ([]), el efecto solo se ejecutará una vez, al montar el componente.

  if (!producto) {
    return <div className="flex items-center justify-center h-screen">
    <p className="text-gray-500 text-lg">Producto no encontrado...</p>
  </div>
    
  }

  return (

    <CardProductDetail
      id={producto.id.toString()}
      name={producto.name}
      description={producto.description}
      image={producto.image}
      price={producto.price}
      addToCart={addToCart}
    />


  );
}

export default ProductDetail;
