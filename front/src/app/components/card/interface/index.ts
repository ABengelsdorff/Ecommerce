export interface IProducts {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    categoryId?: number
}

export interface IProductDetail {
    name: string,
    description: string,
    image: string,
    price: number,
}


