"use client";
import React, { useState, useEffect } from "react";
import { IProducts } from "./card/interface";
import { getProductsById } from "../services/productServices";

import CardProductDetail from "./card/cardProductDetail/page";
import useUserDataStore from "@/store";

import { toast } from 'sonner'



interface PropsProductDetail {
  id: string;
}

const ProductDetail: React.FC<PropsProductDetail> = ({ id }) => {
  const [producto, setProducto] = useState<IProducts | null>(null);
  const { userData } = useUserDataStore()


const addToCart = () => {
  if(userData?.token) {
    toast.success("Producto agregado al carrito")

  }
  if (!userData?.token) {
    toast.error("Debes iniciar sesion para agregar productos al carrito")
  }
}
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await getProductsById(id);
        setProducto(productResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!producto) {
    return <p>Producto no encontrado...</p>;
  }

  return (

    <CardProductDetail
      name={producto.name}
      description={producto.description}
      image={producto.image}
      price={producto.price}
      addToCart={addToCart}
    />

   

  );
}

export default ProductDetail;
