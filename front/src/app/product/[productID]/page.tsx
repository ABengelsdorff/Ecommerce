import React from "react"
import { notFound } from "next/navigation";


function page({params}: { params: {productID: string } }) {
    const  { productID } = params

//     const existingProducts = ["1", "2", "3"]; // IDs de productos válidos

//     if (!existingProducts.includes(productID)) {
//     notFound(); // Redirige automáticamente a la página `not-found`
//   }

    return(
        <div>
            <h1>Producto con el id {productID} de mi pagina dinamica </h1>
        </div>
    )
}
export default page;