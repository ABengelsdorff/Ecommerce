import ProductDetail from "@/app/components/productDetail";
import React from "react";

interface PageProps {
  params: Promise<{ productID: string }>; //! Acá indica que params es una promesa
}

const Page = async ({ params }: PageProps) => {

  console.log("Params recibidos:", params);
 
  const resolvedParams = await params; //! Espera a que params se resuelva
  const productID = resolvedParams.productID;
  

  if (!productID) {
    return (
      <div>
        <h1>Error: No se proporcionó un ID del producto.</h1>
      </div>
    );
  }
  console.log("Params recibidos:", resolvedParams);

  return (
    <div>
      <ProductDetail id={productID} />
    </div>
  );
};

console.log(process.env.NEXT_PUBLIC_API_URL);


export default Page;



