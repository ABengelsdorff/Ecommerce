"use client";
import React from "react";
import { Button, Image, Link } from "@nextui-org/react";

import { IProducts } from "./interface";


const CardProduct: React.FC<IProducts> = ({
  id,
  name,
  description,
  price,
  stock,
  image,
}) => {
  return (
    <li className="shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow ">
      <h3 className="text-2xl font-bold mb-4 text-center">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="font-bold text-gray-800 mb-2">Price: ${price}</p>
      <p className="text-sm text-gray-500 mb-4">Stock: {stock}</p>
      <Image
        src={image}
        alt={name}
        className="object-cover rounded-xl"
        width={270}
        height={270}
      />
      <Link href={`/product/${id}`}>
        <Button color="primary" variant="flat" className="w-full mt-2">
          Ver detalle del producto
        </Button>
      </Link>
    </li>
  );
};

export default CardProduct;

