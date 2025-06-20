import '../App.css'
import {useEffect} from 'react'
import  { useFoodStore } from '../store/food'
import Card from '../components/Card'

type Food = {
    _id: string;
    name: string;
    price: number;
    image: string;
};

type FoodStore = {
  createFood: (food: Food) => void;
  fetchFood: () => void;
  foods: Food[];
};

const Homepage = () => {
  const {fetchFood,foods} = useFoodStore();
  useEffect(()=>{
    fetchFood();
  },[fetchFood]);

  return (
    <>
      <div className='p-10 bg-grey border-2 rounded-xl flex-wrap flex gap-2 h-11/12 w-full justify-center items-center'>
        {/* {<h1 className='font-bold '>{empty?"No products available":""}</h1>} */}
        {foods.map((food: Food,index) => (
          <Card key={index} _id={food._id} name={food.name} price={food.price} image={food.image} />
        ))}
      </div>
    </> 
  )
}

export default Homepage
