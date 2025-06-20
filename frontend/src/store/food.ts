import {create} from "zustand";
//creating a new hook for managing the foods
type Food = {
    id: string;
    name: string;
    price: number;
    image: string;
}

type FoodStore = {
  foods: Food[];
  setFood: (food: Food) => void;
  createFood: (newFood: Food) => Promise<{ success: boolean; message: string }>;
  fetchFood: () => Promise<void>;
  deleteFood: (id: string) => Promise<{ success: boolean; message: string }>;
  editFood: (id: string,food: Food) => Promise<{ success: boolean; message: string }>;
};

export const useFoodStore = create<FoodStore>((set)=>({
    foods:[],
    setFood: (food:any) => {
        set((state:any) => ({
            foods: [food,...state.foods],
        }))
    },
    createFood: async (newfood:Food) =>{
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
    },
    deleteFood: async(id:any) => {
        const res = await fetch(`/api/products/${id}`,{
            method:"DELETE"
        });

        const data = await res.json()
        if(!data.success){
            return {success: false, message: data.message}
        }

        set((state:any) => ({foods: state.foods.filter((food:Food) => food.id !== id)})) 

        return {success: true,message:data.message};
    },
    editFood: async(id:string,updatedFood:Food) =>{
        const res = await fetch(`/api/products/${id}`, {
            method: "PATCH",
            headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify(updatedFood)
        });

        const data = await res.json();

        if (!data.success) {
            return { success: false, message: data.message };
        }

        set((state: any) => ({
            foods: state.foods.map((food: Food) =>
            food.id === updatedFood.id ? updatedFood : food
            )
        }));

        return { success: true, message: data.message };
    }
}))