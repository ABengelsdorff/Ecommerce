import ProductDetail from "@/app/components/productDetail";
import React from "react";

interface PageProps {
  params: { productID: string };
}

const Page = async ({ params }: PageProps) => {
  // Aseguramos que params.productID se acceda correctamente
  const productID = params.productID;

  if (!productID) {
    return (
      <div>
        <h1>Error: No se proporcionó un ID del producto.</h1>
      </div>
    );
  }
  console.log("Params recibidos:", params);

  return (
    <div>
      <ProductDetail id={productID} />
    </div>
  );


};


console.log(process.env.NEXT_PUBLIC_API_URL);


export default Page;



