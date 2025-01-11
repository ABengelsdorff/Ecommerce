import { IProducts } from "@/app/components/cardProduct/interface";
import IRegisterData from "@/app/components/register/InterfaceRegister";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface UserDataType{
    login:boolean,
    user: IRegisterData
    token:string,
}


interface EcommerceStore {
    cart: IProducts[];
    setCart: (data: IProducts[]) => void;
    userData: UserDataType | null;
    setUserData: (data: UserDataType | null) => void;
}

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
                setCart: (data) => set({ cart: data }),
                setUserData: (data) => set({userData : data}),
            }),
            {
                name: "ecommerce-storage",
                storage: createJSONStorage( () => sessionStorage), //AQUI PODRIA SER UN LocalStorage
            }
        )
    )
)

export default useUserDataStore;


