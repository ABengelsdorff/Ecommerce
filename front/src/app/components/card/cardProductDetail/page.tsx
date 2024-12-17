"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { IProductDetail } from "../interface"; 
import { Image } from "@nextui-org/react";

interface CardProductDetailProps extends IProductDetail {
  addToCart: () => void; // Prop para la función addToCart
}


const CardProductDetail: React.FC<CardProductDetailProps> = ({
  name,
  description,
  price,
  image,
  addToCart
}) => {
    return (
        <div className=" p-8 rounded-lg shadow-xl max-w-md mx-auto relative ">
          {/* Contenedor para la información del producto */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
          </div>
    
          {/* Contenedor centrado para la imagen */}
          <div className="flex justify-center mb-6">
            <Image
              isZoomed
              alt={name}
              className="w-110 h-80 object-cover rounded-lg shadow-md"
              src={image}
            />
          </div>
            <p className="text-center text-lg text-black uppercase font-extrabold ">{name}</p>
    
          {/* Descripción del producto */}
          <h4 className="text-black font-medium text-lg mt-2 text-center">{description}</h4>
    
          {/* Precio y botón */}
          <div className="text-center mt-4">
            <p className="font-bold text-gray-800 mb-4 text-xl">Price: ${price}</p>
            <Button
          onClick={addToCart}
          color="primary"
          variant="flat"
          className="w-full py-3 shadow-lg hover:shadow-xl transition-shadow"
        >
          Agregar al carrito
        </Button>
          </div>
        </div>
      );
      
};

export default CardProductDetail;

