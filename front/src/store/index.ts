import { IProducts } from "@/app/components/cardProduct/interface";
import IRegisterData from "@/app/components/register/InterfaceRegister";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

//Datos del usuario
interface UserDataType{
    login:boolean,
    user: IRegisterData
    token:string,
}

//Estructura del estado global
interface EcommerceStore {
    cart: IProducts[];
    setCart: (data: IProducts[]) => void;
    userData: UserDataType | null;
    setUserData: (data: UserDataType | null) => void;
}

//Creacion del estado global
const useUserDataStore = create<EcommerceStore>()(
    devtools( 
        persist(
            (set) => ({
                userData: {
                    login: false,
                    user:{
                        id: 0,
                        name: "",
                        email: "",
                        password:"",
                        address:"",
                        phone:"",
                    },
                    token:"",
                },
                cart: [],
                setCart: (data) => set({ cart: data }), //Actualiza el carrito con los productos
                setUserData: (data) => set({userData : data}), //Actualiza los datos del usuario
            }),
            {
                name: "ecommerce-storage",
                storage: createJSONStorage( () => sessionStorage), 
            }
        )
    )
)

export default useUserDataStore;


