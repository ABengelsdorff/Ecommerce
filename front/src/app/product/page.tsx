import React from "react";
import { getProducts } from "@/app/services/productServices";
import { IProducts } from "@/app/components/cardProduct/interface"; 
import CardProduct from "@/app/components/cardProduct/page";

//!Ver si no hay que hacerle con un useEffect

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-4 py-4 mt-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {products.map((product: IProducts) => (

      
<CardProduct
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            image={product.image}
          />
      
        ))}
      </ul>
      
    </div>
    
  );

};



