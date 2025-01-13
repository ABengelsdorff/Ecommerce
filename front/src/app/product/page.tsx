import React from "react";
import { products } from "@/components/utils/Products"; 
import CardProduct from "../../components/cardProduct/page"; // Asegúrate de que el componente esté correctamente importado

export default function Products() {
  const productsMock = products; // Usar los productos mock en lugar de la llamada a la API

  return (
    <div className="container mx-auto p-4 py-4 mt-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsMock.map((product) => (
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
}



















// import React from "react";
// import { getProducts } from "../services/productServices";
// import { IProducts } from "../../components/cardProduct/interface";
// import CardProduct from "../../components/cardProduct/page";


// export default async function Products() {
//   const products = await getProducts()

//   console.log('Productos obtenidos: ', products);

//   return (
//     <div className="container mx-auto p-4 py-4 mt-8">
//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//       {products.map((product: IProducts) => (

      
// <CardProduct
//             key={product.id}
//             id={product.id}
//             name={product.name}
//             description={product.description}
//             price={product.price}
//             stock={product.stock}
//             image={product.image}
//           />
      
//         ))}
//       </ul>
      
//     </div>
    
//   );

// };



