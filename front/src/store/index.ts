import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface EcommerceStore {
    userData: any;
    setUserData: (data: any) => void;
}

const useUserDataStore = create<EcommerceStore>()(
    devtools(
        persist(
            (set) => ({
                userData: null,
                setUserData: (data) => set({userData : data}),
            }),
            {
                name: "ecommerce-storage",
                storage: createJSONStorage( () => sessionStorage),
            }
        )
    )
)

export default useUserDataStore;