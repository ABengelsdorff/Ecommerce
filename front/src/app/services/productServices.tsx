import { IProducts } from "../components/cardProduct/interface";

const apiURL = process.env.NEXT_PUBLIC_API_URL

export async function getProducts(): Promise<IProducts[]> {
    try {
        const res = await fetch(`${apiURL}/products`, {
            method: "GET",
            next: { revalidate : 3600 } //3600 (una hora)

        });
        const products: IProducts[] = await res.json();
        return products;
        
    } catch (error) {
        throw new Error(error as string)
    }
}

export async function getProductsById(id : string) {
    try {
        const products = await getProducts();
        const product = products.find((product) => product.id.toString() === id)
        if(!product) throw new Error ("Producto no encontrado");
        return product
    } catch (error) {
        throw new Error (error as string);
    }
}

