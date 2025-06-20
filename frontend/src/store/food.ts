import {create} from "zustand";
//creating a new hook for managing the foods
type Food = {
    _id: string;
    name: string;
    price: number;
    image: string;
}

type FoodStore = {
  foods: Food[];
  setFood: (food: Food) => void;
  createFood: (newFood: Food) => Promise<{ success: boolean; message: string }>;
  fetchFood: () => Promise<{success:boolean,message:string,length:number}>;
  deleteFood: (id: string) => Promise<{ success: boolean; message: string }>;
  editFood: (food: Food) => Promise<{ success: boolean; message: string }>;
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
        try{
            const res = await fetch('/api/products');
            const data = await res.json();
            set({foods: data.data});
            return { success:true, message:"fetched data",length: data.data.length}
        }
        catch(err){
            return { success:false, message:"couldn't fetch data"}
        }
    },
    deleteFood: async(id:any) => {
        const res = await fetch(`/api/products/${id}`,{
            method:"DELETE"
        });

        const data = await res.json()
        if(!data.success){
            return {success: false, message: data.message}
        }

        set((state:any) => ({foods: state.foods.filter((food:Food) => food._id !== id)})) 

        return {success: true,message:data.message};
    },
    editFood: async(updatedFood:Food) =>{
        const res = await fetch(`/api/products/${updatedFood._id}`, {
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
            food._id === updatedFood._id ? updatedFood : food
            )
        }));

        return { success: true, message: data.message };
    }
}))