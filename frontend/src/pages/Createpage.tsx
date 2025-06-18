import { useFoodStore } from '../store/food';
import { useState } from 'react';
import Toast from '../components/Toast';
type FoodStore = {
    createFood: (food: { name: string; price: string; image: string }) => Promise<[any, any]>;
};

const Createpage = () => {
    const [food,setFood] = useState({
        name:"",
        price:"",
        image:""
    });

    const { createFood } = useFoodStore() as FoodStore;
    const [showToast,setShowtoast] = useState({show:false,message:""});
    async function handleAddFood(){
        const [success, message] = await createFood(food);
        if(success){
            setShowtoast({show:true,message:message})
        }
    }

    return (
    <>
        <div id="Add Product" className='bg-black flex flex-col justify-center items-center gap-5 p-10'>
            <h1 className='font-bold text-3xl'>Add Product</h1>
            <input 
                type='text' 
                className='bg-white text-black focus:border-2 rounded-2xl w-9/12 h-10 p-5' 
                placeholder="name" 
                onChange={(e)=> setFood({...food,name: e.target.value})}
                />
            <input 
                type='text' 
                className='bg-white text-black focus:border-2 rounded-2xl w-9/12 h-10 p-5' 
                placeholder="price" 
                onChange={(e)=> setFood({...food,price: e.target.value})}
                />
            <input 
                type='text' 
                className='bg-white text-black focus:border-2 rounded-2xl w-9/12 h-10 p-5' 
                placeholder="image url" 
                onChange={(e)=>setFood({...food,image: e.target.value})}
            />
            <input type='button' className='btn' value="add" onClick={handleAddFood} />
        </div>
        <Toast message={showToast.message} show={showToast.show} 
        onClose={()=> setShowtoast({show:false,message:""})}/>
    </>
  )
}

export default Createpage;