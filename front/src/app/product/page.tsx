import React from "react";
import { getProducts } from "../services/productServices";
import { IProducts } from "../components/card/interface";
import CardProduct from "../components/card/page";
import Link from "next/link";



export default async function Products() {
  const products = await getProducts()

  console.log('Productos obtenidos: ', products);

  return (
    <div className="container mx-auto p-4 py-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {products.map((product: IProducts) => (

        <Link key={product.id} href={`/product/${product.id}`}>
          <CardProduct
          id={product.id}
          name= {product.name}
          description={product.description}
          price={product.price}
          stock={product.stock}
          image={product.image}
          />
        </Link>
        ))}
      </ul>
      
    </div>
    
  );
  
};



