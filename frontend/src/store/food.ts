import {create} from "zustand";
//creating a custom hook
export const useFoodStore = create((set)=>({
    foods:[],
    setFood: (food:any[]) => set({food}),
    createFood: async (newfood:any) =>{
        if(!newfood.name ||!newfood.image || !newfood.price){
            return {success:false,message:"please fill in all fields"}
        }

        const res = await fetch("/api/products", {
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(newfood)
        }) 

        const data = await res.json();
        set((state:any) => ({foods: [...state.foods, data.data]}))
        return { success:true,message:"food added sucessfully"}
    },
    fetchFood: async () => {
        const res = await fetch('/api/products');
        const data = await res.json();
        set({foods: data.data});
    }
}))