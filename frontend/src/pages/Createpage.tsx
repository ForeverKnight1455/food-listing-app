import { useFoodStore } from '../store/food';
import { useState } from 'react';
import Toast from '../components/Toast';

const Createpage = () => {
    const [food,setFood] = useState({
        name:"",
        price:0,
        image:""
    });

    const { createFood } = useFoodStore();
    const [showToast,setShowtoast] = useState({show:false,message:""});
    async function handleAddFood(){
        const {success, message} = await createFood(food);
        if(success){
            setShowtoast({show:true,message:message});
            setFood({name:"",price:0,image:""})
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
                value={food.name}
                onChange={(e)=> setFood({...food,name: e.target.value})}
                />
            <input 
                type='text' 
                className='bg-white text-black focus:border-2 rounded-2xl w-9/12 h-10 p-5' 
                placeholder="price"
                value={food.price} 
                onChange={(e)=> setFood({...food,price: Number(e.target.value)})}
                />
            <input 
                type='text' 
                className='bg-white text-black focus:border-2 rounded-2xl w-9/12 h-10 p-5' 
                placeholder="image url"
                value={food.image}
                onChange={(e)=>setFood({...food,image: e.target.value})}
            />
            <input type='button' className='btn' value="add" onClick={()=>{handleAddFood()}} />
        </div>
        <Toast 
            message={showToast.message} 
            show={showToast.show} 
            onClose={()=> setShowtoast({show:false,message:""})}
        />
    </>
  )
}

export default Createpage;