"use client";
import React, { useState, useEffect } from "react";
import { IProducts } from "./interface";
import { getProductsById } from "../services";
import { Image } from "@nextui-org/react";

interface PropsProductDetail {
  id: string;
}

const ProductDetail: React.FC<PropsProductDetail> = ({ id }) => {
  const [producto, setProducto] = useState<IProducts | null>(null);

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
    <div>
      <h1>{producto.name}</h1>
      <p>{producto.description}</p>
      <Image src={producto.image} alt={producto.name} />
      <p>Precio: {producto.price}</p>
    </div>
  );
}

export default ProductDetail;
